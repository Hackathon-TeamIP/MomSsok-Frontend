"use client";
import { Divider } from "@/shared/components/Divider";
import ArrowRightIcon from "@/shared/components/Icons/ArrowRightIcon";
import { Tag } from "@/shared/components/Tag";
import { BasicInfo } from "@/shared/types/space";
import { useParams } from "next/navigation";
import { useSpaceDetail } from "../../hooks/useSpaceDetail";
import { FooterButton } from "../FooterButton";
import Map from "../Map";
import { TransportationInfo } from "../TransportationInfo";
import { ACCESS_ICON_MAP, INFO_LBAEL_MAP } from "./constant";

export const SpaceInfo = () => {
  const { id } = useParams<{ id: string }>();
  const { data } = useSpaceDetail(id);
  const { basicInfo, accessInfo, transportation } = data.data[0];

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
          {accessInfo.map((tag, index) => (
            <Tag
              key={index}
              name={tag.trim()}
              leftIcon={ACCESS_ICON_MAP[tag.trim()]}
              variant="primary"
            />
          ))}
        </div>
        <div className="py-[15px] px-[13px] bg-[#F5F5F5] rounded-[10px] flex flex-col gap-2">
          {Object.keys(basicInfo).map((key) => {
            if (key in INFO_LBAEL_MAP) {
              return (
                <div className="flex gap-2" key={key}>
                  <p className="text-[#494949] text-[13px] font-medium text-nowrap">
                    {INFO_LBAEL_MAP[key as keyof typeof INFO_LBAEL_MAP]}
                  </p>
                  <p className="text-[#7C7C7C] text-[13px]">
                    {basicInfo[key as keyof BasicInfo]}
                  </p>
                </div>
              );
            }
            return null;
          })}
        </div>
        <Map address={basicInfo.address} />
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
      <FooterButton isSelected={false} />
    </>
  );
};
