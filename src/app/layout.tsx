import "@/shared/styles";
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
      <body>
        {/* <NextLayout>{children}</NextLayout> */}
        {children}
      </body>
    </html>
  );
}
