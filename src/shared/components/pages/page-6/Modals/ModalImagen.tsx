import Image from "next/image";
import { useUIContext } from "@/context/UIContext";
import css from "@/styles/page-6.module.scss";

interface Iprops {
  className?: string;
}

export const ModalImagen = ({ className = "" }: Iprops) => {
  const { closeModal } = useUIContext();
  return (
    <div
      className={`${className} | card | relative | w-[871px] | h-[544px] | z-10`}>
      <div
        id="modal-imagen"
        className={`${css["ty-modal-two"]} ${css["modal-imagen"]}`}>
        <div className={css["ty-modal-box"]}>
          <div className={css["ty-modal-contenido"]}>
            <div className={css["ty-cerrar-modal"]} onClick={closeModal}>
              <div className={css["btn-closed"]}>
                <svg
                  width={14}
                  height={14}
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M13 7H1M7 13V1"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
            <div className={css["ty-modal-content-flex"]}>
              <div className={css["ty-modal-content-one"]}>
                <div className={css["modal-imagen__cuadro"]}>
                  <Image
                    src="/images/06/cuadro_informativo_full.png"
                    width={775}
                    height={897}
                    alt="Informativo"
                    className={css["modal-imagen__cuadro-img"]}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
