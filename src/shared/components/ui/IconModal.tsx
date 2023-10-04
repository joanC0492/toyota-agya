interface IProps {
  onClick?: () => void;
  id?: string;
  className?: string;
  dataNombreBoton?: string;
}
export const IconModal = ({
  onClick = () => {},
  id = "",
  className = "",
  dataNombreBoton = "",
}: IProps) => {
  return (
    <div className={className}>
      <button
        id={id}
        onClick={onClick}
        className="relative"
        data-nombreboton={dataNombreBoton}>
        <div className="absolute | left-0 | z-30 | transition-all | duration-300 | opacity-50 | scale-[0.75] | hover:scale-100 | hover:opacity-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none">
            <circle cx="16" cy="16" r="16" fill="black" />
            <circle
              cx="16"
              cy="16"
              r="15.5"
              stroke="white"
              stroke-opacity="0.2"
            />
            <path
              d="M22 16H10M16 22V10"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </button>
    </div>
  );
};
