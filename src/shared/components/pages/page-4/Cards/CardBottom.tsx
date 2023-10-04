import { useUIContext } from "@/context/UIContext";
import { ButtonSecondary } from "@/shared/components/ui/ButtonSecondary";
import { ICard, TypeModal } from "@/interfaces";

interface IProps extends ICard {
  className?: string;
}
export const CardBottom = ({
  id = "",
  cardId,
  title,
  widthTitle,
  text,
  img,
  dataNombreBoton,
  className = "",
}: IProps) => {
  const { openModal } = useUIContext();

  const objModal: Record<number, TypeModal> = {
    1: "04-abs",
    2: "04-hac",
    3: "04-vsc",
    4: "04-trc",
  };
  const modalActive: TypeModal = objModal[cardId];

  return (
    <div className={`relative | ${className}`}>
      <div
        className={`bg-toyota-brown/80 | -skew-x-[23.5deg] | text-white | h-[259px] | w-[266px] | rounded-tl-[56px] | rounded-tr-[12px]`}>
        <div className="skew-x-[23.5deg] | pt-[30px]">
          <div className="mx-auto mb-2" style={{ width: widthTitle }}>
            <h3
              className={`card-b-${cardId} | relative | font-designer | text-[15px] | text-center`}
              dangerouslySetInnerHTML={{ __html: title }}
            />
          </div>
          <div className="text-center mb-2">
            <p
              className={`card-b-text-${cardId} | font-text-regular | text-sm | -skew-x-[15.5deg] | pl-6 | pr-4`}>
              {text}
            </p>
          </div>
          <div className="text-center">
            <img
              src={`/images/04/${img}.webp`}
              alt={title}
              className={`card-b-img-${cardId} | inline-block | relative`}
            />
          </div>
        </div>
      </div>
      <ButtonSecondary
        id={id}
        className="absolute | left-1/2 | -top-2 | translate-x-[100%]"
        onClick={() => openModal(modalActive)}
        dataNombreBoton={dataNombreBoton}
      />
    </div>
  );
};
