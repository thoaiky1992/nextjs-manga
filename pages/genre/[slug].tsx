import { LAYOUTS } from "@/constants";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import { NextPageWithLayout } from "../_app";
import SelectFilter from "@/components/shared/SelectFilter";
import CustomHead from "@/components/shared/CustomHead";
import ClientOnly from "@/components/shared/ClientOnly";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import FilterComicList from "@/components/shared/FilterComicList";
import { ComicService } from "@/services/comic.service";
import CustomPagination from "@/components/shared/CustomPagination";
import { GenreModel } from "@/models/genre.model";
import useSWR from "swr";

interface GenrePageProps {
  slug: string;
}

const GenrePage: NextPageWithLayout<GenrePageProps> = ({ slug }) => {
  const [comics, setComics] = useState([]);
  const router = useRouter();

  const { data } = useSWR<GenreModel[]>("getGenres", async () => {
    const comicService = ComicService.getInstance();
    const genres = (await comicService.getGenre()).getGenre;
    return genres;
  });

  if (!data) return <div>loading....</div>;

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    const fetchData = async () => {
      setComics([]);
      const comicService = ComicService.getInstance();
      const data = (await comicService.getComicByAsPath(router.asPath))
        .getComicByAsPath;
      setComics(data);
    };
    fetchData();
  }, [router.query]);

  return (
    <div className="w-full">
      <CustomHead />
      <ClientOnly>
        <div className="w-full bg-app px-3 lg:px-20">
          <h1 className="text-2xl text-white py-5">
            Thể loại :{" "}
            {data.filter((item: GenreModel) => item.slug === slug)[0].title}
          </h1>
          <SelectFilter />
          <FilterComicList comics={comics} />
          <CustomPagination totalPages={10} />
        </div>
      </ClientOnly>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const { slug } = context.query;
  return {
    props: {
      slug: String(slug),
    },
  };
};

GenrePage.layout = LAYOUTS.APP;

export default GenrePage;
