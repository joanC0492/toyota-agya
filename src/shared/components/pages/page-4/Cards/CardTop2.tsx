import Image from "next/image";

interface IProps {
  className?: string;
}
export const CardTop2 = ({ className }: IProps) => {
  return (
    <div className={className}>
      <div className="relative">
        <Image
          src={"/images/04/top-02.webp"}
          width={352}
          height={178}
          alt="Top 2"
          className="relative | z-10"
        />
        <div className="bg-toyota-brown/70 | text-white | -skew-x-[23deg] | absolute | -left-[115px] | top-[34px] | z-0 | w-[201.13px] | h-[85px] | rounded-tl-2xl | rounded-bl-2xl">
          <div className="skew-x-[23deg] | mt-[21px]">
            <p className="font-designer | text-base | leading-4 | inline-flex | flex-col | ml-[18px] | mb-[5px]">
              <span className="ml-[7px] | mb-[2px]">DOBLE</span>
              <span className="text-toyota-orange">AIRBAG SRS</span>
            </p>            
          </div>
        </div>
      </div>
    </div>
  );
};
