const FilterComicSkeleton = () => {
  return (
    <>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((i) => {
        return (
          <div
            key={i}
            className="w-full rounded-lg flex bg-dark mb-5 p-5 animate-scale animate-pulse"
          >
            <figure className="relative h-[200px] min-h-[100px] w-[150px] min-w-[120px] animate-pulse overflow-hidden rounded-lg bg-secondary"></figure>
            <div className="flex-1 flex flex-col relative space-y-[15px]">
              <p className="ml-3 mb-2 text-sm lg:text-xl flex flex-nowrap items-center bg-secondary h-[30px] rounded w-[95%] animate-pulse"></p>
              <p className="ml-3  text-sm flex flex-nowrap items-center bg-secondary h-[10px] rounded w-[95%] animate-pulse"></p>
              <p className="ml-3  text-sm flex flex-nowrap items-center bg-secondary h-[10px] rounded w-[95%] animate-pulse"></p>
              <p className="ml-3  text-sm flex flex-nowrap items-center bg-secondary h-[10px] rounded w-[95%] animate-pulse"></p>
              <p className="ml-3  text-sm flex flex-nowrap items-center bg-secondary h-[10px] rounded w-[95%] animate-pulse"></p>
              <div className="absolute bottom-0 left-0 flex h-fit w-[80%] md:w-[50%] items-center px-3 animate-pulse">
                <button className="w-full  text-sm items-center justify-center space-x-4 rounded-lg bg-secondary py-1 px-3 h-[30px]"></button>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};
export default FilterComicSkeleton;
