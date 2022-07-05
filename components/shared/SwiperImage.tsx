import useComicContext from "@/context-api/comic.context";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useSwiper } from "swiper/react";
import { WithComicContext } from "../HOC/withComicContext";

interface SwiperImageProps {
  imgSrc: String;
  index?: number;
}

const SwiperImage = ({ imgSrc, index }: SwiperImageProps) => {
  const { triggerImageBanner } = useComicContext();
  return (
    <div
      key={triggerImageBanner + String(new Date().getTime())}
      className="aspect-[3/4] relative z-10 flex animate-scale-image-banner h-[80%] justify-center items-center md:w-[200px] lg:w-[250px]"
    >
      <Image
        unoptimized
        className="inset-0 object-cover object-center rounded-xl"
        priority={index === 0}
        alt="image-preview"
        layout="fill"
        src={String(imgSrc)}
      />
    </div>
  );
};
export default WithComicContext(SwiperImage);
