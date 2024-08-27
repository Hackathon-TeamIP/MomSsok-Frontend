import { SpacesDetailSkeleton } from "@/features/spaces/detail/components/Skeleton";
import { SpaceInfo } from "@/features/spaces/detail/components/SpaceInfo";
import { SpaceProfile } from "@/features/spaces/detail/components/SpaceProfile";
import { Suspense } from "react";

export default function SpacesDetailPage() {
  return (
    <>
      <Suspense fallback={<SpacesDetailSkeleton />}>
        <SpaceProfile />
        <SpaceInfo />
      </Suspense>
    </>
  );
}
