export const SpacesListSkeleton = () => {
  return (
    <>
      {[...Array(10)].map((e, i) => (
        <div
          className="w-full aspect-square rounded-[10px] animate-pulse bg-gray-200 mt-2"
          key={i}
        />
      ))}
    </>
  );
};
