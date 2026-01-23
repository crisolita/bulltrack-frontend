"use client";
import { Bull } from "../types";

import { useCallback, useEffect, useState } from "react";
import { mark, refetchBulls } from "./actions";

export default function BullsClient({
  initialBulls,
}: {
  initialBulls: Bull[];
}) {
  type ScoreOrder = "high" | "low";
  type OrigenFilter = "todos" | "propio" | "catalogo" | "favoritos";

  const [bulls, setBulls] = useState(initialBulls);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [origen, setOrigen] = useState<OrigenFilter>("todos");
  const [uso, setUso] = useState(true);
  const [pelaje, setPelaje] = useState<"" | "negro" | "colorado">("");
  const [scoreOrder, setScoreOrder] = useState<ScoreOrder>();
  const [page, setPage] = useState(1);
  const limit = 9;

  const [totalPages, setTotalPages] = useState(1);

  const handleOrigenChange = (value: OrigenFilter) => {
    setOrigen(value);
  };
  const toggleFavorite = async (bullId: string) => {
    try {
      const updatedBull = await mark(bullId);
      alert("Marcado como favorito");
    } catch (err) {
      console.error(err);
      alert("No se pudo actualizar el favorito");
    }
  };

  const fetchBulls = useCallback(async (params = {}) => {
    setLoading(true);
    const query = new URLSearchParams(params).toString();
    const fechtBulls = await refetchBulls({ filter: query });
    setBulls(fechtBulls.data);
    setTotalPages(fechtBulls.meta.totalPages);

    setLoading(false);
  }, []);
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setPage(1);
  }, [search, origen, pelaje, uso, scoreOrder]);
  useEffect(() => {
    const buildParams = (): Record<string, string> => ({
      page: page.toString(),
      limit: limit.toString(),
      ...(search ? { search } : {}),
      ...(uso ? { uso: "vaquillona" } : { uso: "vaca" }),
      ...(pelaje ? { pelaje } : {}),
      ...(scoreOrder ? { sort: scoreOrder } : {}),
      ...(origen && origen !== "todos"
        ? origen === "favoritos"
          ? { favoritos: "true" }
          : { origen }
        : {}),
    });

    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchBulls(buildParams());
  }, [page, search, origen, pelaje, fetchBulls, uso, scoreOrder]);

  return (
    <>
      <div className="mb-6">
        <input
          type="text"
          placeholder="Buscar por nombre o  caravana "
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full md:w-96 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
        />
      </div>

      <aside className="flex flex-col md:flex-row gap-6">
        <h2 className="font-bold text-lg mb-4 text-primary">Filtros activos</h2>

        <p className="font-semibold text-gray-700 mb-2">Origen</p>

        <div className="space-y-2">
          {[
            { label: "Todos", value: "todos" },
            { label: "Toros propios", value: "propio" },
            { label: "Catálogo", value: "catalogo" },
            { label: "Favoritos", value: "favoritos" },
          ].map((opt) => (
            <label key={opt.value} className="flex items-center gap-2">
              <input
                type="radio"
                name="origen"
                checked={origen === opt.value}
                onChange={() => handleOrigenChange(opt.value as OrigenFilter)}
                className="accent-primary"
              />
              {opt.label}
            </label>
          ))}
        </div>
        <div className="mt-4">
          <p className="font-semibold text-gray-700 mb-2">Pelaje</p>

          <select
            value={pelaje}
            onChange={(e) => {
              const value = e.target.value as "" | "negro" | "colorado";
              setPelaje(value);
            }}
            className="w-full border border-gray-300 rounded-md px-3 py-2"
          >
            <option value="todos">Todos</option>
            <option value="negro">Negro</option>
            <option value="colorado">Colorado</option>
          </select>
        </div>
        <div className="mt-4">
          <p className="font-semibold text-gray-700 mb-2">Uso</p>

          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={uso}
              onChange={(e) => {
                const checked = e.target.checked;
                setUso(checked);
              }}
              className="accent-primary w-4 h-4"
            />
            <span>Vaquillona</span>
          </label>
        </div>
        <div className="mt-4">
          <p className="font-semibold text-gray-700 mb-2">Score</p>

          <select
            value={scoreOrder}
            onChange={(e) => {
              const value = e.target.value as ScoreOrder;
              setScoreOrder(value);
              fetchBulls();
            }}
            className="w-full border border-gray-300 rounded-md px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-accent"
          >
            <option value="high">Mejor → peor</option>
            <option value="low">Peor → mejor</option>
          </select>
        </div>
      </aside>

      {loading && <p>Cargando toros…</p>}
      <br></br>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {bulls.map((bull) => (
          <div
            key={bull.id}
            className="bg-white p-4 rounded-lg shadow border border-gray-200 hover:shadow-lg transition"
          >
            <h3 className="text-xl font-bold text-primary mb-2">
              {bull.nombre}
            </h3>
            <p>
              <span className="font-semibold">Caravana:</span> {bull.caravana}
            </p>
            <p>
              <span className="font-semibold">Raza:</span> {bull.raza}
            </p>
            <p>
              <span className="font-semibold">Pelaje:</span> {bull.pelaje}
            </p>
            <p>
              <span className="font-semibold">Origen:</span> {bull.origen}
            </p>
            <p>
              <span className="font-semibold">Uso:</span> {bull.uso}
            </p>
            <p>
              <span className="font-semibold">Edad:</span> {bull.edadMeses}{" "}
              meses
            </p>
            <p className="mt-2 italic text-gray-600">
              {bull.caracteristicaDestacada}
            </p>

            <div className="mt-3 grid grid-cols-2 gap-2 text-sm">
              <p>
                <span className="font-semibold">Crecimiento:</span>{" "}
                {bull.crecimiento}
              </p>
              <p>
                <span className="font-semibold">Facilidad parto:</span>{" "}
                {bull.facilidadParto}
              </p>
              <p>
                <span className="font-semibold">Reproducción:</span>{" "}
                {bull.reproduccion}
              </p>
              <p>
                <span className="font-semibold">Moderación:</span>{" "}
                {bull.moderacion}
              </p>
              <p>
                <span className="font-semibold">Carcasa:</span> {bull.carcasa}
              </p>
              <p>
                <span className="font-semibold">Score:</span> {bull.score}
              </p>
              <button
                onClick={() => toggleFavorite(bull.id)}
                className={`mt-3 w-full px-3 py-2 rounded-md text-sm font-semibold border transition
    ${
      bull.favorites
        ? "bg-primary text-white border-primary"
        : "bg-white text-primary border-primary hover:bg-primary hover:text-white"
    }`}
              >
                {bull.favorites ? "★ Favorito" : "☆ Marcar favorito"}
              </button>
            </div>
          </div>
        ))}

        {bulls.length === 0 && (
          <p className="text-gray-500 col-span-full text-center mt-6">
            No se encontraron toros
          </p>
        )}
      </div>
      <div className="flex justify-center items-center gap-4 mt-8">
        <button
          disabled={page === 1}
          onClick={() => {
            setPage((p) => p - 1);
            fetchBulls();
          }}
          className="px-4 py-2 rounded-md border disabled:opacity-50"
        >
          Anterior
        </button>

        <span className="font-semibold text-gray-700">
          Página {page} de {totalPages}
        </span>

        <button
          disabled={page === totalPages}
          onClick={() => {
            setPage((p) => p + 1);
            fetchBulls();
          }}
          className="px-4 py-2 rounded-md border disabled:opacity-50"
        >
          Siguiente
        </button>
      </div>
    </>
  );
}
