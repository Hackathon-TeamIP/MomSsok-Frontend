import { SpacesDetailSkeleton } from "@/features/spaces/detail/components/Skeleton";
import { SpaceInfo } from "@/features/spaces/detail/components/SpaceInfo";
import { SpaceProfile } from "@/features/spaces/detail/components/SpaceProfile";
import { QueryErrorBoundary } from "@/shared/providers/QueryErrorBoundary";
import { Suspense } from "react";

export default function SpacesDetailPage() {
  return (
    <>
      <QueryErrorBoundary>
        <Suspense fallback={<SpacesDetailSkeleton />}>
          <SpaceProfile />
          <SpaceInfo />
        </Suspense>
      </QueryErrorBoundary>
    </>
  );
}
