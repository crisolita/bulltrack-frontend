import imgAvatar from "figma:asset/8addabe25f082e49245e067a5b46421f579e2d6f.png";

interface HeaderProps {
  isSignedIn: boolean;
  onAuthToggle: () => void;
}

export function Header({ isSignedIn, onAuthToggle }: HeaderProps) {
  return (
    <>
      {/* Logo section */}
      <div className="absolute content-stretch flex gap-[13px] inset-[2.03%_88.19%_94.28%_2.78%] items-center z-20">
        <div className="bg-[#36e27b] content-stretch flex flex-col items-center justify-center px-[12px] py-[8px] relative rounded-[24px] shrink-0 size-[40px]">
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#393939] text-[18px]">
            B
          </p>
        </div>
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[18px] text-white">
          Bulltrack
        </p>
      </div>

      {/* User section */}
      <div className="absolute top-[22px] right-[32px] flex gap-[16px] items-center z-20">
        {isSignedIn ? (
          <>
            <button className="bg-[#152b1e] border border-[#36e27b] h-[40px] overflow-clip px-[16px] py-[8px] relative rounded-[12px] flex items-center gap-2 hover:bg-[#1c3827] transition-colors">
              <svg className="size-[16px]" fill="none" viewBox="0 0 16 16">
                <circle cx="8" cy="8" r="6" fill="#36e27b" stroke="#36e27b" strokeWidth="1.5"/>
              </svg>
              <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[14px] text-[#36e27b]">
                La soledad
              </span>
              <svg className="size-[24px]" fill="none" viewBox="0 0 24 24">
                <path d="M6.75 0.75L0.75 6.75L6.75 12.75" stroke="#36E27B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" transform="translate(8.625, 5.625) rotate(-90)"/>
              </svg>
            </button>
            <div 
              className="relative shrink-0 size-[56px] cursor-pointer group"
              onClick={onAuthToggle}
              title="Sign Out"
            >
              <img 
                alt="User Avatar" 
                className="block rounded-full max-w-none size-full group-hover:opacity-80 transition-opacity" 
                src={imgAvatar}
              />
              <div className="absolute bottom-0 right-0 size-[16px]">
                <svg className="block size-full" fill="none" viewBox="0 0 16 16">
                  <circle cx="8" cy="8" fill="#36E27B" r="6.75" stroke="white" strokeWidth="2.5" />
                </svg>
              </div>
            </div>
          </>
        ) : (
          <button 
            onClick={onAuthToggle}
            className="bg-[#36e27b] h-[40px] overflow-clip px-[24px] py-[8px] relative rounded-[12px] hover:bg-[#2bc969] transition-colors"
          >
            <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[14px] text-[#1c2620]">
              Sign In
            </span>
          </button>
        )}
      </div>
    </>
  );
}