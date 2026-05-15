import { useState } from "react";
import ReviewCard from "./ReviewCard";

const initialReviews = [
  {
    id: 1,
    orderId: "ORD7838",
    restaurant: "Goodluck Cafe",
    review: "Good Food with wide ranges.",
    rating: 5
  },
  {
    id: 2,
    orderId: "ORD14521",
    restaurant: "Goodluck Cafe",
    review: "Good Food with budget friendly",
    rating: 3
  },
  {
    id: 3,
    orderId: "ORD8746",
    restaurant: "Goodluck Cafe",
    review: "With good beverages",
    rating: 4
  },
  {
    id: 4,
    orderId: "ORD14520",
    restaurant: "Goodluck Cafe",
    review: "With good beverages",
    rating: 4
  },
  {
    id: 5,
    orderId: "ORD14520",
    restaurant: "Goodluck Cafe",
    review: "Good Food with wide ranges.",
    rating: 5
  },
  {
    id: 6,
    orderId: "ORD74510",
    restaurant: "Goodluck Cafe",
    review: "Not good with spice level",
    rating: 2
  }
];

export default function Reviews() {
  const [reviews, setReviews] = useState(
    initialReviews
  );

  const handleDelete = (id) => {
    setReviews((prev) =>
      prev.filter((item) => item.id !== id)
    );
  };

  return (
    <div>

      <h1 className="text-[22px] leading-none font-semibold text-black mb-5">
        Reviews
      </h1>

      <div className="grid grid-cols-3 gap-8">

        {reviews.map((review) => (
          <ReviewCard
            key={review.id}
            review={review}
            onDelete={handleDelete}
          />
        ))}

      </div>

    </div>
  );
}