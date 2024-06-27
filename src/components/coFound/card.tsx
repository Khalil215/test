import React from "react";

type Props = {
  color: string;
  number: string;
  title: string;
  text: string;
};

const Card = ({ color, number, title, text }: Props) => {
  return (
    <div className="card min-h-[290px] lg:w-[350px] w-[75%] flex flex-col gap-3">
      <div
        className="w-[60px] h-[60px] flex justify-center items-center rounded-full text-white"
        style={{ backgroundColor: color }}
      >
        {number}
      </div>
      <p className="font-medium text-[18px]">{title}</p>
      <p>{text}</p>
    </div>
  );
};

export default Card;
