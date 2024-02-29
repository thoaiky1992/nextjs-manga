import { ChapterList } from "@/components/pages/detail/ChapterList";
import ComicDetailInfo from "@/components/pages/detail/ComicDetailInfo";
import CustomHead from "@/components/shared/CustomHead";
import { LAYOUTS } from "@/constants";
import { ComicDetailModel } from "@/models/comic-detail.model";
import { ComicService } from "@/services/comic.service";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import { NextPageWithLayout } from "../_app";

interface ComicDetailPageProps {
  comic: ComicDetailModel;
  slug: string;
}

const ComicDetailPage: NextPageWithLayout<ComicDetailPageProps> = ({
  comic,
  slug
}) => {
  return (
    <>
      <CustomHead
        title={comic.title}
        description={comic.description}
        image={comic.imageSrc}
      />
      <ComicDetailInfo comic={comic} slug={slug} />
      <ChapterList chapters={comic.chapters} slug={slug} />
    </>
  );
};

ComicDetailPage.layout = LAYOUTS.APP;

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const comicService = ComicService.getInstance();
  const slug = context.query.slug as string;
  const comic: ComicDetailModel = await comicService.getComicDetailBySlug(slug);
  if (!comic.title) return { notFound: true };
  return {
    props: {
      comic,
      slug,
    },
  };
};

export default ComicDetailPage;
