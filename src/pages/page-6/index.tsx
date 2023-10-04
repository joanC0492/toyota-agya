import { useEffect, useState } from "react";
import { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import { useUIContext } from "@/context/UIContext";
import initAnimate from "@/shared/hooks/animacion-page-6";
import { LayoutSecondary } from "@/shared/components/layouts";
import css from "@/styles/page-6.module.scss";

const autoInitial = {
  imgAuto: "agya_all.webp",
  btnActive: "btn-1",
};

const Page06: NextPage = () => {
  const { openModal } = useUIContext();
  const [auto, setAuto] = useState(autoInitial);

  useEffect(() => {
    initAnimate();
  }, []);

  return (
    <LayoutSecondary>
      <div className={`${css["container-page"]} fade-block`}>
        <a
          id="boton_regresar_pagina_5"
          className="z-40 left-0 btn-change-page-prev"
          href="/page-5/">
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

        <div id="page-6" className={css["page-6"]}>
          <div className={css["no-bg"]} />
          <div
            className={css["box-comprar"]}
            data-animate="box-comprar"
            style={{ opacity: 0, transform: "translateX(-100px)" }}>
            <a
              href="https://www.toyotaperu.com.pe/por-que-elegir-un-toyota"
              rel="noopener"
              target="_blank"
              style={{ textDecoration: "none" }}>
              <div className={css["box-comprar-head"]}>
                <Image
                  src={"/images/06/interrogacion.svg"}
                  width={24}
                  height={29}
                  alt="interrogacion"
                />
                <p>Por que comprar</p>
                <Image
                  src="/images/06/tilde.svg"
                  width={12}
                  height={7}
                  alt="Tilde"
                  className={css["tilde"]}
                />
              </div>
              <div className={css["box-comprar-footer"]}>
                <div>
                  <p>un Toyota</p>
                </div>
                <Image
                  src="/images/06/interrogacion.svg"
                  width={24}
                  height={29}
                  alt="interrogacion"
                />
              </div>
            </a>
          </div>
          <div
            className={css["box-garantia"]}
            data-animate="box-garantia"
            style={{ opacity: 0 }}>
            <div
              id="boton_ver_garantia"
              className={css["btn-comprar"]}
              onClick={() => openModal("06-garantia")}>
              <div className={css["btn-comprar-content"]}>
                <div className={css["btn-comprar-ico"]}>
                  <Image
                    src="/images/06/garantia.svg"
                    width={24}
                    height={35}
                    alt="icono garantía que inspira confianza"
                    className="inline-block"
                  />
                </div>
                <div className={css["btn-comprar-title"]}>
                  <p>GARANTÍA QUE</p>
                  <p>INSPIRA CONFIANZA</p>
                </div>
              </div>
            </div>
          </div>
          <div
            className={css["box-excelente"]}
            data-animate="box-excelente"
            style={{ opacity: 0 }}>
            <div
              id="boton_ver_valor_de_reventa"
              className={css["btn-comprar"]}
              onClick={() => openModal("06-excelente")}>
              <div className={css["btn-comprar-content"]}>
                <div className={css["btn-comprar-ico"]}>
                  <Image
                    src="/images/06/excelente.svg"
                    width={32}
                    height={33}
                    alt="icono excelente valor de reventa"
                    className="inline-block"
                  />
                </div>
                <div className={css["btn-comprar-title"]}>
                  <p>EXCELENTE VALOR</p>
                  <p>DE REVENTA</p>
                </div>
              </div>
            </div>
          </div>
          <div
            className={css["box-programa"]}
            data-animate="box-programa"
            style={{ opacity: 0 }}>
            <div
              id="boton_ver_programa_de_financiamiento"
              className={css["btn-comprar"]}
              onClick={() => openModal("06-programa")}>
              <div className={css["btn-comprar-content"]}>
                <div className={css["btn-comprar-ico"]}>
                  <Image
                    src="/images/06/toyota-life.svg"
                    width={50}
                    height={24}
                    alt="icono programa de financiamiento exclusivo con maf"
                    className="inline-block"
                  />
                </div>
                <div className={css["btn-comprar-title"]}>
                  <p>PROGRAMA DE</p>
                  <p>FINANCIAMIENTO</p>
                  <p>EXCLUSIVO CON MAF</p>
                </div>
              </div>
            </div>
          </div>
          <div
            className={css["box-pago"]}
            data-animate="box-pago"
            style={{ opacity: 0 }}>
            <div
              id="boton_ver_recibimos_auto_parte_pago"
              className={css["btn-comprar"]}
              onClick={() => openModal("06-pago")}>
              <div className={css["btn-comprar-content"]}>
                <div className={css["btn-comprar-ico"]}>
                  <Image
                    src="/images/06/pago.svg"
                    width={38}
                    height={40}
                    alt="icono recibimos tu auto en parte de pago"
                    className="inline-block"
                  />
                </div>
                <div className={css["btn-comprar-title"]}>
                  <p>RECIBIMOS TU AUTO</p>
                  <p>EN PARTE DE PAGO</p>
                </div>
              </div>
            </div>
          </div>
          <div
            className={css["box-servicio"]}
            data-animate="box-servicio"
            style={{ opacity: 0 }}>
            <div
              id="boton_ver_servicio_posventa"
              className={css["btn-comprar"]}
              onClick={() => openModal("06-servicio")}>
              <div className={css["btn-comprar-content"]}>
                <div className={css["btn-comprar-ico"]}>
                  <Image
                    src="/images/06/auto.svg"
                    width={33}
                    height={34}
                    alt="icono servicio posventa de calidad"
                    className="inline-block"
                  />
                </div>
                <div className={css["btn-comprar-title"]}>
                  <p>SERVICIO POSVENTA</p>
                  <p>DE CALIDAD</p>
                </div>
              </div>
            </div>
          </div>
          <div
            className={css["box-logo"]}
            data-animate="box-logo"
            style={{ opacity: 0, transform: "translateY(-100px)" }}>
            <Image
              src="/images/06/agya_logo.svg"
              width={287}
              height={67}
              alt="agya logo"
            />
          </div>
          <div
            className={css["box-auto-one"]}
            data-animate="box-auto-one"
            style={{
              opacity: 0,
              transform: "translateX(300px)",
              pointerEvents: "none",
            }}>
            <div className={css["btn-auto"]}>
              <Image
                src={`/images/06/${auto.imgAuto}`}
                width={379}
                height={305}
                alt="agya all"
              />
            </div>
          </div>
          <div className={css["box-btns-autos"]}>
            <div
              className={css["btn-box-one"]}
              data-animate="btn-box-one"
              style={{ opacity: 0 }}>
              <div
                id="boton_ver_agya_1_0"
                className={`${css["btn-efecto-one"]} ${
                  auto.btnActive === "btn-1" ? "" : "opacity-50"
                }`}
                onClick={() =>
                  setAuto({ imgAuto: "agya_1_0.webp", btnActive: "btn-1" })
                }>
                <p>
                  AGYA <span>1.0</span>
                </p>
              </div>
            </div>
            <div
              className={css["btn-box-two"]}
              data-animate="btn-box-two"
              style={{ opacity: 0 }}>
              <div
                id="boton_ver_agya_1_2"
                className={`${css["btn-efecto-one"]} ${
                  auto.btnActive === "btn-2" ? "" : "opacity-50"
                }`}
                onClick={() =>
                  setAuto({ imgAuto: "agya_1_2.webp", btnActive: "btn-2" })
                }>
                <p>
                  AGYA <span>1.2</span>
                </p>
              </div>
            </div>
          </div>
          <div
            className={css["box-infomacion-autos"]}
            data-animate="box-infomacion-autos"
            style={{ opacity: 0, transform: "translateY(300px)" }}>
            <div className={css["box-infomacion-autos-img"]}>
              <Image
                src="/images/06/cuadro_informativo.png"
                alt="cuadro informativo"
                width={543}
                height={629}
              />
              <div
                className={`${css["after"]} ${
                  auto.btnActive === "btn-1"
                    ? "w-[237px] translate-x-[117px]"
                    : ""
                }`}
              />
            </div>
            <div
              className={css["btn-modal-redirect-parent"]}
              style={{ display: "grid" }}>
              <button
                id="boton_ver_mas_agya"
                className={css["btn-modal-redirect"]}
                onClick={() => openModal("06-imagen")}>
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
              </button>
            </div>
          </div>
        </div>

        <a
          id="boton_siguiente_pagina_7"
          className="z-40 right-0 btn-change-page-next"
          href="/page-7/">
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

export default Page06;
