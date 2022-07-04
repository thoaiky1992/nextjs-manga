import { RankComicModel } from "@/models/rank-comic.model";
import { BookmarkIcon } from "@heroicons/react/outline";
import { FC } from "react";
import SectionRankCardItem from "./SectionRankCardItem";

interface SectionRankCardProps {
  comics: Array<RankComicModel>;
  title: string;
}
const SectionRankCard: FC<SectionRankCardProps> = ({ title, comics }) => {
  return (
    <div className="flex flex-col rounded-lg bg-dark text-white p-5 ">
      <h1 className="lg:text-xl flex items-center">
        {" "}
        <BookmarkIcon className="h-5 w-5 mr-2" /> {title}
      </h1>
      <div className="w-full max-h-[500px] overflow-y-scroll comic-rank mt-5">
        {comics.map((comic, index) => {
          return <SectionRankCardItem key={index} comic={comic} />;
        })}
        <div className="w-full">
          <span className="cursor-pointer">Xem thêm ...</span>
        </div>
      </div>
    </div>
  );
};
export default SectionRankCard;
