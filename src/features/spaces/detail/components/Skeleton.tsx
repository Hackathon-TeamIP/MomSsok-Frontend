export const SpacesDetailSkeleton = () => {
  return (
    <>
      <div className="w-ful animate-pulse bg-gray-200 aspect-square" />
      {[...Array(10)].map((e, i) => (
        <div className="w-full h-20 animate-pulse bg-gray-200 mt-2" key={i} />
      ))}
    </>
  );
};
