import { ChapterList } from "@/components/shared/ChapterList";
import ComicDetailInfo from "@/components/shared/ComicDetailInfo";
import CustomHead from "@/components/shared/CustomHead";
import { LAYOUTS } from "@/constants";
import { ComicDetailModel } from "@/models/comic-detail.model";
import { ComicService } from "@/services/comic.service";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import { NextPageWithLayout } from "../_app";

interface ComicDetailPageProps {
  comic: ComicDetailModel;
}

const ComicDetailPage: NextPageWithLayout<ComicDetailPageProps> = ({
  comic,
}) => {
  return (
    <>
      <CustomHead
        title={comic.title}
        description={comic.description}
        image={comic.imageSrc}
      />
      <ComicDetailInfo comic={comic} />
      <ChapterList chapters={comic.chapters} />
    </>
  );
};

ComicDetailPage.layout = LAYOUTS.APP;

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const comicService = ComicService.getInstance();
  const comic = await comicService.getComicDetailBySlug(
    context.query.slug as String
  );
  return {
    props: {
      comic,
    },
  };
};

export default ComicDetailPage;
