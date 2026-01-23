"use client";

interface HeaderProps {
  onLogout?: () => void;
}

export function Header({ onLogout }: HeaderProps) {
  return (
    <>
      <div className="absolute top-[22px] left-[40px] flex gap-[13px] items-center z-20">
        <div className="bg-accent flex items-center justify-center rounded-[24px] size-[40px]">
          <span className="font-semibold text-[18px] text-[#393939]">
            B
          </span>
        </div>
        <span className="font-semibold text-[18px] text-white">
          Bulltrack
        </span>
      </div>

      <div className="absolute top-[22px] right-[32px] flex gap-[16px] items-center z-20">
        <button className="bg-dark-secondary border border-accent h-[40px] px-[16px] py-[8px] rounded-[12px] flex items-center gap-2 hover:bg-dark-hover transition-colors">
          <svg className="size-[16px]" fill="none" viewBox="0 0 16 16">
            <circle cx="8" cy="8" r="6" fill="#36e27b" stroke="#36e27b" strokeWidth="1.5"/>
          </svg>
          <span className="font-semibold text-[14px] text-accent">
            La soledad
          </span>
          <svg className="size-[20px]" fill="none" viewBox="0 0 20 20">
            <path d="M5 7.5L10 12.5L15 7.5" stroke="#36E27B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
          </svg>
        </button>
        
        <div 
          className="relative size-[56px] cursor-pointer group"
          onClick={onLogout}
          title="Cerrar sesión"
        >
          <div className="size-full rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center group-hover:opacity-80 transition-opacity">
            <span className="text-white font-bold text-[20px]">U</span>
          </div>
          <div className="absolute bottom-0 right-0 size-[16px]">
            <svg className="block size-full" fill="none" viewBox="0 0 16 16">
              <circle cx="8" cy="8" fill="#36E27B" r="6.75" stroke="white" strokeWidth="2.5" />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
}
