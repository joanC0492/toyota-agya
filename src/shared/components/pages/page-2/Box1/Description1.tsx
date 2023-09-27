interface IProps {
  className?: string;
}

export const Description1 = ({ className = "" }: IProps) => {
  return (
    <div
      className="mt-[8px]"
      data-animate="box-2"
      style={{ opacity: "0", transform: "translateX(-100px)" }}>
      <div className="skew">
        <p className="text-sm | py-2 | leading-4 | font-text-regular | w-[459px] | ml-[11px]">
          Toma el control de tu nuevo Toyota Agya y siente cómo se adapta
          perfectamente a tu estilo de vida. Cada detalle ha sido pensado para
          hacer que tu nuevo auto sea una extensión de tu personalidad, porque
          sabemos que no será solo un medio de transporte, sino una expresión de
          quién eres.
        </p>
      </div>
    </div>
  );
};
