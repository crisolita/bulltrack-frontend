"use client";

import { useState } from "react";

interface SearchBarProps {
  search: string;
  onSearchChange: (value: string) => void;
  totalResults: number;
}

export function SearchBar({ search, onSearchChange, totalResults }: SearchBarProps) {
  const [showCriterios, setShowCriterios] = useState(false);

  return (
    <div className="flex flex-col gap-[24px] items-start w-full">
      <div className="flex flex-col gap-[8px] items-start w-full">
        <button 
          onClick={() => setShowCriterios(!showCriterios)}
          className="bg-[#f1f1f1] rounded-[8px] w-full hover:bg-border-light transition-colors"
        >
          <div className="flex flex-col items-start p-[16px] w-full">
            <div className="flex items-center justify-between w-full">
              <div className="flex gap-[8px] items-center">
                <svg className="size-[24px]" fill="none" viewBox="0 0 24 24">
                  <path d="M0.75 0.75V5.75" stroke="#2D2D2D" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" transform="translate(11.625, 7.625)"/>
                  <path d="M0.75 0.75L5.75 5.75" stroke="#2D2D2D" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" transform="translate(11.625, 7.125)"/>
                  <circle cx="12" cy="12" r="10" stroke="#2D2D2D" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" fill="none"/>
                </svg>
                <p className="font-bold text-[16px] text-text-primary">
                  Criterios del ranking
                </p>
              </div>
              <svg 
                className={`size-[24px] transition-transform ${showCriterios ? 'rotate-180' : ''}`} 
                fill="none" 
                viewBox="0 0 24 24"
              >
                <path d="M6 9L12 15L18 9" stroke="#2D2D2D" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
            </div>
          </div>
        </button>

        {showCriterios && (
          <div className="bg-[#f1f1f1] rounded-[8px] p-[16px] w-full">
            <p className="font-normal text-[14px] text-text-primary leading-[20px]">
              Los criterios de ranking incluyen: facilidad de parto, peso al destete, ganancia de peso, y otros indicadores productivos seleccionados.
            </p>
          </div>
        )}

        <div className="bg-[#f1f1f1] rounded-[8px] w-full">
          <div className="flex flex-col items-start p-[16px] w-full">
            <div className="flex items-center justify-between w-full">
              <div className="flex gap-[24px] items-center">
                <div className="bg-white flex items-center px-[24px] py-[16px] rounded-[8px] min-w-[490px]">
                  <input
                    type="text"
                    placeholder="Busca por caravana, nombre o cabaña"
                    value={search}
                    onChange={(e) => onSearchChange(e.target.value)}
                    className="font-normal text-[16px] text-text-primary flex-1 outline-none bg-transparent"
                  />
                  <svg className="size-[24px] ml-2" fill="none" viewBox="0 0 24 24">
                    <path d="M0.75 0.75L4.75 4.75" stroke="#2D2D2D" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" transform="translate(17, 17)"/>
                    <circle cx="11" cy="11" r="8" stroke="#2D2D2D" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" fill="none"/>
                  </svg>
                </div>
                <div className="flex items-center">
                  <p className="font-normal text-[20px] text-text-primary">
                    <span className="font-bold">{totalResults}</span>
                    {` resultados`}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
