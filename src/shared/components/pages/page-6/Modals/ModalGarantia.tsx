import Image from "next/image";
import { useUIContext } from "@/context/UIContext";
import css from "@/styles/page-6.module.scss";

interface Iprops {
  className?: string;
}

export const ModalGarantia = ({ className = "" }: Iprops) => {
  const { closeModal } = useUIContext();  
  return (
    <div className={`${className} | w-full | h-full | flex | items-center | justify-center`}>
      <div id="modal-garantia" className={css["ty-modal-two"]}>
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
                  src="/images/06/garantia.svg"
                  width={24}
                  height={35}
                  alt="icono garantia"
                  className="inline-block"
                />
              </div>
              <div className={css["ty-modal-title"]}>
                <p>GARANTÍA QUE</p>
                <p>INSPIRA CONFIANZA</p>
              </div>
              <div className={css["ty-modal-text"]}>
                <p>Mayor confianza en TOYOTA por la</p>
                <p>destacada garantía en el mercado: 5 años</p>
                <p>
                  de garantía o 150,000 km<span>(1)</span>.
                </p>
              </div>
              <div className={css["ty-moda-text-small"]}>
                <p>
                  <span>(1)</span> Lo que ocurra primero, ver términos y
                </p>
                <p>condiciones de la garantía de la marca.</p>
              </div>
              <div className={css["btn-modal-redirect-parent"]}>
                <a
                  className={css["btn-modal-redirect"]}
                  href="https://www.toyotaperu.com.pe/condiciones-vigencia-garantia"
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
