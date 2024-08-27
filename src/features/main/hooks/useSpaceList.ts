import { SpaceListItem } from "@/shared/types/space";
import {
  FetchNextPageOptions,
  InfiniteQueryObserverResult,
  useSuspenseInfiniteQuery,
  InfiniteData,
} from "@tanstack/react-query";
import { useMemo } from "react";

interface FetchSpacesResponse {
  data: SpaceListItem[];
  page: number;
}

interface UseSpaceListReturn {
  data: SpaceListItem[];
  fetchNextPage: (
    options?: FetchNextPageOptions,
  ) => Promise<
    InfiniteQueryObserverResult<InfiniteData<FetchSpacesResponse>, Error>
  >;
  isFetching: boolean;
  isFetchingNextPage: boolean;
  hasNextPage: boolean | undefined;
  isError: boolean;
}

export default function useSpaceList(limit = 10): UseSpaceListReturn {
  const {
    data,
    isFetching,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
    error,
  } = useSuspenseInfiniteQuery<FetchSpacesResponse, Error>({
    queryKey: ["spaces"],
    queryFn: async ({ pageParam = 1 }) => {
      const response = await fetch(
        `${
          process.env.NEXT_PUBLIC_BASE_URL
        }/api/spaces?page=${pageParam}&limit=${limit}`,
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      return await response.json();
    },
    getNextPageParam: (lastPage) => {
      return lastPage?.data.length === limit ? lastPage.page + 1 : undefined;
    },
    initialPageParam: 1,
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
  });

  const spaces = useMemo(() => {
    return data?.pages.map((page) => page.data).flat() || [];
  }, [data]);

  return {
    data: spaces,
    fetchNextPage,
    isFetching,
    isFetchingNextPage,
    hasNextPage,
    isError: !!error,
  };
}
