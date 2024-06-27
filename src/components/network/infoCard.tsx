import React from "react";
import RightArrowS from "@/icons/rightArrowS";

type Props = {
  title: string;
  description1: string;
  description2: string;
};
const InfoCard = ({
  title,
  description1,
  description2,
}: Props) => {
  return (
    <div className="card md:h-[350px]">
      <p className="font-medium md:text-[20px] text-[18px]">{title}</p>
      <p className="font-normal text-[15px] mt-3">{description1}</p>
      <p className="font-semibold text-[15px] mt-2">{description2}</p>
      <div className="flex gap-1 mt-3">
        <p className="font-semibold text-[15px] underline">Learn More</p>
        <RightArrowS />
      </div>
    </div>
  );
};

export default InfoCard;
