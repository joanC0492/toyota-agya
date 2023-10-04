import { ICard } from "@/interfaces";

export const cardsData: ICard[] = [
  {
    // id: 1,
    cardId: 1,
    title: `FRENOS ANTIBLOQUEO <span class="parentesis">(</span>ABS<span class="parentesis">)</span>`,
    widthTitle: 180,
    id: "boton_ver_frenos_antibloqueo_abs",
    text: "Permite mantener el control durante un frenado de emergencia.",
    img: "card-bottom-img-1",
    dataNombreBoton: "boton card open modal frenos antibloqueo",
  },
  {
    cardId: 2,
    title: `ASISTENCIA DE CONTROL DE ASCENSO <span class="parentesis">(</span class="parentesis">HAC<span class="parentesis">)</span>`,
    widthTitle: 222,
    id: "boton_ver_asistencia_de_control_de_ascenso",
    text: "Evita que el vehículo retroceda al arrancar en pendientes.",
    img: "card-bottom-img-2",
    dataNombreBoton: "boton card open modal asistencia de control de ascenso",
  },
  {
    cardId: 3,
    title: `CONTROL DE ESTABILIDAD VEHICULAR <span class="parentesis">(</span class="parentesis">VSC<span class="parentesis">)</span>`,
    widthTitle: 232,
    id: "boton_ver_control_de_estabilidad",
    text: "Ayuda a eliminar el derrape en curvas peligrosas y superficies resbaladizas.",
    img: "card-bottom-img-3",
    dataNombreBoton: "boton card open modal control de estabilidad vehicular",
  },
  {
    cardId: 4,
    title: `CONTROL DE TRACCIÓN <span class="parentesis">(</span>TRC<span class="parentesis">)</span>`,
    widthTitle: 137,
    id: "boton_ver_control_de_traccion",
    text: "Garantiza una buena tracción en condiciones de baja adherencia.",
    img: "card-bottom-img-4",
    dataNombreBoton: "boton card open modal control de tracción",
  },
];
