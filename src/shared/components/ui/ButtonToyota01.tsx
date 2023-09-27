import Image from "next/image";

interface IProps {
  text: string;
  width?: number;
  className?: string;
}

export const ButtonToyota01 = ({
  text,
  width = 173,
  className = "",
}: IProps) => {
  return (
    <div className={className}>
      <button className="relative | transition-all | duration-300 | hover:scale-105">
        <Image
          src="/images/button-toyota-01.svg"
          width={173}
          height={34}
          alt="Card Car 01"
          className=""
        />
        <div className="absolute | left-0 | top-0 | w-full | h-full | flex | items-center | justify-center">
          <span className="font-text-regular-i | text-xs | font-bold | leading-4">{text}</span>
        </div>
      </button>
    </div>
  );
};
