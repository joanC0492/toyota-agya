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
  | "03-360"
  | "03-maletera"
  | "04-abs"
  | "04-hac"
  | "04-vsc"
  | "04-trc"
  | "05-aventuras"
  | "06-garantia"
  | "06-excelente"
  | "06-programa"
  | "06-pago"
  | "06-servicio"
  | "06-imagen"
  | "07-youtube-video";

export interface ICard {
  cardId: number;
  title: string;
  widthTitle: number;
  id?: string;
  text: string;
  img: string;
  dataNombreBoton: string;
}

export interface IImagesMaletera {
  id: number;
  active: boolean;
  url: string;
}