interface IProps {
  className?: string;
}

export const Box4 = ({ className }: IProps) => {
  return (
    <div
      className={className}
      data-animate="box-5"
      style={{ opacity: "0", transform: "translateX(400px)" }}>
      <p className="font-designer | text-[15px] | leading-4 | w-[102px] | inline-block">
        <span className="block | ml-[6.5px]">SPOILER</span>
        <span className="block  | text-toyota-orange">POSTERIOR</span>
      </p>
    </div>
  );
};
