import { ComicDetailModel } from "@/models/comic-detail.model";
import Link from "next/link";
import { FC } from "react";
import Image from "next/image";
import {
  ClipboardListIcon,
  ClockIcon,
  EyeIcon,
  LightningBoltIcon,
  UserIcon,
} from "@heroicons/react/outline";

interface ComicDetailInfoProps {
  comic: ComicDetailModel;
}

export const ComicDetailInfo: FC<ComicDetailInfoProps> = ({ comic }) => {
  return (
    <div className="w-full">
      <div className="w-full relative overflow-hidden text-white bg-app">
        <figure
          style={{
            backgroundImage: "url(" + comic.imageSrc + ")",
          }}
          className="h-[250px] banner bg-cover bg-center bg-no-repeat blur md:h-[350px] lg:h-[450px]"
        ></figure>
        <div className="absolute flex left-0 top-0 w-full h-full  px-3 lg:px-20">
          <div className="md:w-[200px] mr-2 lg:mr-10 lg:w-[250px] flex justify-center items-center h-full">
            <div className="aspect-[3/4] relative z-10 flex animate-scale-image-banner h-[80%] justify-center items-center md:w-[200px] lg:w-[250px]">
              <Image
                unoptimized
                className="inset-0 object-cover object-center rounded-xl"
                alt="image-preview"
                layout="fill"
                src={String(comic.imageSrc)}
              />
            </div>
          </div>
          <div className="flex-1 flex flex-col justify-center md:ml-5 gap-1 lg:gap-5">
            <div className="w-full h-[80%] relative space-y-2 lg:space-y-5">
              <div className="text-md text-[14px] lg:text-3xl line-clamp-3">
                {comic.title}
              </div>
              <div className="text-sm flex flex-nowrap items-center">
                <UserIcon className="h-3 w-3 lg:h-6 lg:w-6" />
                <span className="ml-2 text-[10px] lg:text-lg">Tác giả :</span>
                <span className="ml-2 text-[10px] lg:text-lg line-clamp-1">
                  {comic.author}
                </span>
              </div>
              <div className="text-sm flex items-center">
                <ClockIcon className="h-3 w-3 lg:h-6 lg:w-6" />{" "}
                <span className="ml-2 text-[10px] lg:text-lg">
                  Trạng thái :
                </span>
                <span className="ml-2 text-[10px] lg:text-lg">
                  {comic.status}
                </span>
              </div>
              <div className="text-sm flex items-center">
                <EyeIcon className="h-3 w-3 lg:h-6 lg:w-6" />{" "}
                <span className="ml-2 text-[10px] lg:text-lg">Lượt xem :</span>
                <span className="ml-2 text-[10px] lg:text-lg">
                  {comic.views}
                </span>
              </div>
              <div className="flex items-center gap-1 md:gap-5 absolute bottom-0 left-0">
                <Link
                  href={
                    "/read/" +
                    comic.chapters[comic.chapters.length - 1].href.split(
                      "truyen-tranh"
                    )[1]
                  }
                >
                  <div className="rounded-lg bg-primary py-2 px-5 text-[9px] md:text-sm cursor-pointer">
                    Đọc ngay
                  </div>
                </Link>
                <Link
                  href={
                    "/read/" + comic.chapters[0].href.split("truyen-tranh")[1]
                  }
                >
                  <div className="rounded-lg bg-white text-app py-2 px-4 text-[9px] md:text-sm cursor-pointer flex items-center justify-between">
                    <LightningBoltIcon className="w-3 h-3 lg:w-5 lg:h-5 text-primary mr-2" />
                    <span>Chap mới nhất</span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-app text-white p-3 lg:p-20">
        <h1 className="text-2xl">Nội dung :</h1>
        <p className="mt-5 text-sm lg:text-lg">{comic.description}</p>
      </div>
    </div>
  );
};
export default ComicDetailInfo;
