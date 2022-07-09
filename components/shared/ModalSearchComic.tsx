import { SEARCH_COMIC } from "@/graphql/query";
import { SearchComicModel } from "@/models/search-comic.model";
import { ComicService } from "@/services/comic.service";
import { EmojiSadIcon, SearchIcon, XIcon } from "@heroicons/react/outline";
import slugify from "slugify";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import ComicSearchChapterItem from "./ComicSearchChapterItem";

const ModalSearchComic = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [isData, setIsData] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [keySearch, setKeySearch] = useState<string>("");
  const [chapters, setChaters] = useState<SearchComicModel[]>([]);
  const comicService = ComicService.getInstance();
  const debounce = useRef<any>(null);
  const inputSearchRref = useRef<any>(null);

  const handleChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    setKeySearch(value);
    setLoading(true);
    setIsData(false);
    if (debounce.current) clearInterval(debounce.current);
    debounce.current = setTimeout(async () => {
      if (value.length) {
        const data = await comicService.searchComic(
          slugify(value, {
            replacement: "+", // replace spaces with replacement character, defaults to `-`
            remove: undefined, // remove characters that match regex, defaults to `undefined`
            lower: true, // convert to lower case, defaults to `false`
            strict: false, // strip special characters except replacement, defaults to `false`
            locale: "vi", // language code of the locale to use
            trim: true, // trim leading and trailing replacement chars, defaults to `true`
          })
        );
        if (!data.length) setIsData(true);
        setChaters(data);
      } else {
        setChaters([]);
      }
      setLoading(false);
    }, 1000);
  };

  const handleClose = () => {
    setKeySearch("");
    setChaters([]);
    setOpen(false);
  };

  const handleClearKeySearch = () => {
    setKeySearch("");
    setChaters([]);
    setIsData(false);
  };

  useEffect(() => {
    if (open) {
      inputSearchRref.current.focus();
    }
  }, [open]);

  return (
    <>
      <div
        onClick={() => setOpen(true)}
        className="flex h-[30px] lg:h-[50px] w-fit items-center justify-between rounded-2xl bg-white shadow-xl shadow-white/20 lg:w-[80%]"
      >
        <button className="mx-4 hidden rounded-xl bg-rose-300 px-2 py-1 text-rose-600 transition-all hover:bg-rose-500 hover:text-white/80 lg:block">
          <a href="/browse">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
              className="h-4 w-4"
            >
              <path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z" />
            </svg>
          </a>
        </button>
        <input
          readOnly
          className="hidden w-[80%] bg-transparent lg:block focus:outline-none cursor-pointer"
          placeholder="Tìm truyện..."
        />
        <div className="w-[30px] h-[30px] lg:w-[50px] lg:h-[50px] flex justify-center items-center rounded-2xl hover:cursor-pointer hover:opacity-60 lg:text-black">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
            className="h-3 w-3 lg:w-6 lg:h-6 text-black"
          >
            <path
              fillRule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
      <div
        className={`w-screen h-screen fixed bg-transparent left-0 top-0 flex items-center justify-center text-white px-3 ${
          open ? "" : "hidden"
        }`}
      >
        <div className="absolute bg-secondary opacity-90 w-full h-full top-0 left-0 z-40"></div>
        <div className="bg-app w-[90%] lg:w-[800px] lg:max-w-[800px] animate-scale absolute z-50 rounded-lg pt-5 pb-10 px-3 lg:px-5 mx-3">
          <div className="w-full flex items-start justify-between">
            <span className="text-xl">Tìm truyện</span>
            <XIcon
              className="w-6 h-6 cursor-pointer hover:scale-90 transition-all ease-in-out"
              onClick={handleClose}
            />
          </div>
          <div className="w-full relative mt-5 pr-4">
            <SearchIcon className="w-5 h-5 absolute top-1/2 -translate-y-1/2 left-3" />
            <input
              ref={inputSearchRref}
              type="text"
              className="bg-secondary py-2 px-12 rounded-lg !w-full lg:w-auto text-[10px] lg:text-sm mr-2 cursor-pointer focus:ring-1 focus:ring-primary focus:outline-none"
              onChange={handleChange}
              value={keySearch}
            />
            <XIcon
              className="w-4 h-4 cursor-pointer absolute top-1/2 -translate-y-1/2 right-7"
              onClick={handleClearKeySearch}
            />
          </div>
          {loading && (
            <div className="w-full h-[50px] flex justify-center items-center mt-10">
              <div className="dot-pulse"></div>
            </div>
          )}

          {!loading && chapters.length > 0 && (
            <div className="w-full pr-2 mt-5 max-h-[400px] overflow-y-scroll">
              {chapters.map((chapter, index) => {
                return (
                  <ComicSearchChapterItem
                    key={index}
                    chapter={chapter}
                    isPb={index !== chapters.length - 1}
                    handleClose={handleClose}
                  />
                );
              })}
            </div>
          )}
          {isData && (
            <div className="w-full flex justify-center items-center mt-10">
              <h1>Truyện bạn cần tìm chưa có</h1>
              <EmojiSadIcon className="w-6 h-6 ml-2" />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ModalSearchComic;
