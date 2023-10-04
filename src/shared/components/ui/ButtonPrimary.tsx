interface IProps {
  text: string;
  handleClick: () => void;
  id?: string;
  className?: string;
  dataNombreBoton?: string;
}
export const ButtonPrimary = ({
  text,
  handleClick,
  id = "",
  className = "w-[calc(175.525px-14px)] | h-[34px]",
  dataNombreBoton = "",
}: IProps) => {
  return (
    <div className={className}>
      <button
        id={id}
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
