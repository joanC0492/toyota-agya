import Head from "next/head";
import { ModalMain } from "../ui";

interface IProps {
  children: React.ReactNode;
}

export const LayoutSecondary = ({ children }: IProps) => {
  return (
    <div>
      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-TSMVWDBF');`,
          }}
        />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width" />
        <meta
          name="description"
          content="Conoce ahora las características del nuevo Toyota Agya 2023, el auto creado para llevar tu estilo a donde quieras; ingresa para conocer todos sus detalles."
        />
        <title>Toyota AGYA</title>
      </Head>
      <div className="relative | w-[1194px] | h-[834px] | mx-auto">
        {children}
        <ModalMain />
      </div>
    </div>
  );
};
