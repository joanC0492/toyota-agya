import { useState } from "react";
import { useUIContext } from "@/context/UIContext";
import { IconModal, Slider } from "@/shared/components/ui";

interface IColors {
  id: number;
  active: boolean;
  text: string;
  img: string;
  fill: string;
}
const colorsData: IColors[] = [
  {
    id: 1,
    active: true,
    text: "ROJO METÁLICO R79",
    img: "car-red",
    fill: `linear-gradient(180deg, rgba(255, 109, 136, 0.80) 0%, rgba(255, 255, 255, 0.00) 52.08%), #BF0212`,
  },
  {
    id: 2,
    active: false,
    text: "NARANJA METÁLICO R80",
    img: "car-orange",
    fill: `linear-gradient(180deg, rgba(255, 255, 255, 0.80) 0%, rgba(237, 124, 27, 0.80) 56.34%), #ED7C1B`,
  },
  {
    id: 3,
    active: false,
    text: "PLATA METÁLICO S28",
    img: "car-silver",
    fill: `linear-gradient(180deg, rgba(255, 255, 255, 0.80) 0%, rgba(255, 255, 255, 0.00) 52.08%), #969797`,
  },
  {
    id: 4,
    active: false,
    text: "NEGRO X13",
    img: "car-black",
    fill: `linear-gradient(180deg, rgba(139, 139, 139, 0.80) 0%, rgba(255, 255, 255, 0.00) 52.08%), #000`,
  },
  {
    id: 5,
    active: false,
    text: "BLANCO W09",
    img: "car-white",
    fill: `linear-gradient(180deg, #FFF 0.01%, #FFF 38.54%, rgba(255, 255, 255, 0.00) 78.65%), #DCDCDC`,
  },
  {
    id: 6,
    active: false,
    text: "GRIS OSCURO METÁLICO 1G3",
    img: "car-dark-gray",
    fill: `linear-gradient(180deg, rgba(255, 255, 255, 0.44) 0%, rgba(23, 19, 16, 0.00) 100%), #191F26`,
  },
];

interface IProps {
  className?: string;
}
export const ModalColores = ({ className }: IProps) => {
  const { closeModal } = useUIContext();
  const [colors, setColors] = useState(colorsData);

  const changeCarColor = (index: number) => {
    setColors((prev) => {
      const newArray: IColors[] = prev.map((item, i) => {
        if (i === index) {
          return {
            ...item,
            active: true,
          };
        }
        return {
          ...item,
          active: false,
        };
      });
      return newArray;
    });
  };

  const colorSelected = colors.find((color) => color.active === true)!;

  return (
    <div
      className={`${className} | card | relative | w-[871px] | h-[544px] | z-10 | bg-[url('/images/02/modal-fondo-colores.webp')]`}>
      <div className="text-white">
        <div className="mt-20 | mb-[52px] | text-center">
          <div
            className={`btn-primary | active-title | h-[46px] | inline-block | border-none | ${
              colorSelected.id === 2 || colorSelected.id === 6
                ? "w-[calc(393px-30px)]"
                : "w-[calc(363px-30px)]"
            }`}>
            <div className="w-full | h-full | flex | items-center | justify-center">
              <span className="font-designer | text-[19px] | leading-4 | relative | -top-[2px] | z-10 | tracking-1">
                {colorSelected.text}
              </span>
            </div>
          </div>

          <Slider colorSelected={colorSelected} />

          <div className="relative">
            <div className="absolute | z-10 | left-[158px] | bottom-[18px]">
              <div className="flex | items-center">
                <p className="font-designer | text-2xl | leading-4 | inline-block">
                  COLORES
                </p>
                <ul className="flex | relative | top-[3px] | gap-x-5 | ml-11">
                  {colors.map((color, index) => (
                    <li key={index}>
                      <button
                        onClick={() => changeCarColor(index)}
                        className={`w-[calc(55.526px-14px)] | h-[34px] | transition-all | duration-300 | -skew-x-[23deg] | rounded-tl-[9px] | rounded-br-[6px] | rounded-tr-[9px] | rounded-bl-[6px] | --hover:opacity-100 | ${
                          color.active ? "scale-125" : "--opacity-60"
                        }`}
                        style={{
                          background: color.fill,
                          filter:
                            "drop-shadow(0px 16px 38px rgba(0, 0, 0, 0.50))",
                        }}
                      />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <IconModal
          className="absolute | right-[56px] | top-[3px] | rotate-45"
          onClick={closeModal}
        />
      </div>
    </div>
  );
};
