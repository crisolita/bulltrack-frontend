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
    <div className="content-stretch flex items-center justify-center gap-[16px] relative shrink-0 w-full py-[24px]">
      {/* Previous Button */}
      <button
        onClick={handlePrevious}
        disabled={currentPage === 1}
        className={`flex items-center justify-center h-[40px] w-[40px] rounded-[8px] transition-colors ${
          currentPage === 1
            ? 'bg-[#e6e6e6] text-[#a0a0a0] cursor-not-allowed'
            : 'bg-[#1c2620] text-white hover:bg-[#29382f]'
        }`}
      >
        <svg className="size-[20px]" fill="none" viewBox="0 0 20 20">
          <path 
            d="M12.5 5L7.5 10L12.5 15" 
            stroke={currentPage === 1 ? '#a0a0a0' : 'white'} 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="1.5"
          />
        </svg>
      </button>

      {/* Page Numbers */}
      <div className="flex gap-[8px]">
        {pages.map(page => (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`flex items-center justify-center h-[40px] min-w-[40px] px-[12px] rounded-[8px] font-['Inter:Semi_Bold',sans-serif] font-semibold text-[14px] transition-all ${
              currentPage === page
                ? 'bg-[#36e27b] text-[#1c2620] scale-110'
                : 'bg-[#f1f1f1] text-[#2d2d2d] hover:bg-[#e6e6e6]'
            }`}
          >
            {page}
          </button>
        ))}
      </div>

      {/* Next Button */}
      <button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className={`flex items-center justify-center h-[40px] w-[40px] rounded-[8px] transition-colors ${
          currentPage === totalPages
            ? 'bg-[#e6e6e6] text-[#a0a0a0] cursor-not-allowed'
            : 'bg-[#1c2620] text-white hover:bg-[#29382f]'
        }`}
      >
        <svg className="size-[20px]" fill="none" viewBox="0 0 20 20">
          <path 
            d="M7.5 5L12.5 10L7.5 15" 
            stroke={currentPage === totalPages ? '#a0a0a0' : 'white'} 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="1.5"
          />
        </svg>
      </button>

      {/* Page Info */}
      <div className="ml-[16px] font-['Inter:Regular',sans-serif] text-[14px] text-[#2d2d2d]">
        Página <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold">{currentPage}</span> de <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold">{totalPages}</span>
      </div>
    </div>
  );
}
