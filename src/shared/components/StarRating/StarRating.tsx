import { StarRatingProps } from "./types";

export const StarRating = ({ rating, maxRating = 5 }: StarRatingProps) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5;
  const emptyStars = maxRating - fullStars - (halfStar ? 1 : 0);

  // TODO 아이콘 대체
  return (
    <div className="flex items-center">
      {Array(fullStars)
        .fill(0)
        .map((_, index) => (
          <span key={`full-${index}`} className="text-[#FFA849] text-[11px]">
            ★
          </span>
        ))}
      {halfStar && <span className="text-[#D9D9D9] text-[11px]">★</span>}
      {Array(emptyStars)
        .fill(0)
        .map((_, index) => (
          <span key={`empty-${index}`} className="text-[#D9D9D9] text-[11px]">
            ★
          </span>
        ))}
      <span className="text-[#4D4D4D] font-bold text-[10px] ml-1">
        {rating}
      </span>
    </div>
  );
};
