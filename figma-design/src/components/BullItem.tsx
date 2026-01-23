import { Bull } from '../App';
import svgPaths from "../imports/svg-cy8rwqk6ep";

interface BullItemProps {
  bull: Bull;
  onToggleFavorite: (id: number) => void;
}

export function BullItem({ bull, onToggleFavorite }: BullItemProps) {
  const getBadgeColor = (badge: string) => {
    if (badge === 'Propio' || badge === 'Catálogo') {
      return { bg: 'bg-[#ecf8ef]', text: 'text-[#43b75d]', border: 'border-[#36e27b]' };
    }
    return { bg: 'bg-[#edefff]', text: 'text-[#4e61f6]', border: 'border-[#8a96f4]' };
  };

  return (
    <div className="bg-white relative rounded-[24px] shrink-0 w-full hover:shadow-lg transition-shadow">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[24px] items-center p-[24px] relative w-full">
          {/* Checkbox */}
          <div className="relative rounded-[8px] shrink-0 size-[24px] border-[1.5px] border-[#4e61f6]" />

          {/* Rank */}
          <div className="flex flex-col justify-center leading-[0] not-italic relative shrink-0 text-[#394d41] text-[32px]">
            <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px]">
              #{bull.rank}
            </p>
          </div>

          {/* Image and Info */}
          <div className="content-stretch flex gap-[24px] items-center p-[8px] relative shrink-0">
            <div className="h-[72px] relative rounded-[8px] shrink-0 w-[83px]">
              <img 
                alt={bull.name} 
                className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full" 
                src={bull.image}
              />
            </div>
            <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0">
              <div className="content-stretch flex flex-col gap-[8px] items-start leading-[20px] not-italic relative shrink-0 text-[#2d2d2d]">
                <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[24px]">
                  {bull.name}
                </p>
                <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[16px]">
                  {bull.breed} . {bull.age}
                </p>
              </div>
              <div className="content-stretch flex gap-[8px] items-start relative shrink-0">
                {bull.badges.map((badge, index) => {
                  const colors = getBadgeColor(badge);
                  return (
                    <div key={index} className={`${colors.bg} h-[24px] relative rounded-[8px] border-[1.5px] ${colors.border}`}>
                      <div className="content-stretch flex h-full items-center justify-center overflow-clip px-[8px] py-[6px] relative rounded-[inherit]">
                        <div className="content-stretch flex items-center justify-center px-[8px] relative shrink-0">
                          <span className={`font-['Inter:Semi_Bold',sans-serif] font-semibold text-[10px] leading-[12px] ${colors.text}`}>
                            {badge}
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="flex h-[144px] items-center justify-center relative shrink-0 w-0">
            <div className="flex-none rotate-[90deg]">
              <div className="h-0 relative w-[144px]">
                <div className="h-[1px] w-full bg-[#D9D9D9]" />
              </div>
            </div>
          </div>

          {/* Score Section */}
          <div className="content-stretch flex flex-[1_0_0] gap-[24px] items-center min-h-px min-w-px relative">
            <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start justify-center min-h-px min-w-px relative">
              <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
                <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#2d2d2d] text-[14px] tracking-[0.56px] uppercase">
                  Bull score
                </p>
                <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#2d2d2d] text-[24px]">
                  {bull.score}
                </p>
              </div>
              <div className="h-[8.5px] relative shrink-0 w-full">
                <div className="h-full w-full bg-[#F1F1F1] rounded-[4px] relative">
                  <div 
                    className="h-full bg-[#36E27B] rounded-[4px] absolute top-0 left-0"
                    style={{ width: `${bull.score * 100}%` }}
                  />
                </div>
              </div>
              <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#2d2d2d] text-[16px] w-full">
                {bull.performance}
              </p>
            </div>

            {/* Radar Chart */}
            <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] leading-[0] relative shrink-0">
              <div className="col-1 h-[87.6px] ml-0 mt-0 relative row-1 w-[88px]">
                <svg className="block size-full" fill="none" viewBox="0 0 88 87.6">
                  <g>
                    <g>
                      <circle cx="44" cy="43.6" fill="#F1F1F1" r="43.6" />
                      <circle cx="44.4" cy="44" r="32.4" stroke="#D9D9D9" strokeWidth="0.8" fill="none"/>
                      <path d={svgPaths.p39ff1b00} stroke="#D9D9D9" strokeWidth="0.8" />
                    </g>
                    <path d={svgPaths.p3fa4c080} fill="#CCF0DA" fillOpacity="0.5" stroke="#3ED97C" strokeWidth="2" />
                  </g>
                </svg>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="flex h-[144px] items-center justify-center relative shrink-0 w-0">
            <div className="flex-none rotate-[90deg]">
              <div className="h-0 relative w-[144px]">
                <div className="h-[1px] w-full bg-[#D9D9D9]" />
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="content-stretch flex flex-col items-end justify-center relative shrink-0">
            <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0">
              {/* View button */}
              <button className="bg-[#1c2620] content-stretch flex h-[40px] items-center justify-center overflow-clip p-[8px] relative rounded-[12px] shrink-0 hover:bg-[#29382f] transition-colors">
                <svg className="size-[24px]" fill="none" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="2.75" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" fill="none"/>
                  <path d={svgPaths.pdc90080} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" transform="translate(2.625, 5.625)"/>
                </svg>
              </button>

              {/* Favorite button */}
              <button 
                onClick={() => onToggleFavorite(bull.id)}
                className={`content-stretch flex h-[40px] items-center justify-center overflow-clip p-[8px] relative rounded-[12px] shrink-0 transition-all ${
                  bull.isFavorite 
                    ? 'bg-[#36e27b] hover:bg-[#2bc969]' 
                    : 'bg-[#1c2620] hover:bg-[#29382f]'
                }`}
              >
                <svg className="size-[24px]" fill="none" viewBox="0 0 24 24">
                  <path 
                    d={svgPaths.p55f2400} 
                    stroke={bull.isFavorite ? '#1c2620' : 'white'} 
                    strokeLinejoin="round" 
                    strokeWidth="1.5"
                    fill={bull.isFavorite ? '#1c2620' : 'none'}
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