"use client";

import SearchBar from "@/features/search/components/SearchBar";
import RecommendedSpaces from "@/features/search/components/RecommendedSpaces";
import SearchResults from "@/features/search/components/SearchResults";
import { useState } from "react";
import CurrentLocationButton from "@/features/main/components/CurrentLocationButton";
import { useRouter } from "next/navigation";
import ArrowLeftIcon from "@/shared/components/Icons/ArrowLeftIcon";

export default function SearchPage() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearched, setIsSearched] = useState(false);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setIsSearched(true);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex items-center mb-4">
        <ArrowLeftIcon onClick={router.back} className="mr-4" />
        <SearchBar onSearch={handleSearch} />
        <CurrentLocationButton />
      </div>

      {isSearched ? (
        <SearchResults query={searchQuery} />
      ) : (
        <RecommendedSpaces />
      )}
    </div>
  );
}
