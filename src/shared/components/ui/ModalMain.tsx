import { useUIContext } from "@/context/UIContext";

import {
  ModalDimensiones,
  ModalColores,
  ModalAleacion,
} from "@/shared/components/pages/page-2/modals";

import {
  ModalABS,
  ModalHAC,
  ModalVSC,
  ModalTRC,
} from "@/shared/components/pages/page-4/Modals";

import {
  Modal360,
  ModalMaletera,
} from "@/shared/components/pages/page-3/Modals";

import { ModalAventuras } from "@/shared/components/pages/page-5/Modals";

import {
  ModalGarantia,
  ModalExcelente,
  ModalPrograma,
  ModalPago,
  ModalServicio,
  ModalImagen,
} from "@/shared/components/pages/page-6/Modals";

import { ModalYoutube } from "@/shared/components/pages/page-7";

export const ModalMain = () => {
  const { showModal, typeModal } = useUIContext();
  return (
    <>
      <div
        className={`absolute | left-0 | top-0 | w-full | h-full | bg-black/80 | transition-all  | duration-300 | ${
          showModal ? "z-50 | opacity-100" : "-z-50 | opacity-0"
        }`}></div>
      <div
        id="modal"
        className={`absolute | left-0 | top-0 | w-full | h-full | ${
          showModal ? "animate" : ""
        }`}>
        <div className="flex | items-center | justify-center | h-full">
          {/* 02 */}
          {typeModal === "diseno-exterior-dimensiones" && (
            <ModalDimensiones className="modal-dimensiones" />
          )}
          {typeModal === "diseno-exterior-colores" && (
            <ModalColores className="modal-colores" />
          )}
          {typeModal === "diseno-exterior-aleacion" && (
            <ModalAleacion className="modal-aleacion" />
          )}

          {/* 03 */}
          {typeModal === "03-360" && <Modal360 className="" />}
          {typeModal === "03-maletera" && <ModalMaletera className="" />}

          {/* 04 */}
          {typeModal === "04-abs" && <ModalABS className="" />}
          {typeModal === "04-hac" && <ModalHAC className="" />}
          {typeModal === "04-vsc" && <ModalVSC className="" />}
          {typeModal === "04-trc" && <ModalTRC className="" />}

          {/* 05 */}
          {typeModal === "05-aventuras" && <ModalAventuras className="" />}

          {/* 06 */}
          {typeModal === "06-garantia" && <ModalGarantia className="" />}
          {typeModal === "06-excelente" && <ModalExcelente className="" />}
          {typeModal === "06-programa" && <ModalPrograma className="" />}
          {typeModal === "06-pago" && <ModalPago className="" />}
          {typeModal === "06-servicio" && <ModalServicio className="" />}
          {typeModal === "06-imagen" && <ModalImagen className="" />}

          {/* 07 */}
          {typeModal === "07-youtube-video" && <ModalYoutube className="" />}
        </div>
      </div>
    </>
  );
};
