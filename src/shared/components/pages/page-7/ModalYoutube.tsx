import React from "react";
import Image from "next/image";
import { useUIContext } from "@/context/UIContext";
import { IconModal } from "@/shared/components/ui";

interface IProps {
  className?: string;
}
export const ModalYoutube = ({ className = "" }: IProps) => {
  const { showModal, closeModal } = useUIContext();
  return (
    <div className={`${className} | relative | w-[calc(587px-50px)]`}>
        <header className="flex | relative | z-20 | justify-between | items-center | bg-white | px-4 | py-3">
          <Image
            src={"/images/07/toyota-logo-peru.webp"}
            width={271}
            height={44}
            alt="TOYOTA LOGO PERU"
            className="w-[100px]"
          />
          <IconModal
            className="rotate-45 | relative | -top-6 | right-2"
            onClick={closeModal}
          />
        </header>
        <div className="h-[315px]">
          {showModal && (
            <iframe
              className="w-full | relative | z-10 | -top-2"
              width={560}
              height={315}
              src="https://www.youtube.com/embed/LtFc8dqFArg?si=DN8oWxaD6Vi4Vm8-&loop=1&autoplay=1&mute=0&rel=0"
              title="YouTube video player"
              frameBorder={0}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
          )}
        </div>
    </div>
  );
};