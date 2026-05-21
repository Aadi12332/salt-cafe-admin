import {
  ChevronLeft,
  ChevronRight,
  MoreHorizontal
} from "lucide-react";

export default function Pagination({
  currentPage = 1,
  totalPages = 70,
  totalEntries = 600,
  startEntry = 1,
  endEntry = 12,
  onPageChange
}) {
  const pages = [1, 2, 3];

  return (
    <div className="flex items-center sm:justify-between justify-center flex-wrap gap-5">

      <p className="text-[16px] font-semibold text-[#2B2B2B]">
        Showing {startEntry} to {endEntry} of{" "}
        {totalEntries} entries
      </p>

      <div className="flex items-center gap-2">

        <button
          disabled={currentPage === 1}
          onClick={() =>
            onPageChange(currentPage - 1)
          }
          className={`flex items-center gap-2 text-[16px] font-semibold transition-all ${
            currentPage === 1
              ? "text-[#D0D0D0] cursor-not-allowed"
              : "text-[#C86F40]"
          }`}
        >
          <ChevronLeft size={20} />
        </button>

        {pages.map((page) => (
          <button
            key={page}
            onClick={() =>
              onPageChange(page)
            }
            className={`w-10 h-10 rounded-lg text-[16px] font-semibold transition-all ${
              currentPage === page
                ? "bg-[#C86F40] text-white"
                : "bg-[#A9561F] text-white"
            }`}
          >
            {page}
          </button>
        ))}

        <button className="w-10 h-10 rounded-lg bg-[#A9561F] text-white flex items-center justify-center">
          <MoreHorizontal size={24} />
        </button>

        <button
          onClick={() =>
            onPageChange(totalPages)
          }
          className={`w-10 h-10 rounded-lg text-[16px] font-semibold ${
            currentPage === totalPages
              ? "bg-[#C86F40] text-white"
              : "bg-[#A9561F] text-white"
          }`}
        >
          {totalPages}
        </button>

        <button
          disabled={
            currentPage === totalPages
          }
          onClick={() =>
            onPageChange(currentPage + 1)
          }
          className={`flex items-center gap-2 text-[16px] font-semibold transition-all ${
            currentPage === totalPages
              ? "text-[#D0D0D0] cursor-not-allowed"
              : "text-[#C86F40]"
          }`}
        >
          <ChevronRight size={20} />
        </button>

      </div>

    </div>
  );
}