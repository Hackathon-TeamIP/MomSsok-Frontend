import Header from "@/features/main/components/Header";
import { SpacesListSkeleton } from "@/features/main/components/Skeleton";
import { SpacesList } from "@/features/main/components/SpacesList";
import { TabBar } from "@/shared/components/Navigation/TabBar";
import { QueryErrorBoundary } from "@/shared/providers/QueryErrorBoundary";
import { Suspense } from "react";

export default function Home() {
  return (
    <main className="pb-[60px]">
      <Header />
      <QueryErrorBoundary>
        <Suspense fallback={<SpacesListSkeleton />}>
          <SpacesList />
        </Suspense>
      </QueryErrorBoundary>
      <TabBar />
    </main>
  );
}
