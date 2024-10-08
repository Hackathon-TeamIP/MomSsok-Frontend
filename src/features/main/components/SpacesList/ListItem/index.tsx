import { SpaceListItem } from "@/shared/types/space";
import Link from "next/link";
import React from "react";

type Props = {
  space: SpaceListItem;
};

export const SpacesListItem = ({ space }: Props) => {
  const { id, name, description, rating, imageUrl, reviewCount } = space;
  return (
    <Link href={`/spaces/detail/${id}`} scroll={false}>
      <div className="overflow-hidden w-full flex flex-col">
        <img
          src={imageUrl}
          alt={name}
          className="w-full object-cover bg-gray-100 min-w-[165px] aspect-square rounded-[10px]"
          loading="lazy"
        />
        <div className="flex justify-between items-center mt-[6px]">
          <h3 className="text-sm font-semibold line-clamp-1">{name}</h3>
        </div>
        <p className="text-[#8A8A8E] text-xs line-clamp-2">{description}</p>
        <div className="flex items-center mt-[5px]">
          <span className="text-[#ff9727] text-xs text-opacity-50">★</span>
          <span className="ml-1 text-xs font-semibold">{rating}</span>
          <span className="text-gray-500 mx-2 text-xs">·</span>
          <span className="text-gray-500 text-xs">리뷰 {reviewCount}</span>
        </div>
      </div>
    </Link>
  );
};
