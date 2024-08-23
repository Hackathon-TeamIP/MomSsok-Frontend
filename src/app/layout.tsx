import "@/shared/styles";
import { NextLayout } from "@/shared/components/Layout/Layout";
import { pretendard } from "@/shared/styles/fonts";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "맘쏙",
  description: "내 주변 베리어프리 놀이터",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${pretendard.variable}`}>
      <body className="max-w-custom mx-auto min-h-screen flex flex-col shadow-lg overflow-y-auto h-auto scrollbar-hide">
        <NextLayout>{children}</NextLayout>
      </body>
    </html>
  );
}
