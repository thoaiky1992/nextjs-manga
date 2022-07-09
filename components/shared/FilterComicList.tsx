import { FilterComicModel } from "@/models/filter-comic.model";
import { FC } from "react";
import FilterComicItem from "./FilterComicItem";
import FilterComicSkeleton from "./FilterComicSkeleton";

interface FilterComicListProps {
  comics: FilterComicModel[];
  isLoading: boolean;
}

const FilterComicList: FC<FilterComicListProps> = ({ comics, isLoading }) => {
  if (isLoading)
    return (
      <div className="py-10 lg:py-20 bg-app grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 3xl:grid-cols-4 text-white gap-5">
        <FilterComicSkeleton />
      </div>
    );
  if (!comics.length)
    return (
      <div className="w-full text-center text-xl py-10 lg:py-20 text-whitn">
        Dữ liệu bạn cần chưa có
      </div>
    );
  return (
    <div className="py-10 lg:py-20 bg-app grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 3xl:grid-cols-4 text-white gap-2 lg:gap-5">
      {comics.map((comic, index) => {
        return <FilterComicItem key={index} comic={comic} />;
      })}
    </div>
  );
};

export default FilterComicList;
