"use client";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className="flex flex-col items-center gap-[16px] w-full py-[24px]">
      <div className="flex items-center gap-[16px]">
        <button
          onClick={handlePrevious}
          disabled={currentPage === 1}
          className={`flex items-center justify-center h-[40px] w-[40px] rounded-[8px] transition-colors ${
            currentPage === 1
              ? "bg-border-light text-[#a0a0a0] cursor-not-allowed"
              : "bg-primary text-white hover:bg-[#29382f]"
          }`}
        >
          <svg className="size-[20px]" fill="none" viewBox="0 0 20 20">
            <path 
              d="M12.5 5L7.5 10L12.5 15" 
              stroke={currentPage === 1 ? "#a0a0a0" : "white"} 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="1.5"
            />
          </svg>
        </button>

        <div className="flex flex-wrap gap-[8px] max-w-[800px] justify-center">
          {pages.map(page => (
            <button
              key={page}
              onClick={() => onPageChange(page)}
              className={`flex items-center justify-center h-[40px] min-w-[40px] px-[12px] rounded-[8px] font-semibold text-[14px] transition-all ${
                currentPage === page
                  ? "bg-accent text-primary scale-110"
                  : "bg-[#f1f1f1] text-text-primary hover:bg-border-light"
              }`}
            >
              {page}
            </button>
          ))}
        </div>

        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className={`flex items-center justify-center h-[40px] w-[40px] rounded-[8px] transition-colors ${
            currentPage === totalPages
              ? "bg-border-light text-[#a0a0a0] cursor-not-allowed"
              : "bg-primary text-white hover:bg-[#29382f]"
          }`}
        >
          <svg className="size-[20px]" fill="none" viewBox="0 0 20 20">
            <path 
              d="M7.5 5L12.5 10L7.5 15" 
              stroke={currentPage === totalPages ? "#a0a0a0" : "white"} 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="1.5"
            />
          </svg>
        </button>
      </div>

      <div className="font-normal text-[14px] text-text-primary">
        Página <span className="font-semibold">{currentPage}</span> de <span className="font-semibold">{totalPages}</span>
      </div>
    </div>
  );
}
