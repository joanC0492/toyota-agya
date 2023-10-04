import Image from "next/image";
import { useUIContext } from "@/context/UIContext";
import css from "@/styles/page-6.module.scss";

interface Iprops {
  className?: string;
}

export const ModalPago = ({ className = "" }: Iprops) => {
  const { closeModal } = useUIContext();
  return (
    <div
      className={`${className} | w-full | h-full | flex | items-center | justify-center`}>
      <div id="modal-pago" className={css["ty-modal-two"]}>
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
                  src="/images/06/pago.svg"
                  width={38}
                  height={40}
                  alt="icono pago"
                  className="inline-block"
                />
              </div>
              <div className={css["ty-modal-title"]}>
                <p>RECIBIMOS TU AUTO</p>
                <p>EN PARTE DE PAGO</p>
              </div>
              <div className={css["ty-modal-text"]}>
                <p>Programa que permite renovar tu vehículo por un</p>
                <p>TOYOTA completamente nuevo, y de una manera ágil,</p>
                <p>
                  fácil y segura, con la confianza de realizar la operación en
                </p>
                <p>
                  la red de concesionarios TOYOTA.<span>(2)</span>
                </p>
              </div>
              <div className={css["ty-moda-text-small"]}>
                <p>
                  <span>(2)</span> Sujeto a las condiciones de tu vehículo
                  actual previa
                </p>
                <p>evaluación del concesionario.</p>
              </div>
              <div className={css["btn-modal-redirect-parent"]}>
                <a
                  className={css["btn-modal-redirect"]}
                  href="https://www.toyotaperu.com.pe/en-parte-de-pago"
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
