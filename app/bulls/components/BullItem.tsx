"use client";

import { Bull } from "../../types";

interface BullItemProps {
  bull: Bull;
  rank: number;
  onToggleFavorite: (bullId: string) => void;
}

export function BullItem({ bull, rank, onToggleFavorite }: BullItemProps) {
  const normalizedScore = bull.score / 100;

  const getBadgeColor = (type: "origen" | "uso" | "pelaje") => {
    if (type === "origen") {
      return {
        bg: "bg-[#ecf8ef]",
        text: "text-[#43b75d]",
        border: "border-[#36e27b]",
      };
    } else if (type === "pelaje") {
      return {
        bg: "bg-[#FFF4E6]",
        text: "text-[#FF7A00]",
        border: "border-[#FFA94D]",
      };
    }
    return {
      bg: "bg-[#edefff]",
      text: "text-[#4e61f6]",
      border: "border-[#8a96f4]",
    };
  };

  const origenLabel =
    bull.origen === "propio"
      ? "Propio"
      : bull.origen === "catalogo"
        ? "Catálogo"
        : "Favorito";
  const usoLabel = bull.uso === "vaquillona" ? "Para vaquillona" : "Para vaca";
  const pelajeLabel = bull.pelaje === "negro" ? "negro" : "colorado";

  const bullImage =
    "https://images.unsplash.com/photo-1560493676-04071c5f467b?w=400&h=300&fit=crop&auto=format";

  const origenColors = getBadgeColor("origen");
  const pelajeColors = getBadgeColor("pelaje");

  const usoColors = getBadgeColor("uso");

  return (
    <div className="bg-white rounded-[24px] w-full hover:shadow-lg transition-shadow">
      <div className="flex flex-row items-center size-full">
        <div className="flex gap-[24px] items-center p-[24px] w-full">
          <div className="flex flex-col justify-center text-[#394d41] text-[32px]">
            <p className="font-semibold leading-[20px]">#{rank}</p>
          </div>

          <div className="flex gap-[24px] items-center p-[8px]">
            <div className="h-[72px] rounded-[8px] w-[83px]">
              <img
                alt={bull.nombre}
                className="w-full h-full object-cover rounded-[8px]"
                src={bullImage}
              />
            </div>
            <div className="flex flex-col gap-[16px] items-start">
              <div className="flex flex-col gap-[8px] items-start text-text-primary">
                <p className="font-semibold text-[24px]">{bull.nombre}</p>
                <p className="font-medium text-[16px]">
                  {bull.raza} . {bull.edadMeses} meses
                </p>
              </div>
              <div className="flex gap-[8px] items-start">
                <div
                  className={`${origenColors.bg} h-[24px] rounded-[8px] border-[1.5px] ${origenColors.border}`}
                >
                  <div className="flex h-full items-center justify-center px-[8px] py-[6px] rounded-[inherit]">
                    <div className="flex items-center justify-center px-[8px]">
                      <span
                        className={`font-semibold text-[10px] leading-[12px] ${origenColors.text}`}
                      >
                        {origenLabel}
                      </span>
                    </div>
                  </div>
                </div>
                <div
                  className={`${pelajeColors.bg} h-[24px] rounded-[8px] border-[1.5px] ${pelajeColors.border}`}
                >
                  <div className="flex h-full items-center justify-center px-[8px] py-[6px] rounded-[inherit]">
                    <div className="flex items-center justify-center px-[8px]">
                      <span
                        className={`font-semibold text-[10px] leading-[12px] ${pelajeColors.text}`}
                      >
                        {pelajeLabel}
                      </span>
                    </div>
                  </div>
                </div>
                <div
                  className={`${usoColors.bg} h-[24px] rounded-[8px] border-[1.5px] ${usoColors.border}`}
                >
                  <div className="flex h-full items-center justify-center px-[8px] py-[6px] rounded-[inherit]">
                    <div className="flex items-center justify-center px-[8px]">
                      <span
                        className={`font-semibold text-[10px] leading-[12px] ${usoColors.text}`}
                      >
                        {usoLabel}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex h-[144px] items-center justify-center w-0">
            <div className="flex-none rotate-[90deg]">
              <div className="h-0 w-[144px]">
                <div className="h-[1px] w-full bg-border" />
              </div>
            </div>
          </div>

          <div className="flex flex-1 gap-[24px] items-center min-h-px min-w-px">
            <div className="flex flex-1 flex-col gap-[8px] items-start justify-center min-h-px min-w-px">
              <div className="flex items-center justify-between w-full">
                <p className="font-medium text-[14px] text-text-primary tracking-[0.56px] uppercase">
                  Bull score
                </p>
                <p className="font-semibold text-[24px] text-text-primary">
                  {normalizedScore.toFixed(2)}
                </p>
              </div>
              <div className="h-[8.5px] w-full">
                <div className="h-full w-full bg-[#F1F1F1] rounded-[4px] relative">
                  <div
                    className="h-full bg-accent rounded-[4px] absolute top-0 left-0"
                    style={{ width: `${normalizedScore * 100}%` }}
                  />
                </div>
              </div>
              <p className="font-normal text-[16px] text-text-primary w-full">
                {bull.caracteristicaDestacada}
              </p>
            </div>

            <div className="inline-grid items-start justify-items-start">
              <div className="h-[87.6px] w-[88px]">
                <svg
                  className="block size-full"
                  fill="none"
                  viewBox="0 0 88 87.6"
                >
                  <g>
                    <g>
                      <circle cx="44" cy="43.6" fill="#F1F1F1" r="43.6" />
                      <circle
                        cx="44.4"
                        cy="44"
                        r="32.4"
                        stroke="#D9D9D9"
                        strokeWidth="0.8"
                        fill="none"
                      />
                      <path
                        d="M44.4 11.6L44.4 44"
                        stroke="#D9D9D9"
                        strokeWidth="0.8"
                      />
                      <path
                        d="M44.4 44L72.4 60.8"
                        stroke="#D9D9D9"
                        strokeWidth="0.8"
                      />
                      <path
                        d="M44.4 44L16.4 60.8"
                        stroke="#D9D9D9"
                        strokeWidth="0.8"
                      />
                    </g>
                    <path
                      d="M44.4 20L54 40L44.4 35L34.8 40Z"
                      fill="#CCF0DA"
                      fillOpacity="0.5"
                      stroke="#3ED97C"
                      strokeWidth="2"
                    />
                  </g>
                </svg>
              </div>
            </div>
          </div>

          <div className="flex h-[144px] items-center justify-center w-0">
            <div className="flex-none rotate-[90deg]">
              <div className="h-0 w-[144px]">
                <div className="h-[1px] w-full bg-border" />
              </div>
            </div>
          </div>

          <div className="flex flex-col items-end justify-center">
            <div className="flex flex-col gap-[16px] items-start">
              <button
                onClick={() => onToggleFavorite(bull.id)}
                className={`flex h-[40px] items-center justify-center p-[8px] rounded-[12px] transition-all ${
                  bull.favorites && bull.favorites.length > 0
                    ? "bg-accent hover:bg-[#2bc969]"
                    : "bg-primary hover:bg-[#29382f]"
                }`}
              >
                <svg className="size-[24px]" fill="none" viewBox="0 0 24 24">
                  <path
                    d="M11.0489 3.75L8.2659 9.39L2.0409 10.29L6.5439 14.67L5.4829 20.87L11.0489 17.93L16.6149 20.87L15.5539 14.67L20.0569 10.29L13.8319 9.39L11.0489 3.75Z"
                    stroke={
                      bull.favorites && bull.favorites.length > 0
                        ? "#1c2620"
                        : "white"
                    }
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    fill={
                      bull.favorites && bull.favorites.length > 0
                        ? "#1c2620"
                        : "none"
                    }
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
