import { Divider } from "@/shared/components/Divider";
import { CloseIcon } from "@/shared/components/Icons";
import ArrowRightIcon from "@/shared/components/Icons/ArrowRightIcon";

export default function RecommendedSpaces() {
  const spaces = [
    {
      id: 1,
      name: "서초구 작은음악회 집",
      description: "월드컵 경기장의 작고 귀여운 아기자기한 키즈카페",
    },
    {
      id: 2,
      name: "서초구 작은음악회 집",
      description: "월드컵 경기장의 작고 귀여운 아기자기한 키즈카페",
    },
    {
      id: 3,
      name: "서초구 작은음악회 집",
      description: "월드컵 경기장의 작고 귀여운 아기자기한 키즈카페",
    },
    {
      id: 4,
      name: "서초구 작은음악회 집",
      description: "월드컵 경기장의 작고 귀여운 아기자기한 키즈카페",
    },
    {
      id: 5,
      name: "서초구 작은음악회 집",
      description: "월드컵 경기장의 작고 귀여운 아기자기한 키즈카페",
    },
  ];

  return (
    <div>
      <div className="flex flex-col mb-3 mt-3">
        <h2 className="text-xl font-bold mb-3">최근 검색어</h2>
        <div className="flex bg-gray-100 px-3 py-2 rounded-xl max-w-min whitespace-nowrap text-gray-500">
          가까운 키즈 카페 <CloseIcon className="ml-1" />
        </div>
      </div>

      <div className="flex items-center justify-between mb-3 mt-3">
        <h2 className="text-xl font-bold">추천 장소</h2>
        <div className="flex items-center">
          <p className="text-[#8E8E93] text-[15px] font-medium mr-2">
            모두 보기
          </p>
          <ArrowRightIcon className="text-primary" />
        </div>
      </div>

      <ul>
        {spaces.map((space, index) => (
          <li key={space.id} className="flex flex-col border rounded">
            <div className="flex  items-center">
              {" "}
              <div className="bg-gray-100 min-w-20 h-20 rounded-lg" />
              <div className="flex flex-col p-4">
                <h3 className="font-semibold">{space.name}</h3>
                <p className="text-gray-400">{space.description}</p>
              </div>
            </div>

            {index < spaces.length - 1 && <Divider className="mb-2 mt-2" />}
          </li>
        ))}
      </ul>
    </div>
  );
}
