import React from "react";
import { Title } from "./Title";
import { Description1 } from "./Description1";
import { Description2 } from "./Description2";

interface IProps {
  className?: string;
}
export const Box1 = ({ className = "" }: IProps) => {
  return (
    <div className={className}>
      <Title className="relative | left-[44px] | top-0" />
      <Description1 className="mt-2" />
      <Description2 className="ml-[120px] | mt-[42px]" />
    </div>
  );
};
