import { ICard } from "@/interfaces";

export const cardsData: ICard[] = [
  {
    id: 1,
    title: `FRENOS ANTIBLOQUEO <span class="parentesis">(</span>ABS<span class="parentesis">)</span>`,
    widthTitle: 180,
    text: "Permite mantener el control durante un frenado de emergencia.",
    img: "card-bottom-img-1",
    dataNombreBoton: "boton card open modal frenos antibloqueo",
  },
  {
    id: 2,
    title: `ASISTENCIA DE CONTROL DE ASCENSO <span class="parentesis">(</span class="parentesis">HAC<span class="parentesis">)</span>`,
    widthTitle: 222,
    text: "Evita que el vehículo retroceda al arrancar en pendientes.",
    img: "card-bottom-img-2",
    dataNombreBoton: "boton card open modal asistencia de control de ascenso",
  },
  {
    id: 3,
    title: `CONTROL DE ESTABILIDAD VEHICULAR <span class="parentesis">(</span class="parentesis">VSC<span class="parentesis">)</span>`,
    widthTitle: 232,
    text: "Ayuda a eliminar el derrape en curvas peligrosas y superficies resbaladizas.",
    img: "card-bottom-img-3",
    dataNombreBoton: "boton card open modal control de estabilidad vehicular",
  },
  {
    id: 4,
    title: `CONTROL DE TRACCIÓN <span class="parentesis">(</span>TRC<span class="parentesis">)</span>`,
    widthTitle: 137,
    text: "Garantiza una buena tracción en condiciones de baja adherencia.",
    img: "card-bottom-img-4",
    dataNombreBoton: "boton card open modal control de tracción",
  },
];
