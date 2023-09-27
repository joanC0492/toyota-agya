import { useEffect } from "react";
import { NextPage } from "next";
import { Layout } from "@/shared/components/layouts";
import { Page4 } from "@/shared/components/pages/page-4";
import initAnimate from "@/shared/hooks/animacion-page-4";

const SeguridadPage: NextPage = () => {
  useEffect(() => {
    initAnimate();
  }, []);

  return (
    <Layout title="" nextUrl="/page-5" prevUrl="/page-3">
      <Page4 className="bg-[url('/images/04/seguridad.webp')] | w-[1194px] | h-[834px] | relative">
        <div className="absolute | left-0 | top-0 | text-white">
          <Page4.Title
            className="fade-block | relative | left-[55px] | top-[68px]"
            dataAnimate="box-1"
            style={{ opacity: "0", transform: "translateX(-100px)" }}
          />
        </div>
        <Page4.CardTop1 className="fade-block | animation-delay-250 | absolute | left-[567.66px] | top-6" />
        <Page4.CardTop2 className="fade-block | animation-delay-750 | absolute | -right-7 | top-[208px]" />
        <Page4.ListCardsBottom className="absolute | left-0 | bottom-0" />
      </Page4>
    </Layout>
  );
};

export default SeguridadPage;
