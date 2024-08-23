import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import "dayjs/locale/ko"; // 한국어 요일 사용

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.locale("ko");

// 오늘 날짜
export const startDate = dayjs().tz("Asia/Seoul");

export const getToday = (format: string) => {
  return dayjs().tz("Asia/Seoul").format(format);
};

// 요일 배열
export const daysOfWeek = Array.from({ length: 14 }, (_, i) => {
  const day = startDate.add(i, "day");
  return day.format("DD") === getToday("DD") ? "오늘" : day.format("dd");
});

// 날짜 배열
export const dates = Array.from({ length: 14 }, (_, i) =>
  startDate.add(i, "day").format("D"),
);
