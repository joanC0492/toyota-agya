import { useEffect, useState } from "react";
import { NextPage } from "next";
import { Layout } from "@/shared/components/layouts";
import initAnimate from "@/shared/hooks/animacion-page-1";
import { Page1 } from "@/shared/components/pages/page-1";
import Image from "next/image";
import Head from "next/head";

const HomePage: NextPage = () => {
  const [image, setImage] = useState<string>("portada-anim-02.webp");

  useEffect(() => {
    setTimeout(() => {
      let i = 1;
      const interval = setInterval(() => {
        i % 2 === 0
          ? setImage("portada-anim-02.webp")
          : setImage("portada-anim-01.webp");
        i === 4 ? clearInterval(interval) : () => {};
        i++;
      }, 500);
    }, 4000);
  }, []);

  useEffect(() => {
    initAnimate();
  }, []);

  return (
    <Layout title="Home" className="w-[587px] h-[831px]" nextUrl="/page-2">
      <Head>
        <title>Nuevo Toyota AGYA: El auto ideal</title>
        <meta
          name="description"
          content="Descubre el Nuevo Toyota AGYA, todo lo que buscas en tu primer auto. Disfruta de ahorro de combustible, conectividad y seguridad, junto con un amplio interior."
        />
      </Head>
      <Page1 className="relative">
        <Image
          src={`/images/01/${image}`}
          width={587}
          height={831}
          alt="Home Portada"
          priority
        />
        <Page1.Logo className="fade-block | absolute | z-10 | left-[34px] | top-[34px]" />
        <Page1.Title className="fade-block | animation-delay-500 | absolute | z-10 | left-[61px] | top-[120px]" />
        <Page1.Description className="absolute | z-10 | left-[39px] | bottom-[70px]" />
      </Page1>
    </Layout>
  );
};

export default HomePage;
