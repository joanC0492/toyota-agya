interface IProps {
  id?: string;
  className?: string;
  dataNombreBoton?: string;
  onClick: () => void;
}

export const ButtonSecondary = ({
  id = "",
  className = "",
  onClick,
  dataNombreBoton = "",
}: IProps) => {
  return (
    <div className={className}>
      <button
        id={id}
        className="bg-toyota-orange | w-6 | h-6 | rounded-full | flex | items-center | justify-center | border | border-white/20 | border-solid | transition-all | duration-300 | overflow-hidden | hover:scale-[1.25]"
        onClick={onClick}
        data-nombreboton={dataNombreBoton}>
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M13 7H1M7 13V1"
            stroke="white"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
    </div>
  );
};
