import React from "react";
import Image from "next/image";
import { useUIContext } from "@/context/UIContext";
import { IconModal } from "@/shared/components/ui";

interface IProps {
  className?: string;
}
export const ModalDimensiones = ({ className }: IProps) => {
  const { closeModal } = useUIContext();
  return (
    <div
      className={`${className} | relative | w-[calc(871px-50px)] | -skew-x-[5.5deg] | h-[544px] | rounded-tl-[36px] | rounded-br-[36px] | rounded-tr-[16px] | rounded-bl-[16px]`}
      style={{
        background:
          "linear-gradient(112deg, #703400 6.1%, rgba(89, 41, 0, 0.65) 93.55%, rgba(89, 41, 0, 0.80) 93.55%)",
      }}>
      <div className="skew-x-[5.5deg] | text-white">
        <div className="mt-20 | mb-[52px]">
          <p className="font-designer | text-2xl | text-center">
            <span className="text-toyota-orange">DIMENSIONES</span>
          </p>
        </div>
        <div className="mb-[46px]">
          <Image
            src="/images/02/car-line-white.webp"
            width={731}
            height={233}
            alt="Modal Card 01"
            className="mx-auto"
          />
        </div>
        <div className="">
          <div className="flex | flex-wrap | gap-x-[55px] | mx-auto | text-base | leading-4 | font-text-regular | w-[445px]">
            <div>
              <p className="mb-[15px] | ml-[22px]">
                <span className="text-toyota-orange">A: Alto:</span> 1,520 mm
              </p>
              <p className="mb-[15px]">
                <span className="text-toyota-orange">B: Ancho:</span> 1,665 mm
              </p>
            </div>
            <div>
              <p className="mb-[15px] ml-[22px]">
                <span className="text-toyota-orange">C: Largo:</span> 3,760 mm
              </p>
              <p className="mb-[15px]">
                <span className="text-toyota-orange">
                  D: Distancia libre al suelo:
                </span>{" "}
                165 mm
              </p>
            </div>
          </div>
        </div>
        <IconModal
          className="absolute | right-[26px] | -top-[78px] | rotate-45"
          onClick={closeModal}
        />
      </div>
    </div>
  );
};
