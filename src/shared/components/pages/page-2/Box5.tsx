import Image from "next/image";
import { useUIContext } from "@/context/UIContext";
import { ButtonPrimary } from "@/shared/components/ui/ButtonPrimary";
// import { ButtonPrimary } from "../../ui";

interface IProps {
  className?: string;
}
export const Box5 = ({ className }: IProps) => {
  const { openModal } = useUIContext();
  return (
    <div
      className={className}
      data-animate="box-4"
      style={{ opacity: "0", transform: "translateX(400px)" }}>
      <div className="relative">
        <Image
          src="/images/02/box-top-transparent.svg"
          width={502}
          height={232}
          alt="Box Top"
          className=""
        />
        <div className="absolute | left-0 | top-0 | w-full | h-full">
          <div className="ml-[155px] | mt-[26px]">
            <p className="font-designer | text-[14px] | leading-4 | inline-block">
              un auto hecho
              <span className="text-toyota-orange"> a tu medida</span>
            </p>
          </div>
          <div className="ml-[48px] | -mt-[12px]">
            <div className="flex">
              <Image
                src="/images/02/card-car-01.webp"
                width={205}
                height={154}
                alt="Card Car 01"
                className=""
              />
              <Image
                src="/images/02/card-car-02.webp"
                width={205}
                height={154}
                alt="Card Car 02"
                className="-ml-[40px]"
              />
            </div>
          </div>
          <div className="ml-[43px] | -mt-[15px] | flex | gap-x-[14px]">
            <ButtonPrimary
              text="VER DIMENSIONES"
              dataNombreBoton="boton open modal ver dimensiones"
              handleClick={() => openModal("diseno-exterior-dimensiones")}
            />
            <ButtonPrimary
              text="VER MÁS COLORES"
              dataNombreBoton="boton open modal ver mas colores"
              handleClick={() => openModal("diseno-exterior-colores")}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
