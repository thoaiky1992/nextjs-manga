import CustomHead from "@/components/shared/CustomHead";
import ModalFilterChapter from "@/components/shared/ModalFilterChapter";
import { ReadComicModel } from "@/models/read-comic.model";
import { ComicService } from "@/services/comic.service";
import {
  ArrowNarrowLeftIcon,
  ArrowNarrowRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/outline";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import Link from "next/link";
import { NextPageWithLayout } from "../_app";

interface ReadComicPageProps {
  readComic: ReadComicModel;
  slug: string;
  dn: string;
  detailSlug: string
}

const ReadComicPage: NextPageWithLayout<ReadComicPageProps> = ({
  readComic,
  slug,
  dn,
  detailSlug
}) => {
  const SafeLink = ({ children, href, slug }: any) => {
    if (slug === "") return <span>{children}</span>;
    return (
      <Link href={href}>
        <a>{children}</a>
      </Link>
    );
  };
  const renderHref = (type: "previous" | "next") => {
    const t = type === "previous" ? "previousChapterHref" : "nextChapterHref";
    const href = readComic[t].split("truyen-tranh")[1];
    return "/read" + href + "?dn=" + dn;
  };

  return (
    <>
      <CustomHead />
      <div className="w-full bg-app relative pt-[80px]">
        <div className="read-header w-full text-white shadow-md shadow-gray-500 bg-app fixed left-0 top-0">
          <div className="max-w-screen-md m-auto h-[80px] flex items-center px-3 lg:px-0">
            <Link href={"/comic-detail/" + detailSlug}>
              <a>
                <ArrowNarrowLeftIcon className="h-8 w-8  lg:w-9 lg:h-9 mr-5 bg-secondary rounded-full p-2 hover:bg-primary cursor-pointer transition-all ease-in-out hover:scale-90" />
              </a>
            </Link>
            <ModalFilterChapter
              chapters={readComic.chapters}
              currentChapterHref={readComic.currentChapterHref}
            />
            <div className="rounded-lg bg-secondary p-2 text-[10px] lg:text-sm mr-2">
              {readComic.currentChapterIndexText}
            </div>
            <SafeLink
              slug={readComic.previousChapterHref}
              href={renderHref("previous")}
            >
              <div className="p-2 bg-secondary rounded-lg mr-2 hover:bg-primary cursor-pointer transition-all ease-in-out hover:scale-90">
                <ChevronLeftIcon className="w-4 h-4 lg:h-5 lg:w-5" />
              </div>
            </SafeLink>
            <SafeLink
              slug={readComic.nextChapterHref}
              href={renderHref("next")}
            >
              <div className="p-2 bg-secondary rounded-lg hover:bg-primary cursor-pointer transition-all ease-in-out hover:scale-90">
                <ChevronRightIcon className="w-4 h-4 lg:h-5 lg:w-5" />
              </div>
            </SafeLink>
          </div>
        </div>
        <div className="w-full bg-app text-white"></div>
        <div className="read-content flex flex-col bg-app m-auto max-w-screen-lg overflow-y-scroll justify-center text-center">
          {readComic.imageSrcList.map((src: string, index: number) => {
            return (
              // eslint-disable-next-line @next/next/no-img-element
              <img key={index} src={"/api/read-image?src=" + src} alt="" />
            );
          })}
        </div>
        <div className="w-full bg-app flex items-center justify-center text-white py-10">
          {readComic.previousChapterHref && (
            <Link href={renderHref("previous")}>
              <a className="flex items-center bg-secondary py-2 px-4 mr-2 rounded-lg hover:bg-primary hover:scale-90 cursor-pointer transition-all ease-in-out">
                <ArrowNarrowLeftIcon className="w-4 h-4 mr-2" />
                <span className="text-sm lg:text-lg">Chap trước</span>
              </a>
            </Link>
          )}
          {readComic.nextChapterHref && (
            <Link href={renderHref("next")}>
              <a className="flex items-center bg-secondary py-2 px-4 rounded-lg hover:bg-primary hover:scale-90 cursor-pointer transition-all ease-in-out">
                <span className="text-sm lg:text-lg">Chap sau</span>
                <ArrowNarrowRightIcon className="w-4 h-4 ml-2" />
              </a>
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const slug = context.query.slug as string[];
  const dn = (context.query?.dn as string) || "";
  const comicService = ComicService.getInstance();
  const chapterSlug = slug.join("/");
  const detailSlug = `${slug[0]}-${dn}`;
  const readComic: ReadComicModel = await comicService.readComic(
    chapterSlug,
    detailSlug
  );

  if (!readComic.currentChapterIndexText) return { notFound: true };

  return {
    props: {
      slug: slug[0],
      readComic,
      dn,
      detailSlug
    },
  };
};

export default ReadComicPage;
