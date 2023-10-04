import { Swiper as Carrousel, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation, A11y } from "swiper/modules";
import Image from "next/image";
import { SwiperButtons } from "./SwiperButtons";
import { IImagesMaletera } from "@/interfaces";

// // Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface IProps {
  images: IImagesMaletera[];
  className?: string;
}

export const SliderImages = ({ images, className = "" }: IProps) => {
  return (
    <div className={className}>
      <Carrousel
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        navigation={true}
        effect={"fade"}
        modules={[EffectFade, Navigation, A11y]}
        className="mySwiper [&_.swiper-button-prev]:hidden [&_.swiper-button-next]:hidden">
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <Image
              // src={`/images/03/modal/${image.url}`}
              src={image.url}
              width={869}
              height={544}
              alt="Car Toyota"
              className="mx-auto"
            />
          </SwiperSlide>
        ))}
        <SwiperButtons />
      </Carrousel>
    </div>
  );
};
