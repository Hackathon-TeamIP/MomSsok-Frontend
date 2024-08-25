import { Divider } from "@/shared/components/Divider";
import { search_results } from "../api/data";
import AccessibilityFilter from "./AccessibilityFilter";

interface SearchResultsProps {
  query: string;
}

export default function SearchResults({ query }: SearchResultsProps) {
  const results = search_results;

  return (
    <div>
      <AccessibilityFilter />
      <div className="text-sm mt-5">전체 {results.data.length}개</div>

      <ul>
        {results.data.map((result, index) => (
          <li key={result.id} className="flex flex-col">
            <div className="flex items-center">
              <div className="bg-gray-100 min-w-[100px] h-[100px] rounded-lg" />

              <div className="p-4 w-full">
                <h3 className="font-semibold text-lg mb-1">{result.name}</h3>
                <p className="text-gray-400 text-sm mb-1">
                  {result.description}
                </p>

                <div className="flex text-xs text-gray-400">
                  <div>{result.location}</div>
                  <div>・</div>
                  <div>{result.type}</div>
                  <div>・</div>
                  <div>
                    <span className="text-red-300">{result.holiday}요일</span>
                    &nbsp;정기휴무
                  </div>
                </div>

                <div className="mt-2 text-xs text-gray-500">
                  <span className="mr-4">⭐ 4.7</span>
                  <span>리뷰 112</span>
                </div>
              </div>
            </div>
            {index < results.data.length - 1 && (
              <Divider className="mb-2 mt-2" />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
