import Image from "next/image";
import { useUIContext } from "@/context/UIContext";
import { IconModal } from "@/shared/components/ui/IconModal";
// import { IconModal } from "@/shared/components/ui"; -- sale error

interface IProps {
  className?: string;
}
export const Box3 = ({ className = "" }: IProps) => {
  const { openModal } = useUIContext();
  return (
    <div
      className={className}
      data-animate="box-6"
      style={{ opacity: "0", transform: "translateY(100px)" }}>
      <div className="relative">
        <Image
          src="/images/02/box-tranparent.webp"
          width={544}
          height={158}
          alt="Box Transparent"
          className="relative z-10"
        />
        <div className="absolute | left-0 | right-0 | top-8 | z-20">
          <div className="relative | ml-[232px] | mb-[16px]">
            <IconModal
              id="boton_ver_aros_de_alineacion_de_14"
              className="absolute | bottom-[calc(100%-10px)] | -left-[40px]"
              dataNombreBoton="boton open modal aros de aleación de 14"
              onClick={() => openModal("diseno-exterior-aleacion")}
            />
            <p className="font-designer | text-lg | leading-5">
              <span className="block | ml-2">AROS DE</span>{" "}
              <span className="block | text-toyota-orange">
                ALEACIÓN DE 14” *
              </span>
            </p>
          </div>
          <div className="skew ml-[220px]">
            <p className="w-[230px] | font-text-regular | text-sm | leading-4">
              Creados para añadir maniobrabilidad y un toque de estilo único.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
