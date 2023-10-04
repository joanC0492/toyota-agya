import Image from "next/image";
import { useUIContext } from "@/context/UIContext";
import { IconModal } from "@/shared/components/ui";

interface IProps {
  className?: string;
}
export const ModalTRC = ({ className = "" }: IProps) => {
  const { closeModal } = useUIContext();
  return (
    <div
      className={`${className} | relative | w-[calc(871px-50px)] | -skew-x-[5.5deg] | h-[544px] | rounded-tl-[36px] | rounded-br-[36px] | rounded-tr-[16px] | rounded-bl-[16px] | bg-toyota-brown/80`}
      // style={{
      //   background:
      //     "linear-gradient(112deg, #703400 6.1%, rgba(89, 41, 0, 0.65) 93.55%, rgba(89, 41, 0, 0.80) 93.55%)",
      // }}
      >
      <div className="skew-x-[5.5deg] | text-white">
        <div className="mt-20">
          <p className="font-designer | text-2xl | text-center">
            CONTROL DE TRACCIÓN <span className="parentesis">(</span>TRC
            <span className="parentesis">)</span>
          </p>
        </div>
        <div className="mb-[46px]">
          <Image
            src="/images/04/agya_trc.gif"
            width={584}
            height={385}
            alt="Modal Card 01"
            className="mx-auto"
          />
        </div>
        <IconModal
          className="absolute | right-[26px] | -top-[78px] | rotate-45"
          onClick={closeModal}
        />
      </div>
    </div>
  );
};
