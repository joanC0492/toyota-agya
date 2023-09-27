import Image from "next/image";

interface IProps {
  onClick: () => void;
  className?: string;
  dataNombreboton?: string;
}
export const ButtonPlay = ({
  onClick,
  className = "",
  dataNombreboton = "",
}: IProps) => {
  return (
    <div className={className}>
      <button
        className="group | w-10 | h-10 | relative | rounded-full | overflow-hidden | inline-flex | items-center | justify-center | transition-all | duration-500 | scale-[0.7] | hover:scale-100"
        onClick={onClick}
        data-nombreboton={dataNombreboton}>
        <div className="gradient-orange | absolute | left-0 | top-0 | w-full | h-full | transition-all | duration-500 | rotate-[153deg] group-hover:rotate-0" />
        <div>
          <Image
            src={"/images/btn-play.svg"}
            width={13}
            height={16}
            alt="Button play"
          />
        </div>
      </button>
    </div>
  );
};
