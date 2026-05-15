import { Star, Trash2 } from "lucide-react";

export default function ReviewCard({
  review,
  onDelete
}) {
  const getRatingColor = (rating) => {
    if (rating >= 5) return "#0FA60F";
    if (rating >= 3) return "#F59E0B";
    return "#FF0000";
  };

  return (
    <div
      className="bg-white rounded-xl p-5 border border-[#ECECEC]"
      style={{
        boxShadow: "4px 8px 15px 0px #BDBDBD30"
      }}
    >

      <div className="inline-flex bg-[#C86F40] text-white text-[16px] font-medium rounded-tl-xl rounded-br-xl px-5 py-2">
        Order ID:&nbsp;
        <span className="font-semibold">
          {review.orderId}
        </span>
      </div>

      <h3 className="text-[16px] font-semibold text-[#2B2B2B] mt-3">
        {review.restaurant}
      </h3>

      <div className="bg-[#F7F7F7] rounded-xl p-3 mt-3 min-h-[100px]">
        <p className="text-[#667085] text-sm">
          {review.review}
        </p>
      </div>

      <div className="flex items-center justify-between mt-2">

        <div className="flex items-center gap-4">

          <p className="text-[#A11B50] text-[16px] font-medium">
            Ratings:
          </p>

          <div className="flex items-center gap-1">

            {[...Array(review.rating)].map(
              (_, index) => (
                <Star
                  key={index}
                  size={16}
                  fill={getRatingColor(
                    review.rating
                  )}
                  color={getRatingColor(
                    review.rating
                  )}
                />
              )
            )}

          </div>

        </div>

        <button
          onClick={() =>
            onDelete(review.id)
          }
          className="text-[#FF4D5A] hover:scale-110 transition-all"
        >
          <Trash2 size={24} />
        </button>

      </div>

    </div>
  );
}