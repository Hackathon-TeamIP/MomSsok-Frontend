import React from "react";
import data from "../../api/data";
import { Tag } from "@/shared/components/Tag";
import { Divider } from "@/shared/components/Divider";
import { TransportationInfo } from "../TransportationInfo";
import { FooterButton } from "../FooterButton";
import ArrowRightIcon from "@/shared/components/Icons/ArrowRightIcon";
import Map from "../Map";

export const SpaceInfo = () => {
  const { info, accessInfo, transportation, isBookmarked } = data;

  return (
    <>
      <section className="mt-4 px-5">
        <div className="flex justify-between py-[15px]">
          <h4 className="font-semibold text-[#424242] text-[17px]">
            모두를 위한 시설 안내
          </h4>
          <div className="flex items-center gap-2 cursor-pointer">
            <p className="text-sm text-[#9c9ca0]">정보 수정 제안</p>
            <ArrowRightIcon color="#9c9ca0" />
          </div>
        </div>
        <div className="flex gap-[8px] flex-wrap mb-3">
          {accessInfo
            .filter((tag) => tag.available) // available이 true인 항목만 필터링
            .map((tag) => (
              <Tag
                key={tag.id}
                name={tag.title}
                leftIcon={tag.icon}
                variant="primary"
              />
            ))}
        </div>

        <div className="py-[15px] px-[13px] bg-[#F5F5F5] rounded-[10px] flex flex-col gap-2">
          {info.map((item) => (
            <div key={item.id} className="flex gap-2">
              <p className="text-[#494949] text-[13px] font-medium text-nowrap">
                {item.title}
              </p>
              <p className="text-[#7C7C7C] text-[13px]">{item.description}</p>
            </div>
          ))}
        </div>
        <Map
          address={
            info[0].description ??
            "서울특별시 중랑구 용마산로 209 공공기여시설1층"
          }
        />
        <Divider className="mt-6" />
        <div className="flex justify-between py-3 mt-[2px]">
          <h5 className="font-semibold text-[#424242] text-[15px]">
            가는 방법
          </h5>
          <div className="flex items-center gap-2 cursor-pointer">
            <p className="text-sm text-[#424242]">장애인 콜택시</p>
            <ArrowRightIcon color="#9c9ca0" />
          </div>
        </div>
        <TransportationInfo transportation={transportation} />
        <Divider className="my-5" />
      </section>
      <FooterButton isSelected={isBookmarked} />
    </>
  );
};
