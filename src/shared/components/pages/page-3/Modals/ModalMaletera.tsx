import { useUIContext } from "@/context/UIContext";
import { IconModal } from "@/shared/components/ui";
import { SliderImages } from "@/shared/components/pages/page-3";
import { IImagesMaletera } from "@/interfaces";

const imagesData: IImagesMaletera[] = [
  {
    id: 1,
    active: true,
    url: "/images/03/modal/modal-1.webp",
  },
  {
    id: 2,
    active: false,
    url: "/images/03/modal/modal-2.webp",
  },
  {
    id: 3,
    active: false,
    url: "/images/03/modal/modal-3.webp",
  },
];

interface IProps {
  className?: string;
}
export const ModalMaletera = ({ className }: IProps) => {
  const { closeModal } = useUIContext();

  return (
    <div
      className={`${className} | card | relative | w-[871px] | h-[544px] | z-10`}>
      <SliderImages images={imagesData} />
      <IconModal
        className="absolute | right-[56px] | top-[3px] | z-10 | rotate-45 | scale-125"
        onClick={closeModal}
      />
    </div>
  );
};
