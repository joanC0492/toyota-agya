import { useState } from "react";
import Image from "next/image";
import { useUIContext } from "@/context/UIContext";
import { IconModal } from "@/shared/components/ui";

interface IAro {
  id: number;
  active: boolean;
  img: string;
}
const arosData: IAro[] = [
  {
    id: 1,
    active: true,
    img: "modal-aro-1",
  },
  {
    id: 2,
    active: false,
    img: "modal-aro-2",
  },
];

interface IProps {
  className?: string;
}

export const ModalAleacion = ({ className }: IProps) => {
  const { closeModal } = useUIContext();
  const [aros, setAros] = useState(arosData);

  const changeAroImage = (index: number) => {
    setAros((prev) => {
      const newArray: IAro[] = prev.map((item, i) => {
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

  const aroSelected = aros.find((aro) => aro.active === true)!;

  return (
    <div
      className={`${className} | card | relative | w-[869px] | h-[544px] | z-10`}>
      <div className="text-white">
        <div className="relative | w-[869px] | h-[544px]">
          <Image
            src={`/images/02/modal-aro-1.webp`}
            width={869}
            height={544}
            alt={"Aro Toyota"}
            className={`transition-all | duration-300 | absolute | left-0 | top-0 | ${
              aroSelected.id === 1 && aroSelected.active
                ? "z-10 opacity-100"
                : "-z-50 | opacity-0"
            }`}
          />
          <Image
            src={`/images/02/modal-aro-2.webp`}
            width={869}
            height={544}
            alt={"Aro Toyota"}
            className={`transition-all | duration-300 | absolute | left-0 | top-0 | ${
              aroSelected.id === 2 && aroSelected.active
                ? "z-10 opacity-100"
                : "-z-50 | opacity-0"
            }`}
          />

          <div className="absolute | z-20 | left-0 | bottom-[55px] | w-full">
            <div className="flex | items-center | justify-center | gap-x-[85px]">
              <button
                className={`font-designer | text-[31px] | leading-4 | transition-all | duration-300 | hover:opacity-100 | ${
                  aroSelected.id === 1 && aroSelected.active
                    ? "opacity-100"
                    : "opacity-50"
                }`}
                onClick={() => changeAroImage(0)}>
                VERSIÓN{" "}
                <span className="text-toyota-orange">
                  1.0<span className="ml-1">l</span>
                </span>
              </button>
              <button
                className={`font-designer | text-[31px] | leading-4 | transition-all | duration-300 | hover:opacity-100 | ${
                  aroSelected.id === 2 && aroSelected.active
                    ? "opacity-100"
                    : "opacity-50"
                }`}
                onClick={() => changeAroImage(1)}>
                VERSIÓN{" "}
                <span className="text-toyota-orange">
                  1.2<span className="ml-1">l</span>
                </span>
              </button>
            </div>
          </div>
        </div>
        <IconModal
          className="absolute | z-10 | right-[56px] | top-[3px] | rotate-45"
          onClick={closeModal}
        />
      </div>
    </div>
  );
};
