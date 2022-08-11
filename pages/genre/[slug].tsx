import { LAYOUTS } from "@/constants";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import { NextPageWithLayout } from "../_app";
import SelectFilter from "@/components/pages/genres/SelectFilter";
import CustomHead from "@/components/shared/CustomHead";
import ClientOnly from "@/components/shared/ClientOnly";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import FilterComicList from "@/components/pages/genres/FilterComicList";
import { ComicService } from "@/services/comic.service";
import CustomPagination from "@/components/shared/CustomPagination";
import { GenreModel } from "@/models/genre.model";
import useSWR from "swr";
import { FilterComicModel } from "@/models/filter-comic.model";

interface GenrePageProps {
  slug: string;
}

const GenrePage: NextPageWithLayout<GenrePageProps> = ({ slug }) => {
  const router = useRouter();

  const { data: genres } = useSWR<GenreModel[]>("getGenres", async () => {
    const comicService = ComicService.getInstance();
    const data = await comicService.getGenre();
    return data;
  });

  const { data: comics } = useSWR<{
    comics: FilterComicModel[];
    totalPage: number;
  }>(router.asPath, async () => {
    const comicService = ComicService.getInstance();
    const data = await comicService.getComicByAsPath(router.asPath);
    return data;
  });

  return (
    <div className="w-full">
      <CustomHead />
      <ClientOnly>
        <div className="w-full bg-app px-3 lg:px-20">
          <h1 className="text-2xl text-white py-5">
            Thể loại :{" "}
            {genres &&
              genres.length &&
              genres.filter((item: GenreModel) => item.slug === slug)[0]?.title}
          </h1>
          <SelectFilter />
          <FilterComicList comics={comics?.comics} />
          {comics?.totalPage && comics?.totalPage > 1 && (
            <CustomPagination totalPages={comics?.totalPage} />
          )}
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
