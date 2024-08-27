import { SpaceListItem } from "@/shared/types/space";
import {
  UseSuspenseQueryResult,
  useSuspenseQuery,
} from "@tanstack/react-query";

interface SpaceDetailResponse {
  data: SpaceListItem[];
}

export const useSpaceDetail = (
  id: string,
): UseSuspenseQueryResult<SpaceDetailResponse, Error> => {
  return useSuspenseQuery<SpaceDetailResponse, Error>({
    queryKey: ["spaceDetail", id],
    queryFn: async () => {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/spaces?id=${id}`,
      );
      if (!response.ok) {
        throw new Error("Failed to fetch space details");
      }
      return await response.json();
    },
  });
};
