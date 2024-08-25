"use client";

import {
  LeftIcons,
  RightIcons,
} from "@/features/search/components/HeaderIcons";
import RecommendedSpaces from "@/features/search/components/RecommendedSpaces";
import SearchBar from "@/features/search/components/SearchBar";
import SearchResults from "@/features/search/components/SearchResults";
import { BaseHeader } from "@/shared/components/Navigation/BaseHeader";
import { useState } from "react";

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearched, setIsSearched] = useState(false);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setIsSearched(true);
  };
  return (
    <>
      <BaseHeader
        leftIcons={[
          {
            id: "left-icons",
            component: <LeftIcons />,
          },
        ]}
        rightIcons={[
          {
            id: "right-icons",
            component: <RightIcons />,
          },
        ]}
        className="bg-white"
      >
        <SearchBar onSearch={handleSearch} />
      </BaseHeader>
      <section className="p-4">
        {isSearched ? (
          <SearchResults query={searchQuery} />
        ) : (
          <RecommendedSpaces />
        )}
      </section>
    </>
  );
}
