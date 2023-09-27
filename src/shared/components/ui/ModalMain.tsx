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
          {/* VER DIMENSIONES */}
          {typeModal === "diseno-exterior-dimensiones" && (
            <ModalDimensiones className="modal-dimensiones" />
          )}

          {/* VER MÁS COLORES */}
          {typeModal === "diseno-exterior-colores" && (
            <ModalColores className="modal-colores" />
          )}

          {/* AROS DE ALEACION */}
          {typeModal === "diseno-exterior-aleacion" && (
            <ModalAleacion className="modal-aleacion" />
          )}

          {/* 04 */}          
          {typeModal === "04-abs" && <ModalABS className="" />}
          {typeModal === "04-hac" && <ModalHAC className="" />}
          {typeModal === "04-vsc" && <ModalVSC className="" />}
          {typeModal === "04-trc" && <ModalTRC className="" />}

          {/* 07 */}
          {typeModal === "07-youtube-video" && <ModalYoutube className="" />}
        </div>
      </div>
    </>
  );
};
