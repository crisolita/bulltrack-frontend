"use client";
import { Bull } from "../types";

import { useCallback, useEffect, useState } from "react";
import { refetchBulls } from "./actions";

export default function BullsClient({
  initialBulls,
}: {
  initialBulls: Bull[];
}) {
  const [bulls, setBulls] = useState(initialBulls);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [origen, setOrigen] = useState<OrigenFilter>("todos");
  type OrigenFilter = "todos" | "propio" | "catalogo" | "favoritos";

  const handleOrigenChange = (value: OrigenFilter) => {
    setOrigen(value);
  };

  const fetchBulls = useCallback(async (params = {}) => {
    setLoading(true);
    const query = new URLSearchParams(params).toString();
    const fechtBulls = await refetchBulls({ filter: query });
    setBulls(fechtBulls.data);
    setLoading(false);
  }, []);

  useEffect(() => {
    const buildParams = () => {
      if (origen == "todos") return { search };
      if (origen == "favoritos") return { favoritos: "true", search };
      return { origen, search };
    };

    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchBulls(buildParams());
  }, [search, origen, fetchBulls]);

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
      </aside>

      {loading && <p>Cargando toros…</p>}
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
            </div>
          </div>
        ))}

        {bulls.length === 0 && (
          <p className="text-gray-500 col-span-full text-center mt-6">
            No se encontraron toros
          </p>
        )}
      </div>
    </>
  );
}
