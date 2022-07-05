import { FilterComicModel } from "@/models/filter-comic.model";
import { FC } from "react";
import FilterComicItem from "./FilterComicItem";
import FilterComicSkeleton from "./FilterComicSkeleton";

interface FilterComicListProps {
  comics: FilterComicModel[];
}

const FilterComicList: FC<FilterComicListProps> = ({ comics }) => {
  return (
    <div className="py-20 bg-app grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 3xl:grid-cols-4 text-white gap-5">
      {comics.length ? (
        comics.map((comic, index) => {
          return <FilterComicItem key={index} comic={comic} />;
        })
      ) : (
        <FilterComicSkeleton />
      )}
    </div>
  );
};

export default FilterComicList;
