import ClientOnly from "@/components/shared/ClientOnly";
import { ComicService } from "@/services/comic.service";
import { ReccommendComicModel } from "@/models/reccommend-comic.model";
import NewComic from "@/components/pages/home/NewComic";
import { NewComicModel } from "@/models/new-comic.model";
import { RankComicModel } from "@/models/rank-comic.model";
import RankComic from "@/components/pages/home/RankComic";
import { NextPageWithLayout } from "./_app";
import { LAYOUTS } from "@/constants";
import Banner from "@/components/shared/Banner";
import { GetStaticProps } from "next";
import CustomHead from "@/components/shared/CustomHead";
interface HomeProps {
  getRecommendedComic: Array<ReccommendComicModel>;
  getNewComic: Array<NewComicModel>;
  getTopMonthComic: Array<RankComicModel>;
  getTopWeekComic: Array<RankComicModel>;
  getTopDayComic: Array<RankComicModel>;
}

const Home: NextPageWithLayout<HomeProps> = ({
  getRecommendedComic,
  getNewComic,
  getTopMonthComic,
  getTopWeekComic,
  getTopDayComic,
}) => {
  return (
    <>
      <CustomHead />
      <div className="w-full min-h-screen bg-app text-white">
        <ClientOnly>
          <div className="w-full">
            <Banner getRecommendedComic={getRecommendedComic} />
            <NewComic newComic={getNewComic} />
            <RankComic
              topMonthComic={getTopMonthComic}
              topWeekComic={getTopWeekComic}
              topDayComic={getTopDayComic}
            />
          </div>
        </ClientOnly>
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const commicService = ComicService.getInstance();
  const [
    getRecommendedComic,
    getNewComic,
    getTopMonthComic,
    getTopWeekComic,
    getTopDayComic,
  ] = await Promise.all([
    commicService.getRecommendedComic(),
    commicService.getNewComic(),
    commicService.getTopMonthComic(),
    commicService.getTopWeekComic(),
    commicService.getTopDayComic(),
  ]);

  return {
    props: {
      getRecommendedComic,
      getNewComic,
      getTopMonthComic,
      getTopWeekComic,
      getTopDayComic,
    }
  };
};

Home.layout = LAYOUTS.APP;

export default Home;
