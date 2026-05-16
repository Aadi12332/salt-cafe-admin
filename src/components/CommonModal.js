import { X } from "lucide-react";

export default function CommonModal({
  open,
  onClose,
  title,
  children,
  maxWidth = "max-w-[700px]"
}) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-5">

      <div
        className={`w-[96%] ${maxWidth} bg-white max-h-[90vh] overflow-auto scroll-hide rounded-xl p-5 relative`}
      >

        <button
          onClick={onClose}
          className="absolute right-6 top-6 text-[#9A9A9A]"
        >
          <X size={24} />
        </button>

        <h2 className="text-center text-[24px] font-semibold text-[#C86F40]">
          {title}
        </h2>

        <div className="h-[1px] bg-[#F2D8C8] mt-3 mb-5" />

        {children}

      </div>

    </div>
  );
}