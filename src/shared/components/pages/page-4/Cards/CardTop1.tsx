import Image from "next/image";

interface IProps {
  className?: string;
}
export const CardTop1 = ({ className }: IProps) => {
  return (
    <div className={className}>
      <div className="relative">
        <Image
          src={"/images/04/top-01.webp"}
          width={336}
          height={181}
          alt="Top 1"
          className="relative | z-10"
        />
        <div className="bg-toyota-brown/70 | text-white | -skew-x-[23deg] | absolute | left-[164.34px] | top-[34px] | z-0 | w-[383px] | h-[134px] | rounded-tr-2xl | rounded-br-2xl">
          <div className="skew-x-[23deg] | mt-[21px] | ml-[160px]">
            <p className="font-designer | text-base | leading-4 | inline-flex | flex-col | ml-[14px] | mb-[5px]">
              <span className="ml-[7px]">sistema de</span>
              <span className="text-toyota-orange">anclaje ISOFIX</span>
            </p>
            <p className="font-text-regular | text-sm | leading-4 | -skew-x-[15deg] | w-[197.71px]">
              Un sistema de sujeción que permite instalar sillas de bebé de
              manera fácil y segura.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
