import { GenreModel } from "@/models/genre.model";
import Link from "next/link";
import { useRouter } from "next/router";
import { FC, useState } from "react";
import Logo from "@/public/logo.png";
import ModalSearchComic from "../shared/ModalSearchComic";
import Image from "next/image";
import DrawerMobile from "../shared/DrawerMobile";
import { GENRE_LIST } from "@/constants";

const Header = () => {
  const router = useRouter();
  const [hover, setHover] = useState(false);
  const handleDirect = (slug: string) => {
    setHover(false);
    router.push("/genre/" + slug);
  };
  return (
    <div className="w-screen h-[100px] fixed z-50 bg-app text-white lg:px-5">
      <div className="max-w-screen-xl h-full m-auto">
        <div className="w-full h-full flex items-center px-3 lg:px-0">
          <div className="lg:hidden">
            <DrawerMobile genres={GENRE_LIST} />
          </div>
          <div className="w-[100px] lg:w-auto">
            <Link href="/">
              <a>
                <Image src={Logo} alt="logo" className="cursor-pointer" />
              </a>
            </Link>
          </div>

          <div className="flex-1 pl-20 flex justify-around items-center gap-10">
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
                  {GENRE_LIST.map((genre, index) => {
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
            <div className="genre text-xl hidden lg:block ">
              <Link href={"/genre/manga-112"}>
                <a className="cursor-pointer">Bảng xếp hạng Manga</a>
              </Link>
            </div>
            {/* <div className="genre text-xl hidden lg:block">Liên hệ</div> */}
            <div className="ml-10 flex h-full flex-1 items-center justify-end">
              <ModalSearchComic />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
