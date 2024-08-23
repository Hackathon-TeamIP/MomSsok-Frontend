import React from "react";
import data from "../../api/data";
import { Tag } from "@/shared/components/Tag";
import { Divider } from "@/shared/components/Divider";
import { TransportationInfo } from "../TransportationInfo";
import { FooterButton } from "../FooterButton";

export const SpaceInfo = () => {
  const { info, accessInfo, transportation, isBookmarked } = data;

  return (
    <>
      <section className="mt-4 px-[22px]">
        <h4 className="font-semibold text-[#424242] text-[17px] py-[15px]">
          모두를 위한 시설 안내
        </h4>
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

        <h5 className="font-semibold text-[#424242] text-[15px] py-3 mt-[11px]">
          접근성 정보
        </h5>
        <div className="flex gap-[8px] flex-wrap">
          {accessInfo.map((tag) => (
            <Tag
              key={tag.id}
              name={tag.title}
              leftIcon={tag.icon}
              variant="primary"
              className={`${!tag.available ? "opacity-35" : ""}`}
            />
          ))}
        </div>
        <Divider className="mt-6" />
        <h5 className="font-semibold text-[#424242] text-[15px] py-3 mt-[2px]">
          가는 방법
        </h5>
        <TransportationInfo transportation={transportation} />
        <Divider className="my-5" />
      </section>
      <FooterButton isSelected={isBookmarked} />
    </>
  );
};
