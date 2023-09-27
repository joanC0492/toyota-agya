interface Iprops {
  className?: string;
}

export const Box2 = ({ className }: Iprops) => {
  return (
    <div className={className} data-animate="box-7" style={{ opacity: "0" }}>
      <div className="mb-4 | ml-7">
        <p className="font-designer | text-lg | leading-4">
          MÁSCARA DELANTERA <span className="text-toyota-orange">RENOVADA</span>
        </p>
      </div>
      <div className="skew | ml-2">
        <p className="w-[392px] | font-text-regular | text-sm | leading-4">
          Prepárate para capturar miradas y dejar una impresión duradera
          mientras exploras nuevos horizontes. Su renovada máscara frontal está
          diseñada para crear un look rudo y distintivo.
        </p>
      </div>
    </div>
  );
};
