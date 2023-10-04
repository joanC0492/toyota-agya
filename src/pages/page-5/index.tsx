import { useEffect } from "react";
import { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import { LayoutSecondary } from "@/shared/components/layouts";
import initAnimate from "@/shared/hooks/animacion-page-5";
import css from "@/styles/page-5.module.scss";
import { useUIContext } from "@/context/UIContext";

const Page05: NextPage = () => {
  const { openModal } = useUIContext();

  useEffect(() => {
    initAnimate();
  }, []);

  return (
    <LayoutSecondary>
      <div className={`${css["container-page"]} fade-block`}>
        <a
          id="boton_regresar_pagina_4"
          className="z-40 left-0 btn-change-page-prev"
          href="/page-4/">
          <div className="w-full h-full flex items-center">
            <div className="ml-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={21}
                height={38}
                viewBox="0 0 21 38"
                fill="none">
                <path
                  d="M19 2L3.32589 16.041C1.55117 17.6309 1.55117 20.41 3.3259 21.9998L19 36.0408"
                  stroke="#EF872D"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>
        </a>
        <div id="page-5" className={css["page-5"]}>
          <div className={css["logo-agya"]}>
            <svg
              width={11}
              height={97}
              viewBox="0 0 11 97"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_16_3113)">
                <path
                  d="M9.79 70.3303L3.8 67.1003C3.35 66.9003 2.97 66.5603 2.72 66.1403C2.37 65.5703 1.84 64.6403 1.25 63.4503C0.58 62.1103 0.29 60.9603 0.18 60.4203C0.14 60.2303 0.12 60.0303 0.12 59.8403V48.2003C0.12 48.0603 0.16 47.9303 0.22 47.8103L1.47 45.6203C1.53 45.5103 1.71 45.5503 1.71 45.6803V58.3403C1.71 58.6603 1.78 58.9703 1.92 59.2503C2.12 59.6503 2.43 60.2403 2.76 60.6903C3.07 61.1203 3.38 61.5003 3.62 61.7703C3.9 62.0903 4.25 62.3403 4.65 62.4903L7.39 63.7003C7.55 63.7603 7.87 63.6403 7.87 63.4703V53.4503C7.87 53.3403 7.8 53.2303 7.7 53.1903L5.85 52.1903C5.72 52.1303 5.58 52.2203 5.58 52.3603V58.9703C5.58 59.0303 5.51 59.0703 5.46 59.0403C5.35 58.9703 5.19 58.8303 4.78 58.4303C4.57 58.2203 4.4 57.9603 4.3 57.7703C4.21 57.6203 4.17 57.4503 4.17 57.2703V45.5703C4.17 45.4603 4.28 45.3803 4.39 45.4103L9.83 47.4903C9.96 47.5303 10.05 47.6503 10.05 47.7903V70.1503C10.05 70.2803 9.92 70.3603 9.8 70.3103L9.79 70.3303ZM9.85 73.6703L0.35 69.1303C0.25 69.0803 0.13 69.1603 0.13 69.2703V81.5803C0.13 82.4503 0.26 83.3103 0.51 84.1403C0.81 85.1503 1.26 86.5703 1.71 87.7203C2.28 89.1903 2.74 90.2303 3.08 90.9403C3.49 91.7903 4.11 92.5203 4.89 93.0603L9.77 96.4203C9.88 96.5003 10.04 96.4203 10.04 96.2803V91.3103C10.04 91.1903 9.98 91.0803 9.87 91.0303C9.34 90.7403 7.69 89.8403 7.11 89.4703C6.73 89.2303 5.94 88.6403 5.36 88.2103C4.89 87.8603 4.5 87.4203 4.21 86.9203C3.92 86.4203 3.51 85.7003 3.2 85.0403C2.78 84.1703 2.48 83.4403 2.29 82.9603C2.14 82.5703 2.05 82.1503 2.04 81.7303L1.86 76.2203C1.86 75.9403 2.15 75.7503 2.4 75.8803L4.38 76.9203C4.53 77.0003 4.63 77.1603 4.63 77.3303L4.67 82.5103C4.67 82.7303 4.71 82.9403 4.8 83.1403C4.93 83.4603 5.17 83.9803 5.46 84.4803C5.83 85.1003 6.23 85.5603 6.45 85.7803C6.51 85.8403 6.6 85.8003 6.6 85.7203L6.52 78.4503C6.52 78.2503 6.73 78.1103 6.91 78.1903L9.79 79.5303C9.9 79.5803 10.03 79.5003 10.03 79.3703V73.9603C10.03 73.8403 9.96 73.7203 9.84 73.6703H9.85ZM9.72 4.56032L0.22 0.010323C0.12 -0.029677 0 0.040323 0 0.160323V12.4603C0 13.3303 0.13 14.1903 0.38 15.0203C0.68 16.0303 1.13 17.4503 1.58 18.6003C2.15 20.0703 2.61 21.1103 2.95 21.8203C3.36 22.6703 3.98 23.4003 4.76 23.9403L9.64 27.3003C9.75 27.3803 9.91 27.3003 9.91 27.1603V22.1903C9.91 22.0703 9.85 21.9603 9.74 21.9103C9.21 21.6203 7.56 20.7203 6.98 20.3503C6.6 20.1103 5.81 19.5203 5.23 19.0903C4.76 18.7403 4.37 18.3003 4.08 17.8003C3.79 17.3003 3.38 16.5803 3.07 15.9203C2.65 15.0503 2.35 14.3203 2.16 13.8403C2.01 13.4503 1.92 13.0303 1.91 12.6103L1.73 7.10032C1.73 6.82032 2.02 6.63032 2.27 6.76032L4.25 7.80032C4.4 7.88032 4.5 8.04032 4.5 8.21032L4.54 13.3903C4.54 13.6103 4.58 13.8203 4.67 14.0203C4.8 14.3403 5.04 14.8603 5.33 15.3603C5.7 15.9803 6.1 16.4403 6.32 16.6603C6.38 16.7203 6.47 16.6803 6.47 16.6003L6.39 9.33032C6.39 9.13032 6.6 8.99032 6.78 9.07032L9.66 10.4103C9.77 10.4603 9.9 10.3803 9.9 10.2503V4.84032C9.9 4.72032 9.83 4.60032 9.71 4.55032L9.72 4.56032ZM0.26 43.2803L4.55 37.0503C4.62 36.9403 4.76 36.9003 4.88 36.9503L9.78 39.3903C9.9 39.4403 10.03 39.3503 10.03 39.2203V33.6103C10.03 33.4603 9.93 33.3203 9.79 33.2603L5.29 31.1403C5.15 31.0903 5.04 30.9903 4.98 30.8603L0.42 21.3503C0.35 21.2103 0.13 21.2603 0.13 21.4203V25.8403C0.13 25.9403 0.15 26.0303 0.19 26.1203L2.63 31.6703C2.68 31.7803 2.67 31.9203 2.61 32.0203L0.22 36.0303C0.16 36.1303 0.13 36.2503 0.13 36.3603V43.2303C0.13 43.3003 0.22 43.3303 0.27 43.2703L0.26 43.2803Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_16_3113">
                  <rect width="10.04" height="96.46" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div
            className={css["box-title"]}
            data-animate="box-title"
            style={{ opacity: 0, transform: "translateX(-100px)" }}>
            <div className={css["box-bg-head"]}>
              <p>Gran rendimiento</p>
              <Image
                src={"/images/05/coma.svg"}
                width={12}
                height={8}
                alt="Gran rendimiento"
              />
            </div>
            <div className={css["box-bg-title"]}>
              <p>Aventuras sin limites</p>
              <Image
                src={"/images/06/tilde.svg"}
                width={12}
                height={7}
                alt="Tilde"
                className={css["tilde"]}
              />
            </div>
          </div>
          <div
            className={css["box-btn-aventura"]}
            data-animate="box-btn-aventura"
            style={{ opacity: 0, transform: "translateY(-100px)" }}>
            <div
              id="boton_ver_mas_aventuras"
              className={css["btn-plus-modal"]}
              data-modal="modal-aventuras"
              onClick={() => openModal("05-aventuras")}>
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
                <p>Ver más aventuras</p>
              </div>
            </div>
          </div>
          <div
            className={css["box-eficiencia"]}
            data-animate="box-eficiencia"
            style={{ opacity: 0, transform: "translateX(-100px)" }}>
            <div className={css["box-eficiencia-content"]}>
              <div className={`${css["box-eficiencia-icon"]} text-center`}>
                <Image
                  src={"/images/05/gasolina.svg"}
                  width={86}
                  height={55}
                  alt="eficiencia en consumo de combustible"
                  className="inline-block"
                />
              </div>
              <div className={css["box-eficiencia-title"]}>
                <p>eficiencia en consumo</p>
                <p>de combustible</p>
              </div>
              <div className={css["box-eficiencia-desc"]}>
                <p>
                  La combinación de potencia y agilidad
                  <br />
                  harán que tus planes no se detengan.
                </p>
              </div>
            </div>
          </div>
          <div
            className={css["box-transmision"]}
            data-animate="box-transmision"
            style={{ opacity: 0 }}>
            <div className={css["box-transmision-div"]}>
              <div className={css["box-transmision-content"]}>
                <div className={css["box-transmision-icon"]}>
                  <Image
                    src={"/images/05/transmision.webp"}
                    width={262}
                    height={162}
                    alt="TRANSMISION CVT"
                  />
                </div>
                <div
                  className={css["box-transmision-text"]}
                  data-animate="box-transmision-text"
                  style={{ opacity: 0, transform: "translateX(-100px)" }}>
                  <h2>
                    TRANSMISIÓN <span>CVT*</span>
                  </h2>
                  <p>
                    Sistema que brinda mayor
                    <br />
                    eficiencia al realizar los cambios
                    <br />
                    de manera inteligente.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className={css["box-motor"]}
            data-animate="box-motor"
            style={{ opacity: 0 }}>
            <div className={css["box-motor-content"]}>
              <div
                className={css["box-motor-img"]}
                data-animate="box-motor-img"
                style={{ opacity: 0, transform: "translateY(100px)" }}>
                <Image
                  src={"/images/05/motor.webp"}
                  width={371}
                  height={299}
                  alt="Motor rendidor de 1.2l"
                />
              </div>
              <div className={css["box-motor-div"]}>
                <div className={css["box-motor-text"]}>
                  <h2>
                    Motor rendidor de <span>1.2l*</span>
                  </h2>
                  <p>
                    Llega más lejos con cada gota de gasolina
                    <br />
                    gracias a la ágil respuesta de su motor
                    <br />
                    con potencia de 87.2 HP y 6,000 RPM.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className={css["box-volante"]}
            data-animate="box-volante"
            style={{ opacity: 0 }}>
            <Image
              src={"/images/05/interior.webp"}
              width={482}
              height={205}
              alt="Explora nuevas fronteras y vive experiencias únicas"
            />
          </div>
          <div
            className={css["box-volante-text"]}
            data-animate="box-volante-text"
            style={{ opacity: 0, transform: "translateX(100px)" }}>
            <p>
              Explora nuevas fronteras
              <br />y vive experiencias únicas
            </p>
          </div>
        </div>

        <a
          id="boton_siguiente_pagina_6"
          className="z-40 right-0 btn-change-page-next"
          href="/page-6/">
          <div className="w-full h-full flex items-center justify-end">
            <div className="mr-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={21}
                height={38}
                viewBox="0 0 21 38"
                fill="none">
                <path
                  d="M2 36.0408L17.6741 21.9997C19.4488 20.4099 19.4488 17.6308 17.6741 16.041L2 1.99996"
                  stroke="#EF872D"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>
        </a>
      </div>
    </LayoutSecondary>
  );
};

export default Page05;
