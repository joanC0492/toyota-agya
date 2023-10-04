import { useSwiper } from "swiper/react";

export const SwiperButtons = () => {
  const swiper = useSwiper();
  return (
    <>
      <div className="flex w-[67px] h-[67px] top-[45%] left-[50px] absolute justify-center items-center opacity-70 transition-all z-50">
        <button
          className="w-12 | h-12 | bg-black | rounded-[20px] | flex | items-center | justify-center | transition-transform | hover:scale-125"
          onClick={() => swiper.slidePrev()}>
          <svg
            className="rotate-180"
            width="14"
            height="24"
            viewBox="0 0 14 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M1.1453 23.22L12.0811 13.0653C12.5072 12.6696 12.5072 11.9953 12.0811 11.5997L1.1453 1.44497"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"></path>
          </svg>
        </button>
      </div>
      <div className="flex w-[67px] h-[67px] top-[45%] right-[50px] absolute justify-center items-center opacity-70 transition-all z-50">
        <button
          className="w-12 | h-12 | bg-black | rounded-[20px] | flex | items-center | justify-center | transition-transform | hover:scale-125"
          onClick={() => swiper.slideNext()}>
          <svg
            width="14"
            height="24"
            viewBox="0 0 14 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M1.1453 23.22L12.0811 13.0653C12.5072 12.6696 12.5072 11.9953 12.0811 11.5997L1.1453 1.44497"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"></path>
          </svg>
        </button>
      </div>
    </>
  );
};
