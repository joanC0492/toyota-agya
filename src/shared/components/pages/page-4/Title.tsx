interface IProps {
  className?: string;
  dataAnimate?: string;
  style?: React.CSSProperties;
}
export const Title = ({ className = "", dataAnimate = "", style }: IProps) => {
  return (
    <div className={className} data-animate={dataAnimate} style={style}>
      <h1 className="font-thirdrail | text-5xl | leading-none | inline-flex | flex-col">
        <span className="ml-[7px] | pb-[7px]">La seguridad que buscas</span>
        <span className="bg-toyota-orange | -skew-x-[23deg] | w-[510px] | rounded-tl-[10px] | rounded-tr-[13px] | rounded-bl-[13px] | rounded-br-[10px]">
          <span className="text-[41px] | skew-x-[23deg] | block | pl-[13px] | --pt-[12px] | --pb-[10px] | py-[4.5px]">
            para proteger lo que amas
          </span>
        </span>
      </h1>
    </div>
  );
};
