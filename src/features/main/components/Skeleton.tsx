export const SpacesListSkeleton = () => {
  return (
    <div className="grid grid-cols-2 gap-x-3 gap-y-[23px] px-4 mt-[73px]">
      {[...Array(10)].map((e, i) => (
        <div
          className="w-full aspect-square rounded-[10px] animate-pulse bg-gray-200 mt-2"
          key={i}
        />
      ))}
    </div>
  );
};
