"use client";

import ArrowRightIcon from "@/shared/components/Icons/ArrowRightIcon";
import { StarRating } from "@/shared/components/StarRating";
import { Tag } from "@/shared/components/Tag";
import { useParams } from "next/navigation";
import { useSpaceDetail } from "../../hooks/useSpaceDetail";

export const SpaceProfile = () => {
  const { id } = useParams<{ id: string }>();

  const { data } = useSpaceDetail(id);
  const { name, description, rating, imageUrl, tags } = data.data[0];

  return (
    <article className="overflow-hidden w-full flex flex-col">
      <div className="relative">
        <img
          src={imageUrl}
          alt={name}
          className="w-full object-cover bg-gray-100 aspect-square"
        />
        <div className="absolute bottom-0 mb-[15px] px-5 flex flex-wrap gap-[6px]">
          {tags?.map((tag, index) => (
            <Tag key={index} name={tag} variant="secondary" />
          ))}
        </div>
      </div>
      <div className="bg-[#FFF6E5] h-[141px] rounded-b-[15px] px-5 pt-[26px]">
        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <h3 className="text-2xl font-semibold line-clamp-1 leading-6 -ml-1">
              {name}
            </h3>
            <p className="text-[#8A8A8E] line-clamp-2 mt-[6px]">
              {description}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2 mt-[10px] cursor-pointer">
          <StarRating rating={rating} />
          <div className="flex items-center gap-[2px]">
            <span className="text-[#FFA849] font-bold text-[10px]">
              리뷰보기
            </span>
            <ArrowRightIcon className="w-[6px] text-primary" />
          </div>
        </div>
      </div>
    </article>
  );
};
