interface IProps {
  text: string;
  handleClick: () => void;
  className?: string;
  dataNombreBoton?: string;
}
export const ButtonPrimary = ({
  text,
  handleClick,
  className = "w-[calc(175.525px-14px)] | h-[34px]",
  dataNombreBoton = "",
}: IProps) => {
  return (
    <div className={className}>
      <button
        className="btn-primary"
        onClick={handleClick}
        data-nombreboton={dataNombreBoton}>
        <div>
          <span className="font-text-regular-i | text-xs | font-bold | leading-4 | relative | -top-[2px] | z-10 | tracking-1">
            {text}
          </span>
        </div>
      </button>
    </div>
  );
};
