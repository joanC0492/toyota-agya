import { useUIContext } from "@/context/UIContext";
import { ButtonPlay } from "@/shared/components/ui/ButtonPlay";
import { ButtonTertiary } from "@/shared/components/ui/ButtonTertiary";

export const Buttons = () => {
  const { openModal } = useUIContext();
  return (
    <div>
      <ButtonPlay
        id="ver_video_youtube_agya"
        className="fade-block | animation-delay-250 | mb-[10px]"
        dataNombreboton="boton open modal play youtube"
        onClick={() => openModal("07-youtube-video")}
      />
      <div className="text-left | ml-[68px]">
        <div>
          <ButtonTertiary
            id="boton_cotizar"
            className="fade-block | animation-delay-500 | mb-2"
            dataNombreboton="boton open pagina 1"
            url="https://www.toyotaperu.com.pe/consulta-agya"
            text="Cotizar"
          />
        </div>
        <div>
          <ButtonTertiary
            id="boton_ver_concesionarios"
            className="fade-block | animation-delay-750"
            dataNombreboton="boton open pagina 2"
            url="https://www.toyotaperu.com.pe/concesionarios-toyota"
            text="Ver concesionarios"
          />
        </div>
      </div>
    </div>
  );
};
