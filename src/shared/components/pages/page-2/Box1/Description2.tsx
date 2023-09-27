interface IProps {
  className?: string;
}

export const Description2 = ({ className = "" }: IProps) => {
  return (
    <div
      className={className}
      data-animate="box-3"
      style={{ opacity: "0", transform: "translateX(-100px)" }}>
      <p className="font-designer | text-[15px] | leading-4 | inline-block">
        <span className="block | ml-[6.5px]">ESPEJOS RETROVISORES</span>
        <span className="block  | text-toyota-orange">
          CON LUCES DIRECCIONALES*
        </span>
      </p>
    </div>
  );
};
