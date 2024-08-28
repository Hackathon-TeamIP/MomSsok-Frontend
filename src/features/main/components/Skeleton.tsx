export const SpacesListSkeleton = () => {
  return (
    <div className="px-4">
      <div className="w-full h-[35px] animate-pulse bg-gray-200 mb-4 mt-6 rounded-md" />
      <div className="grid grid-cols-2 gap-x-3 gap-y-[23px]">
        {[...Array(10)].map((e, i) => (
          <div
            className="w-full aspect-square rounded-[10px] animate-pulse bg-gray-200 mt-2"
            key={i}
          />
        ))}
      </div>
    </div>
  );
};
