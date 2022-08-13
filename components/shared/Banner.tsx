import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

import dynamic from "next/dynamic";
import { FC, memo, useState } from "react";
import { ReccommendComicModel } from "@/models/reccommend-comic.model";
import Link from "next/link";

const SwiperImage = dynamic(() => import("./SwiperImage"));
const SwiperButton = dynamic(() => import("./SwiperButton"));

interface BannerProps {
  getRecommendedComic: Array<ReccommendComicModel>;
}

const Banner: FC<BannerProps> = ({ getRecommendedComic }) => {
  const [triggerImage, setTriggerImage] = useState<boolean>(false);

  return (
    <div className="w-full overflow-hidden relative">
      <Swiper
        loop={true}
        modules={[Autoplay]}
        autoplay={{
          delay: 2000,
          // disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        onSlideChange={() => {
          setTriggerImage((preValue) => !preValue);
        }}
      >
        <div className="hidden lg:flex absolute right-5 bottom-3 flex-col z-50 gap-2">
          <SwiperButton type={"next"} />
          <SwiperButton type={"prev"} />
        </div>

        {getRecommendedComic.map(
          (item: ReccommendComicModel, index: number) => {
            return (
              <SwiperSlide key={index}>
                <figure
                  style={{
                    backgroundImage: "url(" + item.imageSrc + ")",
                  }}
                  className="h-[250px] banner bg-cover bg-center bg-no-repeat blur md:h-[350px] lg:h-[450px]"
                ></figure>
                <div className=" absolute flex left-0 top-0 w-full h-full">
                  <div className="w-[250px] md:w-[60%] pt-[10px] lg:pt-[50px] pl-[10px] lg:pl-[80px] flex flex-col  gap-1 lg:gap-5">
                    <div className="text-sm lg:text-xl">
                      {item.chapIndexText}
                    </div>
                    <div className="text-md lg:text-2xl line-clamp-2">
                      {item.title}
                    </div>
                    <div className="line-clamp-4 lg:line-clamp-none text-[10px] lg:text-sm">
                      {`Manga (tiếng Nhật: Kanji: 漫画, Hiragana: まんが,
                      Katakana: マンガ, Hán-Việt: Mạn họa) là một cụm từ trong
                      tiếng Nhật để chỉ các loại truyện tranh và tranh biếm họa.
                      Manga được coi như một danh từ để gọi chung cho truyện
                      tranh Nhật Bản và cũng là cách để phân biệt với truyện
                      tranh của các quốc gia khác như: Manhua (Trung Quốc),
                      Manhwa (Hàn Quốc), Comics (các nước phương Tây)... Tại
                      Nhật Bản, Manga được coi là môn nghệ thuật đặc trưng, là
                      "quốc hồn quốc túy" của người dân xứ sở mặt trời mọc.`}
                    </div>
                    <div className="flex items-center mt-10">
                      <Link href={"/comic-detail/" + item.slug}>
                        <a className="rounded-lg bg-primary py-2 px-5 text-[9px] md:text-sm cursor-pointer mr-2">
                          Đọc ngay
                        </a>
                      </Link>
                      <Link href={"/comic-detail/" + item.slug}>
                        <a className="rounded-lg bg-white text-app py-2 px-5 text-[9px] md:text-sm cursor-pointer">
                          Chi tiết
                        </a>
                      </Link>
                    </div>
                  </div>
                  <div className="flex-1 md:w-[40%] flex justify-center items-center h-full px-5 lg:px-0">
                    <SwiperImage
                      imgSrc={item.imageSrc}
                      index={index}
                      key={String(triggerImage)}
                    />
                  </div>
                </div>
              </SwiperSlide>
            );
          }
        )}
      </Swiper>
    </div>
  );
};

export default memo(Banner);
