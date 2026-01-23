import { useState } from 'react';
import svgPaths from "../imports/svg-cy8rwqk6ep";

interface FilterOption {
  id: string;
  label: string;
  checked: boolean;
}

export function Filters() {
  const [origenFilters, setOrigenFilters] = useState<FilterOption[]>([
    { id: 'todos', label: 'Todos', checked: true },
    { id: 'toros-propios', label: 'Toros propios', checked: false },
    { id: 'catalogo', label: 'Catálogo', checked: false },
    { id: 'favoritos', label: 'Favoritos', checked: false }
  ]);

  const [vaquillonaEnabled, setVaquillonaEnabled] = useState(true);
  const [pelajeOpen, setPelajeOpen] = useState(false);
  const [ordenamientoOpen, setOrdenamientoOpen] = useState(false);

  const handleOrigenToggle = (id: string) => {
    setOrigenFilters(prev =>
      prev.map(filter =>
        filter.id === id ? { ...filter, checked: !filter.checked } : filter
      )
    );
  };

  return (
    <div className="absolute content-stretch flex flex-col gap-[26px] inset-[10.33%_83.06%_2.95%_2.78%] items-start overflow-auto z-10">
      <div className="content-stretch flex flex-col gap-[26px] items-start relative shrink-0 w-full">
        {/* Filtros Activos */}
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-white tracking-[0.56px] uppercase w-full">
            Filtros activos
          </p>
        </div>

        {/* Origen */}
        <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative text-[14px] text-white">
            Origen
          </p>
          <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
            {origenFilters.map(filter => (
              <button
                key={filter.id}
                onClick={() => handleOrigenToggle(filter.id)}
                className={`bg-[#152b1e] h-[56px] relative rounded-[8px] w-full flex items-center justify-between px-[12px] hover:bg-[#1c3827] transition-colors ${filter.checked ? 'border border-[#36e27b]' : ''}`}
              >
                <span className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] text-[14px] text-white">
                  {filter.label}
                </span>
                <div className={`relative rounded-[8px] size-[24px] ${filter.checked ? 'bg-[#36e27b]' : 'border-[1.5px] border-[#36e27b]'}`}>
                  {filter.checked && (
                    <div className="absolute left-[2px] size-[20px] top-[2px] flex items-center justify-center">
                      <svg className="size-[14px]" fill="none" viewBox="0 0 14 7">
                        <path d="M0.75 0.75V5.46405H12.5351" stroke="#111714" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                      </svg>
                    </div>
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-center relative shrink-0 w-full">
          <div className="h-[0.5px] w-full bg-white opacity-50" />
        </div>

        {/* Filtros Productivos */}
        <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[12px] text-white tracking-[0.48px] uppercase w-full">
            Filtros productivos
          </p>
          
          {/* Para vaquillona toggle */}
          <button
            onClick={() => setVaquillonaEnabled(!vaquillonaEnabled)}
            className="bg-[#152b1e] content-stretch flex items-center overflow-clip py-[4px] relative rounded-[8px] w-full hover:bg-[#1c3827] transition-colors"
          >
            <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative pl-[12px] py-[8px]">
              <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] text-[14px] text-white">
                Para vaquillona
              </p>
              <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] text-[12px] text-white">
                Facilidad de parto
              </p>
            </div>
            <div className="flex items-center justify-center pr-[16px]">
              <div className={`relative rounded-[12px] h-[24px] w-[44px] transition-colors ${vaquillonaEnabled ? 'bg-black' : 'bg-[#4a4a4a]'}`}>
                <div className={`absolute size-[20px] top-[2px] transition-all ${vaquillonaEnabled ? 'left-[2px]' : 'left-[22px]'}`}>
                  <svg className="block size-full" fill="none" viewBox="0 0 20 20">
                    <circle cx="10" cy="10" fill="#36E27B" r="10" />
                  </svg>
                </div>
              </div>
            </div>
          </button>

          {/* Pelaje dropdown */}
          <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative text-[14px] text-white">
              Pelaje
            </p>
            <button
              onClick={() => setPelajeOpen(!pelajeOpen)}
              className="bg-[#152b1e] h-[56px] relative rounded-[8px] w-full flex items-center justify-between px-[12px] hover:bg-[#1c3827] transition-colors"
            >
              <span className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] text-[14px] text-white">
                Todos
              </span>
              <svg className="size-[24px]" fill="none" viewBox="0 0 24 24">
                <path d={svgPaths.p3a568e10} stroke="#36E27B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" transform="translate(8.625, 5.625) rotate(-90)" />
              </svg>
            </button>
            {pelajeOpen && (
              <div className="bg-[#152b1e] rounded-[8px] w-full p-[8px] space-y-[4px]">
                <div className="text-white text-[14px] p-[8px] hover:bg-[#1c3827] rounded cursor-pointer">Colorado</div>
                <div className="text-white text-[14px] p-[8px] hover:bg-[#1c3827] rounded cursor-pointer">Negro</div>
                <div className="text-white text-[14px] p-[8px] hover:bg-[#1c3827] rounded cursor-pointer">Blanco</div>
              </div>
            )}
          </div>
        </div>

        {/* Ordenamiento */}
        <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[12px] text-white tracking-[0.48px] uppercase">
            Ordenamiento
          </p>
          <button
            onClick={() => setOrdenamientoOpen(!ordenamientoOpen)}
            className="bg-[#152b1e] h-[56px] relative rounded-[8px] w-full flex items-center justify-between px-[12px] hover:bg-[#1c3827] transition-colors"
          >
            <span className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] text-[14px] text-white">
              Score mejor a peor
            </span>
            <svg className="size-[24px]" fill="none" viewBox="0 0 24 24">
              <path d={svgPaths.p3a568e10} stroke="#36E27B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" transform="translate(8.625, 5.625) rotate(-90)" />
            </svg>
          </button>
          {ordenamientoOpen && (
            <div className="bg-[#152b1e] rounded-[8px] w-full p-[8px] space-y-[4px]">
              <div className="text-white text-[14px] p-[8px] hover:bg-[#1c3827] rounded cursor-pointer">Score mejor a peor</div>
              <div className="text-white text-[14px] p-[8px] hover:bg-[#1c3827] rounded cursor-pointer">Score peor a mejor</div>
              <div className="text-white text-[14px] p-[8px] hover:bg-[#1c3827] rounded cursor-pointer">Edad (menor a mayor)</div>
            </div>
          )}
        </div>

        <div className="flex items-center justify-center relative shrink-0 w-full">
          <div className="h-[0.5px] w-full bg-white opacity-50" />
        </div>
      </div>

      {/* Objetivo actual */}
      <div className="bg-[#152b1e] relative rounded-[8px] shrink-0 w-full border border-[#2b3a31]">
        <div className="flex flex-col justify-end size-full">
          <div className="content-stretch flex flex-col gap-[16px] items-start justify-end p-[16px] relative w-full">
            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
              <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[14px] text-white">
                Objetivo actual
              </p>
              <p className="font-['Inter:Light',sans-serif] font-light leading-[20px] not-italic relative shrink-0 text-[14px] text-white">
                Maximizar la ganancia de peso (destete) manteniendo facilidad de parto.
              </p>
            </div>
            <button className="bg-[#29382f] h-[40px] relative rounded-[12px] flex items-center justify-center px-[16px] py-[12px] border border-[#36e27b] w-full hover:bg-[#324a3c] transition-colors">
              <svg className="size-[24px] mr-2" fill="none" viewBox="0 0 24 24">
                <path d={svgPaths.p36bdea80} stroke="#36E27B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              </svg>
              <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[14px] text-[#36e27b]">
                Editar criterios
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}