"use client";
import ArrowLeftIcon from "@/shared/components/Icons/ArrowLeftIcon";
import { BaseHeader } from "@/shared/components/Navigation/BaseHeader";
import { useRouter } from "next/navigation";

export default function SpaceDetailLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();
  return (
    <>
      <BaseHeader
        leftIcons={[
          {
            id: "back",
            component: <ArrowLeftIcon color="#000" className="opacity-70" />,
            onClick: () => router.back(),
          },
        ]}
        className="fixed top-0"
      />
      <section className="pb-[80px]">{children}</section>
    </>
  );
}
