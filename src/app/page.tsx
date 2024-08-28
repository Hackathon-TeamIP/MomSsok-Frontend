import Header from "@/features/main/components/Header";
import { SpacesList } from "@/features/main/components/SpacesList";
import { TabBar } from "@/shared/components/Navigation/TabBar";
import { QueryErrorBoundary } from "@/shared/providers/QueryErrorBoundary";

export default function Home() {
  return (
    <main className="pb-[60px]">
      <Header />
      <QueryErrorBoundary>
        <SpacesList />
      </QueryErrorBoundary>
      <TabBar />
    </main>
  );
}
