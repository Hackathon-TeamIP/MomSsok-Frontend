import TabBar from "../Navigation/TabBar";

export const NextLayout = ({ children }: { children?: React.ReactNode }) => {
  return (
    <div className="pb-[83px]">
      {children}
      <TabBar />
    </div>
  );
};
