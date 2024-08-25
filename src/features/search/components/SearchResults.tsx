interface SearchResultsProps {
  query: string;
}

export default function SearchResults({ query }: SearchResultsProps) {
  const results = [
    {
      id: 1,
      name: "공간 이름",
      description: "아이와아이들이 좋아하는 공간에 대한 설명",
    },
    {
      id: 2,
      name: "공간 이름",
      description: "아이와아이들이 좋아하는 공간에 대한 설명",
    },
    {
      id: 3,
      name: "공간 이름",
      description: "아이와아이들이 좋아하는 공간에 대한 설명",
    },
    {
      id: 4,
      name: "공간 이름",
      description: "아이와아이들이 좋아하는 공간에 대한 설명",
    },
    {
      id: 5,
      name: "공간 이름",
      description: "아이와아이들이 좋아하는 공간에 대한 설명",
    },
  ];

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">
        &apos;{query}&apos;에 대한 검색 결과
      </h2>

      <ul>
        {results.map((result) => (
          <li key={result.id} className="mb-4 p-4 border rounded">
            <h3 className="font-semibold">{result.name}</h3>
            <p>{result.description}</p>
            <div className="mt-2 text-sm text-gray-500">
              <span className="mr-4">⭐ 4.7</span>
              <span>리뷰 112</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
