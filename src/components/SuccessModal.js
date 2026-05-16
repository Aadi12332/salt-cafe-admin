import CommonModal from "./CommonModal";
import { CircleCheckBig } from "lucide-react";

export default function SuccessModal({
  open,
  onClose,
  title = "Successfully Created"
}) {
  return (
    <CommonModal
      open={open}
      onClose={onClose}
      title="Successfully Created"
      maxWidth="max-w-xl"
    >

      <div className="flex flex-col items-center justify-center py-10">

        <div className="w-28 h-28 rounded-full bg-[#E8FFF0] flex items-center justify-center">
          <CircleCheckBig
            size={70}
            className="text-[#18B95A]"
          />
        </div>

        <h3 className="text-[24px] font-bold text-[#2B2B2B] mt-8">
          {title}
        </h3>

        <button
          onClick={onClose}
          className="mt-10 h-14 px-14 rounded-lg bg-[#C86F40] text-white text-xl font-semibold"
        >
          Done
        </button>

      </div>

    </CommonModal>
  );
}