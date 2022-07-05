import { GenreModel } from "@/models/genre.model";
import Link from "next/link";
import { useRouter } from "next/router";
import { FC, useState } from "react";
import Logo from "../shared/Logo";

interface HeaderProps {
  genres: GenreModel[];
}

const Header: FC<HeaderProps> = ({ genres }) => {
  const router = useRouter();
  const [hover, setHover] = useState(false);
  const handleDirect = (slug: string) => {
    setHover(false);
    router.push("/genre/" + slug);
  };
  return (
    <div className="w-screen h-[100px] fixed z-50 bg-app text-white">
      <div className="max-w-screen-xl h-full m-auto">
        <div className="w-full  h-full flex items-center  px-5 lg:px-0">
          <Logo />
          <div className="flex-1 pl-20 flex justify-around items-center gap-10 ">
            <div
              className="genre text-xl hidden lg:block relative group"
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
            >
              <span className=" cursor-pointer flex items-center gap-2">
                Thể loại
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  aria-hidden="true"
                  className="h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </span>
              <div
                className={`absolute top-[100%] left-0 w-[650px] pt-5 scale-0 ${
                  hover ? "scale-100" : "scale-0"
                }`}
              >
                <div className="shadow-xl comic-genres relative shadow-white rounded-lg bg-high-light grid grid-cols-4 gap-5 p-5 opacity-0 group-hover:opacity-100 translate-y-10 group-hover:translate-y-0 transform duration-75 delay-75">
                  {genres.map((genre, index) => {
                    return (
                      <div
                        key={index}
                        onClick={() => handleDirect(genre.slug)}
                        className="flex justify-center items-center text-sm cursor-pointer hover:bg-primary hover:scale-90 rounded-lg py-3 transition-all ease-in-out duration-200"
                      >
                        {genre.title}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="genre text-xl hidden lg:block">Bảng xếp hạng</div>
            <div className="genre text-xl hidden lg:block">Liên hệ</div>
            <div className="ml-10 flex h-full flex-1 items-center justify-end">
              <div className="flex h-[50px] w-fit items-center justify-between rounded-2xl bg-white shadow-xl shadow-white/20 lg:w-[80%]">
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
                  placeholder="Tìm manga..."
                />
                <div className="w-[50px] h-[50px] flex justify-center items-center rounded-2xl hover:cursor-pointer hover:opacity-60 lg:text-black">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                    className="h-6 w-6 text-black"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
