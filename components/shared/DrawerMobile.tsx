import Logo from "@/public/logo.png";
import Link from "next/link";
import { FC, useRef, useState } from "react";
import Image from "next/image";
import { Dialog } from "@headlessui/react";
import {
  ArrowNarrowRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  PlusIcon,
} from "@heroicons/react/outline";
import { HiMenuAlt2 } from "react-icons/hi";
import { GenreModel } from "@/models/genre.model";
import { useRouter } from "next/router";

interface DrawerMobileProps {
  genres: GenreModel[];
}

const DrawerMobile: FC<DrawerMobileProps> = ({ genres }) => {
  const [showSidebar, setShowSidebar] = useState<boolean>(false);
  const router = useRouter();

  //prevent sidebar close before adding effects
  const sidebarRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const handleSidebarClose = () => {
    sidebarRef.current?.classList.remove("slideLeftReturn");
    sidebarRef.current?.classList.add("slideLeft");
    overlayRef.current?.classList.remove("animate__fadeIn");
    overlayRef.current?.classList.add("animate__fadeOut");

    setTimeout(() => {
      setShowSidebar(false);
    }, 400);
  };

  const handleDirectToGenre = (slug: string) => {
    handleSidebarClose();
    setTimeout(() => {
      router.push("/genre/" + slug);
    }, 400);
  };

  const handleDirectToHome = () => {
    handleSidebarClose();
    setTimeout(() => {
      router.push("/");
    }, 400);
  };

  return (
    <>
      <HiMenuAlt2
        className=" text-4xl text-white mr-3"
        onClick={() => setShowSidebar(true)}
      />
      <Dialog
        className="lg:hidden"
        open={showSidebar}
        onClose={handleSidebarClose}
      >
        {/* backdrop */}
        <Dialog.Overlay
          ref={overlayRef}
          className="animate__fadeIn animate__animated animate__faster fixed inset-0 z-[100]"
          aria-hidden="true"
        />
        <aside
          ref={sidebarRef}
          className={`${
            showSidebar && "slideLeftReturn"
          } magictime absolute-center	 fixed inset-0 z-[999] w-[300px] bg-high-light p-4 md:w-[40%]`}
        >
          <div className="flex h-full w-full flex-col">
            {/* control sidebar & logo */}
            <div className="absolute-center flex h-fit w-full items-center justify-between">
              <div className="absolute-center relative flex-1 flex justify-start items-center">
                <div
                  className="w-[100px] lg:w-auto flex items-center"
                  onClick={handleDirectToHome}
                >
                  <Image src={Logo} alt="logo" className="cursor-pointer" />
                </div>
              </div>
              <ChevronLeftIcon
                className="h-5 w-5 text-white"
                onClick={handleSidebarClose}
              />
            </div>
            {/* sidebar list  */}
            <ul className="mt-10 h-full w-full text-white">
              <li className="border-t-[2px] border-highlight py-2">
                <h3 className="font-secondary text-xl">Thể loại</h3>
              </li>
              <li className="grid grid-cols-2">
                {genres.map((genre, index) => {
                  return (
                    <div
                      key={index}
                      className="text-[12px] py-3"
                      onClick={() => handleDirectToGenre(genre.slug)}
                    >
                      {genre.title}
                    </div>
                  );
                })}
              </li>
              <li className="w-full my-5"></li>
              <li className="border-t-[2px] border-highlight py-2">
                <div
                  className="font-secondary text-xl flex items-center"
                  onClick={() => handleDirectToGenre("manga-112")}
                >
                  <span>Bảng xếp hạng Manga</span>{" "}
                  <ArrowNarrowRightIcon className="h-6 w-6 ml-2 mt-[5px]" />
                </div>
              </li>
            </ul>
          </div>
        </aside>
      </Dialog>
    </>
  );
};

export default DrawerMobile;
