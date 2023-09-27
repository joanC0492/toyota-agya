export type TypePages =
  | "/"
  | "/page-2"
  | "/page-3"
  | "/page-4"
  | "/page-5"
  | "/page-6"
  | "/page-7";

export type TypeModal =
  | "diseno-exterior-dimensiones"
  | "diseno-exterior-colores"
  | "diseno-exterior-aleacion"
  | "04-abs"
  | "04-hac"
  | "04-vsc"
  | "04-trc"
  | "07-youtube-video";

export interface ICard {
  id: number;
  title: string;
  widthTitle: number;
  text: string;
  img: string;
  dataNombreBoton: string;
}
