import { Swiper as Carrousel, SwiperSlide, useSwiper } from "swiper/react";
import { EffectFade, Pagination, Navigation, A11y } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";

interface IColors {
  id: number;
  active: boolean;
  text: string;
  img: string;
  fill: string;
}
interface IProps {
  colorSelected: IColors;
  className?: string;
}

export const Slider: React.FC<IProps> = ({ colorSelected, className = "" }) => {
  return (
    <div className={className}>
      <div className="cont-nav">
        <Carrousel
          slidesPerView={1}
          spaceBetween={30}
          loop={false}
          navigation={true}
          effect={"fade"}
          modules={[EffectFade, Pagination, Navigation, A11y]}
          className="mySwiper">
          {[...new Array(12)].map((item, index) => (
            <SwiperSlide key={index}>
              <div className="my-slider">
                <Image
                  src={`/images/02/${colorSelected.img}-${
                    index + 1
                  }.webp`}
                  width={518}
                  height={389}
                  alt="Car Toyota"
                  className="pointer-events-auto | mx-auto"
                />
              </div>
            </SwiperSlide>
          ))}
        </Carrousel>
      </div>
    </div>
  );
};
