import Image from "next/image";
import { useUIContext } from "@/context/UIContext";
import css from "@/styles/page-6.module.scss";

interface Iprops {
  className?: string;
}

export const ModalServicio = ({ className = "" }: Iprops) => {
  const { closeModal } = useUIContext();
  return (
    <div
      className={`${className} | w-full | h-full | flex | items-center | justify-center`}>
      <div
        id="modal-servicio"
        className={`${css["ty-modal-two"]} ${css["modal-servicio"]} h-full`}>
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
                <div className={css["ty-modal-title-parent"]}>
                  <div className={css["ty-modal-content-img"]}>
                    <Image
                      src="/images/06/auto.svg"
                      width={33}
                      height={34}
                      alt="auto"
                    />
                  </div>
                  <div className={css["ty-modal-title"]}>
                    <p>SERVICIO POSVENTA</p>
                    <p>DE CALIDAD</p>
                  </div>
                </div>
                <div className={css["ty-modal-desc-one"]}>
                  <h2>
                    Nuestras operaciones están enfocadas en ofrecerte la mejor
                    <br />
                    experiencia de servicio y con la excelente calidad que solo
                    <br />
                    TOYOTA te puede brindar.
                  </h2>
                  <div className={css["ty-modal-text"]}>
                    <h3>Mano de Obra Calificada:</h3>
                    <p>
                      Nuestro personal participa activamente en los programas de
                    </p>
                    <p>
                      capacitación y certificación exclusivos de TOYOTA, con el
                      fin de
                    </p>
                    <p>
                      brindarte una atención más eficiente y adecuada, tanto
                      para ti
                    </p>
                    <p>como para tu TOYOTA.</p>
                  </div>
                  <div
                    className={`${css["btn-modal-redirect-parent"]} ${css["column-1"]}`}>
                    <a
                      className={css["btn-modal-redirect"]}
                      href="https://www.toyotaperu.com.pe/seguro-toyota"
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
                  <div className={css["ty-modal-text"]}>
                    <h3>Estándares de Calidad:</h3>
                    <p>
                      En nuestros concesionarios contamos con el exigente
                      estándar
                    </p>
                    <p>
                      de calidad TOYOTA (TSM Kodawari), asegurando la reparación
                    </p>
                    <p>ideal de tu vehículo.</p>
                    <h3 className={css["last"]}>Red de Concesionarios:</h3>
                    <p>
                      Estaremos prestos a atenderte en cualquiera de los
                      concesionarios
                      <br />
                      autorizados de nuestra amplia red a nivel nacional.
                    </p>
                  </div>
                </div>
              </div>
              <div className={css["ty-modal-content-two"]}>
                <div className={css["ty-modal-text"]}>
                  <h2>Disponibilidad de Repuestos:</h2>
                  <p>
                    Te aseguramos una alta disponibilidad de repuestos. Por lo
                    <br />
                    tanto, los mantenimientos y reparaciones en tu vehículo se
                    <br />
                    realizarán con repuestos legítimos.
                  </p>
                  <h2>Herramientas y Manuales Especializados:</h2>
                  <p>
                    Contamos con herramientas especiales y manuales
                    <br />
                    exclusivamente diseñados para cada vehículo.
                  </p>
                  <h2>
                    Productos Exclusivos: <span>(3)</span>
                  </h2>
                  <p>
                    Te brindamos productos exclusivamente diseñados en base
                    <br />a tus necesidades
                  </p>
                  <ul className={css["list"]}>
                    <li className={css["list-item"]}>
                      <div className={css["column-2-title"]}>
                        <strong>Pre-pagado (Toyota Value),</strong>
                        <div
                          className={`${css["btn-modal-redirect-parent"]} ${css["column-2"]}`}>
                          <a
                            className={css["btn-modal-redirect"]}
                            href="https://www.toyotaperu.com.pe/toyota-value"
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
                      <div>
                        programa que te permite
                        <br />
                        ahorrar en tus
                        <br />
                        mantenimientos.
                      </div>
                    </li>
                    <li className={css["list-item"]}>
                      <strong>Taller Móvil,</strong> acercamos el taller al
                      lugar donde te
                      <br />
                      encuentres.
                    </li>
                    <li className={css["list-item"]}>
                      <strong>Mantenimiento Expreso,</strong> te ofrecemos una
                      opción
                      <br />
                      de servicio más rápido, con la misma calidad y precio
                      <br />
                      de un servicio convencional.
                    </li>
                    <li className={css["list-item"]}>
                      <strong>QuickPaint,</strong> restauramos los daños ligeros
                      de pintura
                      <br />
                      en el vehículo mientras haces tu mantenimiento.
                    </li>
                  </ul>
                </div>
                <div className={css["ty-modal-text"]}>
                  <p>
                    <span>(3)</span> Disponibilidad y características de estos
                    productos varía
                    <br />
                    según el concesionario.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
