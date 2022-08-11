import { NewComicModel } from "@/models/new-comic.model";
import {
  ChevronRightIcon,
  ClipboardListIcon,
  ClockIcon,
  EyeIcon,
  HeartIcon,
} from "@heroicons/react/outline";
import Link from "next/link";
import { FC } from "react";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

interface NewComicProps {
  newComic: Array<NewComicModel>;
}

const NewComic: FC<NewComicProps> = ({ newComic }) => {
  const swiperBreakPoints = {
    1: {
      slidesPerView: 2,
      spaceBetween: 2,
    },
    320: {
      slidesPerView: 3,
    },
    480: {
      slidesPerView: 4,
    },
    768: {
      slidesPerView: 5,
      spaceBetween: 10,
    },
    1280: {
      slidesPerView: 7,
    },
  };

  return (
    <div className="w-full py-10 px-3 lg:px-10">
      <div className="text-sm lg:text-xl flex items-center">
        <span className="cursor-pointer">Mới Câp Nhật</span>
        <ChevronRightIcon className="h-4 w-4 lg:h-6 lg:w-6 mt-1 ml-1 text-white cursor-pointer" />
      </div>
      <div className="w-full relative overflow-hidden rounded-lg mt-5">
        <Swiper
          spaceBetween={10}
          breakpoints={swiperBreakPoints}
          modules={[Autoplay]}
          loop={true}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
        >
          {newComic.map((item: NewComicModel, index: number) => {
            return (
              <SwiperSlide key={index}>
                <div className="group relative rounded-lg overflow-hidden cursor-pointer">
                  <figure
                    style={{
                      backgroundImage: "url(" + item.imageSrc + ")",
                    }}
                    className="aspect-w-3 aspect-h-4 relative"
                  >
                    <span className="p-3 bg-secondary absolute left-0 top-0 w-fit h-[30px] flex items-center justify-center m-2 rounded-lg text-[10px] md:text-[12px] lg:text-sm">
                      {item.chapIndexText}
                    </span>
                  </figure>
                  <div className="opacity-0 scale-0 group-hover:scale-100 group-hover:opacity-100 transition-all bg-secondary flex absolute py-2 lg:py-4 left-0 top-0 z-50 h-full w-full flex-col space-y-1 lg:space-y-2 overflow-hidden bg-highlight text-white">
                    <p className="mx-4 mb-2 text-[9px] lg:text-sm flex flex-nowrap items-center line-clamp-2">
                      {item.title}
                    </p>
                    <p className="ml-3 text-[10px] lg:text-sm flex flex-nowrap items-center">
                      <ClipboardListIcon className="h-3 w-3 lg:h-5 lg:w-5" />
                      <span className="ml-2 text-[90%] line-clamp-1">
                        {item.chapIndexText}
                      </span>
                    </p>
                    <p className="ml-3 text-[10px] lg:text-sm flex items-center">
                      <ClockIcon className="h-3 w-3 lg:h-5 lg:w-5" />{" "}
                      <span className="ml-2 text-[90%]">
                        {item.chapUpdatedAtText}
                      </span>
                    </p>
                    <p className="ml-3 text-[10px] lg:text-sm flex items-center">
                      <EyeIcon className="h-3 w-3 lg:h-5 lg:w-5" />{" "}
                      <span className="ml-2 text-[90%]">{item.views}</span>
                    </p>
                    <p className="ml-3 text-[10px] lg:text-sm flex items-center">
                      <HeartIcon className="h-3 w-3 lg:h-5 lg:w-5" />{" "}
                      <span className="ml-2 text-[90%]">{item.likes}</span>
                    </p>

                    <div className="absolute bottom-1 sm:bottom-2 left-0 flex h-fit w-full items-center px-2">
                      <Link href={"/comic-detail/" + item.slug}>
                        <a className="w-full text-[10px] text-center lg:text-sm items-center justify-center space-x-4 rounded-xl bg-primary py-1 px-3 transition-all hover:scale-[105%]">
                          Chi tiết
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};
export default NewComic;
