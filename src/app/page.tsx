import Header from "@/features/main/components/Header";
import { SpacesList } from "@/features/main/components/SpacesList";
import { Suspense } from "react";

export default function Home() {
  return (
    <main>
      <Header />
      <Suspense fallback={<></>}>
        <SpacesList />
      </Suspense>
    </main>
  );
}
