import { RankComicModel } from "@/models/rank-comic.model";
import { FC } from "react";
import SectionRankCard from "./SectionRankCard";

interface RankComicProps {
  topMonthComic: Array<RankComicModel>;
  topWeekComic: Array<RankComicModel>;
  topDayComic: Array<RankComicModel>;
}

const RankComic: FC<RankComicProps> = ({
  topMonthComic,
  topWeekComic,
  topDayComic,
}) => {
  return (
    <div className="w-full pb-10 lg:py-10 px-3 lg:px-10 grid grid-cols-1 lg:grid-cols-3 gap-5">
      <SectionRankCard title="Top tháng" comics={topMonthComic} />
      <SectionRankCard title="Top tuần" comics={topWeekComic} />
      <SectionRankCard title="Top ngày" comics={topDayComic} />
    </div>
  );
};

export default RankComic;
