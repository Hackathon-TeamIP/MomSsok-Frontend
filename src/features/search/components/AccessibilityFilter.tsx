import ArrowBottomIcon from "@/shared/components/Icons/ArrowBottomIcon";
import React, { useState } from "react";

const AccessibilityFilter = () => {
  const [isPublicTypeOpen, setIsPublicTypeOpen] = useState(false);
  const [isAccessibilityOpen, setIsAccessibilityOpen] = useState(false);
  const [isBarrierFreeEnabled, setIsBarrierFreeEnabled] = useState(false);
  const [selectedPublicType, setSelectedPublicType] = useState("공간 유형");
  const [selectedAccessibility, setSelectedAccessibility] = useState("접근성");

  const publicTypes = [
    "실내 놀이",
    "야외 활동",
    "물놀이",
    "문화 체험",
    "교육 시설",
  ];

  const accessibilityOptions = [
    "휠체어 접근 가능",
    "엘리베이터 있음",
    "주차 공간 있음",
    "점자 안내 있음",
    "청각 보조 시설",
    "유아차 접근 가능",
  ];

  const renderDropdownItems = (
    items: string[],
    setterFunction: (item: string) => void,
    closeFunction: (isOpen: boolean) => void,
  ) => (
    <div className="absolute z-10 w-56 mt-2 bg-white border border-gray-300 rounded-md shadow-lg">
      {items.map((item, index) => (
        <button
          key={index}
          className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
          onClick={() => {
            setterFunction(item);
            closeFunction(false);
          }}
        >
          {item}
        </button>
      ))}
    </div>
  );

  return (
    <div className="flex space-x-2">
      <div className="relative">
        <button
          onClick={() => setIsPublicTypeOpen(!isPublicTypeOpen)}
          className="flex items-center justify-between px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm "
        >
          <span>{selectedPublicType}</span>
          <span className="ml-2">
            <ArrowBottomIcon />
          </span>
        </button>
        {isPublicTypeOpen &&
          renderDropdownItems(
            publicTypes,
            setSelectedPublicType,
            setIsPublicTypeOpen,
          )}
      </div>

      <div className="relative">
        <button
          onClick={() => {
            setIsAccessibilityOpen(!isAccessibilityOpen);
            setIsPublicTypeOpen(false);
          }}
          className="flex items-center justify-between px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm "
        >
          <span className="whitespace-nowrap">{selectedAccessibility}</span>
          <span className="ml-2">
            {" "}
            <ArrowBottomIcon />
          </span>
        </button>
        {isAccessibilityOpen &&
          renderDropdownItems(
            accessibilityOptions,
            setSelectedAccessibility,
            setIsAccessibilityOpen,
          )}
      </div>

      <button
        onClick={() => {
          setIsBarrierFreeEnabled(!isBarrierFreeEnabled);
          setIsAccessibilityOpen(false);
        }}
        className={`px-3 rounded-md  ${
          isBarrierFreeEnabled
            ? "bg-primary text-white"
            : "bg-gray-200 text-gray-600"
        }`}
      >
        &#9855;
      </button>
    </div>
  );
};

export default AccessibilityFilter;
