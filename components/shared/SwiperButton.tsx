import { useSwiper } from "swiper/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline";
import { FC } from "react";

interface SwiperButtonProps {
  type: "next" | "prev";
  class?: string;
}
const SwiperButton: FC<SwiperButtonProps> = ({ type }) => {
  const swiper = useSwiper();
  const handleNextSlide = async (type: "next" | "prev") => {
    if (type === "next") swiper.slideNext();
    else swiper.slidePrev();
  };
  return (
    <button
      onClick={() => handleNextSlide(type)}
      className="rounded-lg bg-secondary p-3"
    >
      {type === "next" ? (
        <ChevronRightIcon className="h6 w-6 text-white" />
      ) : (
        <ChevronLeftIcon className="h6 w-6 text-white" />
      )}
    </button>
  );
};
export default SwiperButton;
