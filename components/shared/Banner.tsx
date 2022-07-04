import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import dynamic from "next/dynamic";
import { FC, memo } from "react";
import { ReccommendComicModel } from "@/models/reccommend-comic.model";

const SwiperImage = dynamic(() => import("./SwiperImage"));
const SwiperButton = dynamic(() => import("./SwiperButton"));

interface BannerProps {
  getRecommendedComic: Array<ReccommendComicModel>;
}

const Banner: FC<BannerProps> = ({ getRecommendedComic }) => {
  return (
    <div className="w-full overflow-hidden relative">
      <Swiper
        loop={true}
        modules={[Autoplay]}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
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
                    <div className="line-clamp-3 text-[10px] lg:text-sm">
                      Một Manga thể loại siêu anh hùng với đặc trưng phồng tôm
                      đấm phát chết luôn... và mang đậm tính chất troll của tác
                      giả.Onepunch-man là câu chuyện của 1 chàng thanh niên 23
                      tuổi, đang là một nhân viên văn phòng điển trai nghiêm túc
                      và tất nhiên là ế. Không hiểu vì biến cố gì mà tự nhiên
                      lông tóc trên người của anh trụi lủi, sau đó anh mang
                      trong mình khả năng siêu đặc biệt Đấm phát chết luôn nhằm
                      bảo vệ trái đất và thành phố nơi anh sinh sống khỏi các
                      sinh vật ngoài không gian (nhưng phá hoại cũng không kém).
                    </div>
                    <div className="flex items-center gap-1 md:gap-5 mt-10">
                      <a
                        href=""
                        className="rounded-lg bg-primary py-2 px-5 text-[9px] md:text-sm"
                      >
                        Đọc ngay
                      </a>
                      <a
                        href=""
                        className="rounded-lg bg-white text-app py-2 px-5 text-[9px] md:text-sm"
                      >
                        Chi tiết
                      </a>
                    </div>
                  </div>
                  <div className="flex-1 md:w-[40%] flex justify-center items-center h-full px-5 lg:px-0">
                    <SwiperImage imgSrc={item.imageSrc} index={index} />
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
