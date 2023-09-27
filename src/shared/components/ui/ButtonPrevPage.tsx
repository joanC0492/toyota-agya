import Link from "next/link";

interface IProps {
  url: string;
}
export const ButtonPrevPage = ({ url }: IProps) => {
  return (
    <a
      className="z-40 left-0 btn-change-page-prev"
      href={url}
      data-nombreboton={`boton prev ${
        url === "/" ? "page-1" : url.split("/")[1]
      }`}>
      <div className="w-full h-full flex items-center">
        <div className="ml-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="38"
            viewBox="0 0 21 38"
            fill="none">
            <path
              d="M19 2L3.32589 16.041C1.55117 17.6309 1.55117 20.41 3.3259 21.9998L19 36.0408"
              stroke="#EF872D"
              stroke-width="3.5"
              stroke-linecap="round"
            />
          </svg>
        </div>
      </div>
    </a>
  );
};
