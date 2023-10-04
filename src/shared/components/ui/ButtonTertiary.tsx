import Image from "next/image";

interface IProps {
  id?: string;
  className?: string;
  dataNombreboton?: string;
  url: string;
  text: string;
}
export const ButtonTertiary = ({
  url,
  id = "",
  className = "",
  dataNombreboton = "",
  text = "",
}: IProps) => {
  return (
    <a
      id={id}
      href={url}
      target="_blank"
      rel="noopener"
      className="inline-block | relative | z-[60]"
      data-nombreboton={dataNombreboton}>
      <div className={`${className}`}>
        <div className={`btn-tertiary`}>
          <div className="btn-tertiary__bg btn-tertiary__bg--primary"></div>
          <div className="btn-tertiary__bg btn-tertiary__bg--secondary"></div>
          <div className="btn-tertiary__container">
            <div className="btn-tertiary__content">
              <div className="btn-tertiary__figure">
                <Image
                  src={"/images/btn-primary.svg"}
                  width={32}
                  height={32}
                  alt="Icono Primario"
                  className="btn-tertiary__img"
                />
              </div>
              <span className="btn-tertiary__txt">{text}</span>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
};
