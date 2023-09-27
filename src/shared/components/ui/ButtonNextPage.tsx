import Link from "next/link";

interface IProps {
  url: string;
}
export const ButtonNextPage = ({ url }: IProps) => {
  return (
    <a
      className="z-40 right-0 btn-change-page-next"
      href={url}
      data-nombreboton={`boton prev ${
        url === "/" ? "page-1" : url.split("/")[1]
      }`}>
      <div className="w-full h-full flex items-center justify-end">
        <div className="mr-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="38"
            viewBox="0 0 21 38"
            fill="none">
            <path
              d="M2 36.0408L17.6741 21.9997C19.4488 20.4099 19.4488 17.6308 17.6741 16.041L2 1.99996"
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
