import Image from "next/image";
import { useUIContext } from "@/context/UIContext";
import css from "@/styles/page-6.module.scss";

interface Iprops {
  className?: string;
}

export const ModalExcelente = ({ className = "" }: Iprops) => {
  const { closeModal } = useUIContext();
  return (
    <div
      className={`${className} | w-full | h-full | flex | items-center | justify-center`}>
      <div id="modal-excelente" className={css["ty-modal-two"]}>
        <div className={css["ty-modal-box"]}>
          <div className={css["ty-modal-contenido"]}>
            <div className={css["ty-cerrar-modal"]}>
              <div className={css["btn-closed"]} onClick={closeModal}>
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
            <div className={css["ty-modal-content"]}>
              <div className={css["ty-modal-content-img"]}>
                <Image
                  src="/images/06/excelente.svg"
                  width={32}
                  height={33}
                  alt="icono excelente"
                  className="inline-block"
                />
              </div>
              <div className={css["ty-modal-title"]}>
                <p>EXCELENTE VALOR</p>
                <p>DE REVENTA</p>
              </div>
              <div className={css["ty-modal-text"]}>
                <p>TOYOTA, marca líder del mercado peruano, posee</p>
                <p>también una gran demanda de vehículos usados,</p>
                <p>lo que favorece un mejor valor de reventa. Esto</p>
                <p>podría permitir que la cuota inicial para un nuevo</p>
                <p>TOYOTA pueda ser cubierta.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
