import { FilterComicModel } from "@/models/filter-comic.model";
import { EmojiSadIcon } from "@heroicons/react/outline";
import { FC } from "react";
import FilterComicItem from "./FilterComicItem";
import FilterComicSkeleton from "./FilterComicSkeleton";

interface FilterComicListProps {
  comics?: FilterComicModel[] | undefined;
}

const FilterComicList: FC<FilterComicListProps> = ({ comics }) => {
  if (!comics)
    return (
      <div className="py-10 lg:py-20 bg-app grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 3xl:grid-cols-4 text-white gap-5">
        <FilterComicSkeleton />
      </div>
    );
  if (!comics?.length)
    return (
      <div className="w-full text-center text-xl py-10 lg:py-20 text-white flex items-center justify-center">
        <span className="mr-2">Dữ liệu bạn cần chưa có</span>{" "}
        <EmojiSadIcon className="w-6 h-6" />
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
