import { FilterComicModel } from "@/models/filter-comic.model";
import {
  ClipboardListIcon,
  ClockIcon,
  EyeIcon,
  HeartIcon,
} from "@heroicons/react/outline";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

interface FilterComicItemProps {
  comic: FilterComicModel;
}
const FilterComicItem: React.FC<FilterComicItemProps> = ({ comic }) => {
  const { asPath } = useRouter();

  return (
    <div
      key={String(asPath)}
      className="w-full rounded-lg flex bg-dark mb-1 lg:mb-5 p-5 animate-scale"
    >
      <figure className="relative h-[200px] min-h-[100px] w-[150px] min-w-[120px] overflow-hidden rounded-lg">
        <Image
          priority={true}
          unoptimized
          className="object-cover object-center rounded-lg"
          alt="image-preview"
          layout="fill"
          src={String(comic.imageSrc)}
        />
      </figure>
      <div className="flex-1 flex flex-col relative space-y-[8px]">
        <p className="mx-4 mb-2 text-sm lg:text-xl flex flex-nowrap items-center line-clamp-1">
          {comic.title}
        </p>
        <p className="ml-3  text-sm flex flex-nowrap items-center">
          <ClipboardListIcon className="h-3 w-3 lg:h-5 lg:w-5" />
          <span className="ml-2 text-[90%] line-clamp-1">
            {comic.chapIndexText}
          </span>
        </p>
        <p className="ml-3  text-sm flex items-center">
          <ClockIcon className="h-3 w-3 lg:h-5 lg:w-5" />{" "}
          <span className="ml-2 text-[90%]">{comic.chapUpdatedAtText}</span>
        </p>
        <p className="ml-3  text-sm flex items-center">
          <EyeIcon className="h-3 w-3 lg:h-5 lg:w-5" />{" "}
          <span className="ml-2 text-[90%]">{comic.views}</span>
        </p>
        <p className="ml-3  text-sm flex items-center">
          <HeartIcon className="h-3 w-3 lg:h-5 lg:w-5" />{" "}
          <span className="ml-2 text-[90%]">{comic.likes}</span>
        </p>
        <div className="absolute bottom-0 left-0 flex h-fit w-[80%] md:w-[50%] items-center px-3">
          <Link href={"/comic-detail/" + comic.slug}>
            <button className="w-full  text-sm items-center justify-center space-x-4 rounded-lg bg-primary py-1 px-3 transition-all hover:scale-[105%]">
              <a>Chi tiết</a>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default FilterComicItem;
