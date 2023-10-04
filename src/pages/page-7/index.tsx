import { useUIContext } from "@/context/UIContext";
import { NextPage } from "next";
import Image from "next/image";
import { Page7 } from "@/shared/components/pages/page-7";
import { Layout } from "@/shared/components/layouts";
import Head from "next/head";

const Page07: NextPage = () => {
  const { openModal } = useUIContext();

  return (
    <Layout title="" prevUrl="/page-6" className="w-[587px] | h-[831px]">
      <Head>
        <title>
          Nuevo Toyota AGYA: Inicia Tu Nuevo Viaje, Cotiza y Busca
          Concesionarios
        </title>
        <meta
          name="description"
          content="Es hora de iniciar tu nuevo viaje con Toyota Agya. Cotiza tu vehículo y encuentra concesionarios cercanos hacia una experiencia de conducción excepcional."
        />
      </Head>
      <Page7 className="relative">
        <Image
          src={`/images/07/contraportada.webp`}
          width={587}
          height={831}
          alt="Home Portada"
          priority
          className="zoom-block"
        />
        <div className="absolute | z-10 | w-full | h-full | left-0 | top-0 | text-white | text-center">
          <Page7.Title className="fade-block | flex | flex-wrap | justify-center | items-center | w-[322px] | mt-[52px] | ml-[152px] | mb-[14px]" />
          <Page7.Buttons />
          <Page7.Footer className="text-[6px] | text-white | font-text-regular | absolute | left-0 | bottom-[20px] | w-full" />
        </div>
      </Page7>
    </Layout>
  );
};

export default Page07;
