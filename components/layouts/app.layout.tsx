import { GET_GENRES_KEY } from "@/constants";
import { GenreModel } from "@/models/genre.model";
import { ComicService } from "@/services/comic.service";
import { ReactNode } from "react";
import useSWR from "swr";
import Footer from "../partials/Footer";
import Header from "../partials/Header";

interface AppLayoutProps {
  children: ReactNode;
}

const AppLayout = ({ children }: AppLayoutProps) => {
  const { data } = useSWR<GenreModel[]>(GET_GENRES_KEY, async () => {
    const comicService = ComicService.getInstance();
    const genres = await comicService.getGenre();
    return genres;
  });
  return (
    <>
      {data && <Header genres={data} />}
      <main className="w-full pt-[100px]">{children}</main>
      <Footer />
    </>
  );
};

export default AppLayout;

// https://www.anycodings.com/2021/12/static-generation-with-nextjs-pass-page.html
