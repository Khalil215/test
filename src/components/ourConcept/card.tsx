import React from "react";

type Props = {
  title: string;
  text: string;
};

const Card = ({ title, text }: Props) => {
  return (
    <div className="card h-[220px] lg:w-[352px] w-[75%] flex flex-col justify-between text-center">
      <p className="text-[22px] font-medium">{title}</p>
      <p>{text}</p>
    </div>
  );
};

export default Card;
