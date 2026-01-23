"use client";
import { Bull } from "../types";
import { useCallback, useEffect, useState } from "react";
import { mark, refetchBulls } from "./actions";
import { Header } from "./components/Header";
import { Filters } from "./components/Filters";
import { SearchBar } from "./components/SearchBar";
import { BullsList } from "./components/BullsList";
import { Pagination } from "./components/Pagination";
import { useRouter } from "next/navigation";
import { deleteCookie } from "cookies-next/client";

export default function BullsClient({
  initialBulls,
}: {
  initialBulls: Bull[];
}) {
  type ScoreOrder = "high" | "low";
  type OrigenFilter = "todos" | "propio" | "catalogo" | "favoritos";

  const router = useRouter();
  const [bulls, setBulls] = useState(initialBulls);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [origen, setOrigen] = useState<OrigenFilter>("todos");
  const [uso, setUso] = useState(true);
  const [pelaje, setPelaje] = useState<"" | "negro" | "colorado">("");
  const [scoreOrder, setScoreOrder] = useState<ScoreOrder>("high");
  const [page, setPage] = useState(1);
  const limit = 9;

  const [totalPages, setTotalPages] = useState(1);

  const handleOrigenChange = (value: OrigenFilter) => {
    setOrigen(value);
  };

  const handleLogout = () => {
    deleteCookie("accessToken");
    router.push("/login");
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

    fetchBulls(buildParams());
  }, [page, search, origen, pelaje, fetchBulls, uso, scoreOrder]);

  return (
    <div className="h-screen relative w-full bg-dark overflow-hidden flex">
      <div className="absolute bg-dark inset-[0_80.49%_0_0] rounded-tr-[24px] z-0" />
      
      <div className="absolute bg-dark inset-[0_0_84.13%_15.83%] z-0" />
      
      <div className="absolute flex flex-col inset-[8.12%_0_0_18.54%] items-start z-0">
        <div className="bg-muted h-full rounded-tl-[40px] rounded-tr-[40px] w-full" />
      </div>

      <Header onLogout={handleLogout} />

      <Filters
        origen={origen}
        onOrigenChange={handleOrigenChange}
        uso={uso}
        onUsoChange={setUso}
        pelaje={pelaje}
        onPelajeChange={setPelaje}
        scoreOrder={scoreOrder}
        onScoreOrderChange={setScoreOrder}
      />

      <div className="absolute flex flex-col gap-[22px] left-[20.76%] right-[2.22%] top-[10.33%] bottom-[5.9%] items-start overflow-y-auto pr-4 z-10">
        <div className="flex gap-[8px] items-center w-full">
          <div className="size-[16px]">
            <svg className="block size-full" fill="none" viewBox="0 0 16 16">
              <path d="M13.4167 11.1548C14.4125 10.7648 15.4167 9.87593 15.4167 8.08333C15.4167 5.41667 13.1944 4.75 12.0833 4.75C12.0833 3.41667 12.0833 0.75 8.08333 0.75C4.08333 0.75 4.08333 3.41667 4.08333 4.75C2.97222 4.75 0.75 5.41667 0.75 8.08333C0.75 9.87593 1.75418 10.7648 2.75 11.1548" stroke="#1C2620" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
            </svg>
          </div>
          <p className="font-normal text-[14px] text-text-primary">
            Datos actualizados hace 2 min
          </p>
        </div>

        <div className="flex flex-col items-start w-full">
          <div className="flex flex-col gap-[8px] items-start w-full">
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center">
                <p className="font-semibold text-[32px] text-text-primary">
                  Resultados de la clasificación
                </p>
              </div>
            </div>
            <p className="font-normal text-[16px] text-text-primary w-full">
              Los resultados están ordenados por Bulltrack Score que reflejan tus objetivos de producción
            </p>
          </div>
        </div>

        <SearchBar 
          search={search}
          onSearchChange={setSearch}
          totalResults={bulls.length}
        />

        {loading && <p className="text-text-primary">Cargando toros…</p>}

        {!loading && bulls.length === 0 && (
          <p className="text-text-secondary text-center mt-6 w-full">
            No se encontraron toros
          </p>
        )}

        {!loading && bulls.length > 0 && (
          <BullsList 
            bulls={bulls}
            currentPage={page}
            itemsPerPage={limit}
            onToggleFavorite={toggleFavorite}
          />
        )}

        {!loading && bulls.length > 0 && (
          <Pagination
            currentPage={page}
            totalPages={totalPages}
            onPageChange={setPage}
          />
        )}
      </div>
    </div>
  );
}
