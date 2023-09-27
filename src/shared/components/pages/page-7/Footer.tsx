import Image from "next/image";

interface IProps {
  className?: string;
}
export const Footer = ({ className = "" }: IProps) => {
  return (
    <div className={className}>
      <Image
        src={"/images/07/marcas.svg"}
        width={505}
        height={45}
        alt="Marcas"
        className="fade-block | animation-delay-750 | mx-auto | mb-3"
      />
      <div className="fade-block | animation-delay-750">
        <div className="font-text-regular | leading-[8px] | mb-[10px]">
          <p>
            La garantía otorgada al TOYOTA AGYA está referida exclusivamente a
            las especificaciones antes mencionadas.
          </p>
          <p>
            Cualquier modificación o alteración efectuada a dichas
            especificaciones no cuenta con la garantía de Toyota del Perú S.A.
          </p>
          <p>
            Toyota del Perú S.A. se reserva el derecho de modificar cualquier
            parte de las especificaciones y equipos sin previo aviso. Fotos
            Referenciales.
          </p>
        </div>
        <div>
          <p>Razón Social: Toyota del Perú S.A.</p>
          <p>RUC: 20100132592</p>
        </div>
      </div>
    </div>
  );
};
