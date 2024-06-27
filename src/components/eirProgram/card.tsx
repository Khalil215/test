import React from "react";

type Props = {
  icon: any;
  title: string;
  text: string;
};

const Card = ({ icon, title, text }: Props) => {
  return (
    <div className="card h-[320px] md:h-[390px] w-[300px] md:w-[380px] flex flex-col gap-3">
      <div
        className="w-[60px] h-[60px] bg-[#4E4E4E] flex justify-center items-center rounded-full text-white"
      >
        {icon}
      </div>
      <p className="font-medium text-[14px] md:text-[18px]">{title}</p>
      <p className="text-[12px] md:text-[16px]">{text}</p>
    </div>
  );
};

export default Card;
