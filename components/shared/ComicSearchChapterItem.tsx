import Image from "next/image";
import Link from "next/link";
import { ClockIcon, EyeIcon, HeartIcon } from "@heroicons/react/outline";
import { SearchComicModel } from "@/models/search-comic.model";
import { FC } from "react";
import { useRouter } from "next/router";

interface ComicSearchChapterItemProps {
  chapter: SearchComicModel;
  isPb: boolean;
  handleClose: () => void;
}

const ComicSearchChapterItem: FC<ComicSearchChapterItemProps> = ({
  chapter,
  isPb,
  handleClose,
}) => {
  const router = useRouter();

  const hanleDirect = () => {
    handleClose();
    router.push("/comic-detail/" + chapter.slug);
  };

  return (
    <div
      className={`w-full p-3 bg-secondary rounded-lg flex flex-row items-center ${
        isPb ? "mb-5" : ""
      }`}
    >
      <div className="aspect-[3/4] relative z-10 flex animate-scale-image-banner h-full justify-center items-center w-[100px]">
        <Image
          unoptimized
          className="inset-0 object-cover object-center rounded-xl"
          priority={true}
          alt="image-preview"
          layout="fill"
          src={String(chapter.imgSrc)}
        />
      </div>
      <div className="flex-1 ml-2 relative space-y-[5px] flex-col flex justify-between">
        <p className="mx-4 mb-2 text-sm flex flex-nowrap items-center line-clamp-1 hover:text-primary transition-all ease-in-out cursor-pointer">
          {chapter.title}
        </p>
        <p className="ml-3 text-sm flex items-center">
          <ClockIcon className="h-4 w-4" />{" "}
          <span className="ml-2 text-[90%]">{chapter.updatedAtText}</span>
        </p>
        <p className="ml-3 text-sm flex items-center">
          <EyeIcon className="h-4 w-4" />{" "}
          <span className="ml-2 text-[90%]">{chapter.views}</span>
        </p>
        <p className="ml-3 text-sm flex items-center">
          <HeartIcon className="h-4 w-4" />{" "}
          <span className="ml-2 text-[90%]">{chapter.likes}</span>
        </p>

        <div className=" bottom-1 sm:bottom-2 left-0 flex h-fit w-[130px] items-center px-2">
          <button
            onClick={hanleDirect}
            className="w-full text-[12px] items-center justify-center space-x-4 rounded-xl bg-primary py-1 px-3 transition-all hover:scale-[95%]"
          >
            <a>Chi tiết</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ComicSearchChapterItem;
