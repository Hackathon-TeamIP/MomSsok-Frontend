import Header from "@/features/main/components/Header";
import { SpacesList } from "@/features/main/components/SpacesList";
import TabBar from "@/shared/components/Navigation/TabBar";
import { Suspense } from "react";

export default function Home() {
  return (
    <main className="pb-[83px]">
      <Header />
      <Suspense fallback={<></>}>
        <SpacesList />
      </Suspense>
      <TabBar />
    </main>
  );
}
