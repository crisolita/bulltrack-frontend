"use client";

import { useState } from "react";

type OrigenFilter = "todos" | "propio" | "catalogo" | "favoritos";

interface FiltersProps {
  origen: OrigenFilter;
  onOrigenChange: (value: OrigenFilter) => void;
  uso: boolean;
  onUsoChange: (value: boolean) => void;
  pelaje: "" | "negro" | "colorado";
  onPelajeChange: (value: "" | "negro" | "colorado") => void;
  scoreOrder?: "high" | "low";
  onScoreOrderChange: (value: "high" | "low") => void;
}

export function Filters({
  origen,
  onOrigenChange,
  uso,
  onUsoChange,
  pelaje,
  onPelajeChange,
  scoreOrder,
  onScoreOrderChange,
}: FiltersProps) {
  const [pelajeOpen, setPelajeOpen] = useState(false);
  const [ordenamientoOpen, setOrdenamientoOpen] = useState(false);

  const origenOptions = [
    { id: "todos" as OrigenFilter, label: "Todos" },
    { id: "propio" as OrigenFilter, label: "Toros propios" },
    { id: "catalogo" as OrigenFilter, label: "Catálogo" },
    { id: "favoritos" as OrigenFilter, label: "Favoritos" },
  ];

  return (
    <div className="absolute flex flex-col gap-[26px] left-[40px] top-[10.33%] bottom-[2.95%] w-[14%] items-start overflow-auto z-10">
      <div className="flex flex-col gap-[26px] items-start w-full">
        <div className="flex flex-col items-start w-full">
          <p className="font-medium text-[14px] text-white tracking-[0.56px] uppercase">
            Filtros activos
          </p>
        </div>

        <div className="flex flex-col gap-[16px] items-start w-full">
          <p className="font-normal text-[14px] text-white">Origen</p>
          <div className="flex flex-col gap-[8px] items-start w-full">
            {origenOptions.map((option) => (
              <button
                key={option.id}
                onClick={() => onOrigenChange(option.id)}
                className={`bg-dark-secondary h-[56px] rounded-[8px] w-full flex items-center justify-between px-[12px] hover:bg-dark-hover transition-colors ${
                  origen === option.id ? "border border-accent" : ""
                }`}
              >
                <span className="font-normal text-[14px] text-white">
                  {option.label}
                </span>
                <div
                  className={`relative rounded-[8px] size-[24px] ${
                    origen === option.id
                      ? "bg-accent"
                      : "border-[1.5px] border-accent"
                  }`}
                >
                  {origen === option.id && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <svg
                        className="size-[16px]"
                        fill="none"
                        viewBox="0 0 16 16"
                      >
                        <path
                          d="M3 8L6.5 11.5L13 5"
                          stroke="#111714"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                        />
                      </svg>
                    </div>
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-center w-full">
          <div className="h-[0.5px] w-full bg-white opacity-50" />
        </div>

        <div className="flex flex-col gap-[16px] items-start w-full">
          <p className="font-medium text-[12px] text-white tracking-[0.48px] uppercase">
            Filtros productivos
          </p>

          <button
            onClick={() => onUsoChange(!uso)}
            className="bg-dark-secondary flex items-center py-[4px] rounded-[8px] w-full hover:bg-dark-hover transition-colors"
          >
            <div className="flex-1 flex flex-col items-start justify-center pl-[12px] py-[8px]">
              <p className="font-normal text-[14px] text-white">
                Para vaquillona
              </p>
              <p className="font-normal text-[12px] text-white">
                Facilidad de parto
              </p>
            </div>
            <div className="flex items-center justify-center pr-[16px]">
              <div
                className={`relative rounded-[12px] h-[24px] w-[44px] transition-colors ${
                  uso ? "bg-black" : "bg-[#4a4a4a]"
                }`}
              >
                <div
                  className={`absolute size-[20px] top-[2px] transition-all ${
                    uso ? "left-[2px]" : "left-[22px]"
                  }`}
                >
                  <svg className="block size-full" fill="none" viewBox="0 0 20 20">
                    <circle cx="10" cy="10" fill="#36E27B" r="10" />
                  </svg>
                </div>
              </div>
            </div>
          </button>

          <div className="flex flex-col gap-[8px] items-start w-full">
            <p className="font-normal text-[14px] text-white">Pelaje</p>
            <button
              onClick={() => setPelajeOpen(!pelajeOpen)}
              className="bg-dark-secondary h-[56px] rounded-[8px] w-full flex items-center justify-between px-[12px] hover:bg-dark-hover transition-colors"
            >
              <span className="font-normal text-[14px] text-white">
                {pelaje === "" ? "Todos" : pelaje === "negro" ? "Negro" : "Colorado"}
              </span>
              <svg className="size-[24px]" fill="none" viewBox="0 0 24 24">
                <path
                  d="M6.75 0.75L0.75 6.75L6.75 12.75"
                  stroke="#36E27B"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  transform="translate(8.625, 5.625) rotate(-90)"
                />
              </svg>
            </button>
            {pelajeOpen && (
              <div className="bg-dark-secondary rounded-[8px] w-full p-[8px] space-y-[4px]">
                <div
                  onClick={() => {
                    onPelajeChange("");
                    setPelajeOpen(false);
                  }}
                  className="text-white text-[14px] p-[8px] hover:bg-dark-hover rounded cursor-pointer"
                >
                  Todos
                </div>
                <div
                  onClick={() => {
                    onPelajeChange("colorado");
                    setPelajeOpen(false);
                  }}
                  className="text-white text-[14px] p-[8px] hover:bg-dark-hover rounded cursor-pointer"
                >
                  Colorado
                </div>
                <div
                  onClick={() => {
                    onPelajeChange("negro");
                    setPelajeOpen(false);
                  }}
                  className="text-white text-[14px] p-[8px] hover:bg-dark-hover rounded cursor-pointer"
                >
                  Negro
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="flex flex-col gap-[8px] items-start w-full">
          <p className="font-medium text-[12px] text-white tracking-[0.48px] uppercase">
            Ordenamiento
          </p>
          <button
            onClick={() => setOrdenamientoOpen(!ordenamientoOpen)}
            className="bg-dark-secondary h-[56px] rounded-[8px] w-full flex items-center justify-between px-[12px] hover:bg-dark-hover transition-colors"
          >
            <span className="font-normal text-[14px] text-white">
              {scoreOrder === "high" ? "Score mejor a peor" : "Score peor a mejor"}
            </span>
            <svg className="size-[24px]" fill="none" viewBox="0 0 24 24">
              <path
                d="M6.75 0.75L0.75 6.75L6.75 12.75"
                stroke="#36E27B"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                transform="translate(8.625, 5.625) rotate(-90)"
              />
            </svg>
          </button>
          {ordenamientoOpen && (
            <div className="bg-dark-secondary rounded-[8px] w-full p-[8px] space-y-[4px]">
              <div
                onClick={() => {
                  onScoreOrderChange("high");
                  setOrdenamientoOpen(false);
                }}
                className="text-white text-[14px] p-[8px] hover:bg-dark-hover rounded cursor-pointer"
              >
                Score mejor a peor
              </div>
              <div
                onClick={() => {
                  onScoreOrderChange("low");
                  setOrdenamientoOpen(false);
                }}
                className="text-white text-[14px] p-[8px] hover:bg-dark-hover rounded cursor-pointer"
              >
                Score peor a mejor
              </div>
            </div>
          )}
        </div>

        <div className="flex items-center justify-center w-full">
          <div className="h-[0.5px] w-full bg-white opacity-50" />
        </div>
      </div>

      <div className="bg-dark-secondary rounded-[8px] w-full border border-[#2b3a31]">
        <div className="flex flex-col gap-[16px] items-start p-[16px]">
          <div className="flex flex-col gap-[8px] items-start w-full">
            <p className="font-semibold text-[14px] text-white">
              Objetivo actual
            </p>
            <p className="font-light text-[14px] text-white">
              Maximizar la ganancia de peso (destete) manteniendo facilidad de parto.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
