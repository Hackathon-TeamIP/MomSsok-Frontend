import CurrentLocationButton from "@/features/main/components/CurrentLocationButton";
import { SearchIcon } from "@/shared/components/Icons";
import { useState } from "react";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

export default function SearchBar({ onSearch }: SearchBarProps) {
  const [query, setQuery] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className="flex w-full items-center">
      <div className="flex justify-between w-full bg-gray-100 px-4 py-2 mr-2 rounded-xl">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="내 주변 베리어프리 놀이터"
          className="bg-transparent "
        />
        <button type="submit">
          <SearchIcon color="#888" />
        </button>
      </div>
    </form>
  );
}
