import "@/shared/styles";
import { NextLayout } from "@/shared/components/Layout/Layout";
import { pretendard } from "@/shared/styles/fonts";
import type { Metadata } from "next";

export const metadata: Metadata = {};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${pretendard.variable}`}>
      <body>
        <NextLayout>{children}</NextLayout>
      </body>
    </html>
  );
}
