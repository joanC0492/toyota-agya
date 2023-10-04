import Image from "next/image";
import { useUIContext } from "@/context/UIContext";
import css from "@/styles/page-6.module.scss";

interface Iprops {
  className?: string;
}

export const ModalPrograma = ({ className = "" }: Iprops) => {
  const { closeModal } = useUIContext();
  return (
    <div
      className={`${className} | w-full | h-full | flex | items-center | justify-center`}>
      <div
        id="modal-programa"
        className={`${css["ty-modal-two"]} ${css["modal-programa"]}`}>
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
            <div className={css["ty-modal-content"]}>
              <div className={css["ty-modal-content-img"]}>
                <Image
                  src="/images/06/toyota-life.svg"
                  width={50}
                  height={24}
                  alt="icono toyota life"
                  className="inline-block"
                />
              </div>
              <div className={css["ty-modal-title"]}>
                <p>PROGRAMA DE</p>
                <p>FINANCIAMIENTO</p>
                <p>EXCLUSIVO CON MAF</p>
              </div>
              <div className={css["ty-modal-text"]}>
                <p>El programa permite diseñar las condiciones de</p>
                <p>financiamiento a medida de cada cliente, otorgando la</p>
                <p>
                  <strong>accesibilidad</strong> con una cuota inicial a
                  elección desde el
                </p>
                <p>
                  10% al 40%, <strong>flexibilidad</strong> con plazos entre 24
                  hasta 36
                </p>
                <p>
                  meses y <strong>confianza</strong> para elegir una cuota final
                  desde el
                </p>
                <p>10% hasta el 50%, estas variables permiten a cada</p>
                <p>
                  cliente alcanzar la cuota irresistible y única a la medida
                </p>
                <p>de sus necesidades específicas.</p>
              </div>
              <div className={css["btn-modal-redirect-parent"]}>
                <a
                  className={css["btn-modal-redirect"]}
                  href="https://www.toyotaperu.com.pe/calculadora-toyota-life"
                  target="_blank">
                  <div className={css["btn-plus-content"]}>
                    <div className={css["btn-icon-plus"]}>
                      <div className={css["icon-plus"]}>
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
                    <p>Ver más</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
