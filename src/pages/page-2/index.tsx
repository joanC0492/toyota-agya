import { useState, useEffect } from "react";
import { NextPage } from "next";
import Image from "next/image";
import { Layout } from "@/shared/components/layouts";
import { Page2 } from "@/shared/components/pages/page-2";
import initAnimate from "@/shared/hooks/animacion-page-2";

const DisenoExteriorPage: NextPage = () => {
  const [image, setImage] = useState<string>("diseno-exterior-on.webp");

  useEffect(() => {
    let i = 1;
    const interval = setInterval(() => {
      i % 2 === 0
        ? setImage("diseno-exterior-on.webp")
        : setImage("diseno-exterior-off.webp");
      i === 4 ? clearInterval(interval) : () => {};
      i++;
    }, 500);
  }, []);

  useEffect(() => {
    initAnimate();
  }, []);

  return (
    <Layout
      title="Diseño Exterior"
      prevUrl="/"
      nextUrl="/page-3"
      className="w-[1194px] h-[834px]">
      <Page2 className="relative | text-white">
        <Image
          src={`/images/02/${image}`}
          width={1194}
          height={834}
          alt="Arrow Right"
          className="relative | z-10"
          priority
        />
        <Page2.Box1 className="absolute | left-[49px] | top-[60px] | z-10" />
        <Page2.Box2 className="absolute | left-[88px] | bottom-[36px] | z-10" />
        <Page2.Box3 className="absolute | right-8 | bottom-0 | z-10" />
        <Page2.Box4 className="absolute | left-[732px] | top-[317px] | z-10" />
        <Page2.Box5 className="absolute | left-[633px] | top-[56px] | z-10" />
        <Image
          src="/images/02/aro.webp"
          width={141}
          height={141}
          alt="Aro Toyota"
          className="absolute | z-10 | left-0 | bottom-[31.5px] | animate-aro | animation-delay-1000"
        />
      </Page2>
    </Layout>
  );
};

export default DisenoExteriorPage;
