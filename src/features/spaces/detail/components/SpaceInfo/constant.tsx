import {
  AccessElevatorIcon,
  AccessParkingIcon,
  AccessRestroomIcon,
  AccessThresholdIcon,
  AccessWheelchairIcon,
} from "@/shared/components/Icons";

export const INFO_LBAEL_MAP = {
  address: "주소",
  contact: "전화",
  operationDays: "운영일",
};

export const ACCESS_ICON_MAP: Record<string, JSX.Element> = {
  "휠체어 입장 가능": <AccessWheelchairIcon color="#FF9727" />,
  "장애인 화장실": <AccessRestroomIcon color="#FF9727" />,
  승강기: <AccessElevatorIcon color="#FF9727" />,
  "장애인 주차장": <AccessParkingIcon color="#FF9727" />,
  "문턱 1cm 미만": <AccessThresholdIcon color="#FF9727" />,
};
