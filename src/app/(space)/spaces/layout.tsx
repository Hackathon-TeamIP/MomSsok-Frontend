export default function SpaceDetailLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <section className="pb-[80px]">{children}</section>
    </>
  );
}
