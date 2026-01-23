import { useState } from 'react';
import svgPaths from "../imports/svg-cy8rwqk6ep";

interface SearchBarProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  totalResults: number;
}

export function SearchBar({ searchQuery, onSearchChange, totalResults }: SearchBarProps) {
  const [viewMode, setViewMode] = useState<'list' | 'grid'>('list');
  const [showCriterios, setShowCriterios] = useState(false);

  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
      {/* Criterios del ranking */}
      <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
        <button 
          onClick={() => setShowCriterios(!showCriterios)}
          className="bg-[#f1f1f1] relative rounded-[8px] w-full hover:bg-[#e6e6e6] transition-colors"
        >
          <div className="content-stretch flex flex-col items-start p-[16px] relative w-full">
            <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
              <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
                <svg className="size-[24px]" fill="none" viewBox="0 0 24 24">
                  <path d="M0.75 0.75V5.75" stroke="#2D2D2D" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" transform="translate(11.625, 7.625)"/>
                  <path d={svgPaths.p4ba40} stroke="#2D2D2D" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" transform="translate(11.625, 7.125)"/>
                  <circle cx="12" cy="12" r="10" stroke="#2D2D2D" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" fill="none"/>
                </svg>
                <p className="font-['Inter:Bold',sans-serif] font-bold leading-[20px] not-italic relative shrink-0 text-[#2d2d2d] text-[16px]">
                  Criterios del ranking
                </p>
              </div>
              <svg 
                className={`size-[24px] transition-transform ${showCriterios ? '' : 'rotate-180'}`} 
                fill="none" 
                viewBox="0 0 24 24"
              >
                <path d={svgPaths.p3a568e10} stroke="#2D2D2D" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" transform="translate(8.625, 5.625) rotate(90) scale(-1, 1)" />
              </svg>
            </div>
          </div>
        </button>

        {showCriterios && (
          <div className="bg-[#f1f1f1] rounded-[8px] p-[16px] w-full">
            <p className="font-['Inter:Regular',sans-serif] text-[14px] text-[#2d2d2d] leading-[20px]">
              Los criterios de ranking incluyen: facilidad de parto, peso al destete, ganancia de peso, y otros indicadores productivos seleccionados.
            </p>
          </div>
        )}

        {/* Search bar and results */}
        <div className="bg-[#f1f1f1] relative rounded-[8px] w-full">
          <div className="content-stretch flex flex-col items-start p-[16px] relative w-full">
            <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
              <div className="content-stretch flex gap-[24px] items-center relative shrink-0">
                <div className="bg-white content-stretch flex items-center px-[24px] py-[16px] relative rounded-[8px] shrink-0 min-w-[490px]">
                  <input
                    type="text"
                    placeholder="Busca por caravana, nombre o cabaña"
                    value={searchQuery}
                    onChange={(e) => onSearchChange(e.target.value)}
                    className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic text-[#2d2d2d] text-[16px] flex-1 outline-none bg-transparent"
                  />
                  <svg className="size-[24px] ml-2" fill="none" viewBox="0 0 24 24">
                    <path d="M0.75 0.75L4.75 4.75" stroke="#2D2D2D" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" transform="translate(17, 17)"/>
                    <circle cx="11" cy="11" r="8" stroke="#2D2D2D" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" fill="none"/>
                  </svg>
                </div>
                <div className="content-stretch flex items-center relative shrink-0">
                  <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#2d2d2d] text-[20px]">
                    <span className="font-['Inter:Bold',sans-serif] font-bold">{totalResults}</span>
                    {` resultados`}
                  </p>
                </div>
              </div>

              {/* View mode toggle */}
              <div className="bg-[#f1f1f1] content-stretch flex items-center relative rounded-[8px] shrink-0">
                <button
                  onClick={() => setViewMode('list')}
                  className={`content-stretch flex items-center px-[24px] py-[8px] relative rounded-bl-[8px] rounded-tl-[8px] shrink-0 transition-colors ${
                    viewMode === 'list' ? 'bg-[#1c2620]' : 'bg-[#e6e6e6] hover:bg-[#d9d9d9]'
                  }`}
                >
                  <svg className="size-[24px]" fill="none" viewBox="0 0 24 24">
                    <path d="M0.75 0.75H12.75" stroke={viewMode === 'list' ? 'white' : '#2D2D2D'} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" transform="translate(8, 6)"/>
                    <circle cx="4" cy="6.25" r="0.75" fill={viewMode === 'list' ? 'white' : '#2D2D2D'} stroke={viewMode === 'list' ? 'white' : '#2D2D2D'} strokeWidth="1.5"/>
                    <circle cx="4" cy="12" r="0.75" fill={viewMode === 'list' ? 'white' : '#2D2D2D'} stroke={viewMode === 'list' ? 'white' : '#2D2D2D'} strokeWidth="1.5"/>
                    <circle cx="4" cy="18" r="0.75" fill={viewMode === 'list' ? 'white' : '#2D2D2D'} stroke={viewMode === 'list' ? 'white' : '#2D2D2D'} strokeWidth="1.5"/>
                    <path d="M0.75 0.75H12.75" stroke={viewMode === 'list' ? 'white' : '#2D2D2D'} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" transform="translate(8, 12)"/>
                    <path d="M0.75 0.75H12.75" stroke={viewMode === 'list' ? 'white' : '#2D2D2D'} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" transform="translate(8, 18)"/>
                  </svg>
                </button>
                <button
                  onClick={() => setViewMode('grid')}
                  className={`content-stretch flex items-center px-[24px] py-[8px] relative rounded-br-[8px] rounded-tr-[8px] shrink-0 transition-colors ${
                    viewMode === 'grid' ? 'bg-[#1c2620]' : 'bg-[#e6e6e6] hover:bg-[#d9d9d9]'
                  }`}
                >
                  <svg className="size-[24px]" fill="none" viewBox="0 0 24 24">
                    <path d={svgPaths.p43f6100} stroke={viewMode === 'grid' ? 'white' : '#2D2D2D'} strokeWidth="1.5" transform="translate(3, 3)"/>
                    <path d={svgPaths.p43f6100} stroke={viewMode === 'grid' ? 'white' : '#2D2D2D'} strokeWidth="1.5" transform="translate(12, 3) scale(-1, 1)"/>
                    <path d={svgPaths.p17e5d8f0} stroke={viewMode === 'grid' ? 'white' : '#2D2D2D'} strokeWidth="1.5" transform="translate(3, 12)"/>
                    <path d={svgPaths.p17e5d8f0} stroke={viewMode === 'grid' ? 'white' : '#2D2D2D'} strokeWidth="1.5" transform="translate(12, 12) scale(-1, 1)"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
