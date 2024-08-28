import { SpaceListItem } from "@/shared/types/space";
import { QueryFunctionContext, useInfiniteQuery } from "@tanstack/react-query";

type FetchSpacesResponse = {
  data: SpaceListItem[];
  page: number;
  totalCount: number;
  totalPage: number;
};

export const useSpaceList = () => {
  return useInfiniteQuery<FetchSpacesResponse, Error>({
    queryKey: ["spaces"],
    queryFn: fetchSpaces,
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      if (lastPage.page < lastPage.totalPage) {
        return lastPage.page + 1;
      }
      return undefined;
    },
  });
};

const fetchSpaces = async ({
  pageParam = 1,
}: QueryFunctionContext): Promise<FetchSpacesResponse> => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/spaces?page=${pageParam}`,
  );
  if (!response.ok) {
    throw new Error("Failed to fetch spaces");
  }
  return response.json();
};
