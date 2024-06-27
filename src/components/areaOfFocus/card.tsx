import React from "react";

type Props = {
  color: string;
  number: string;
  text: string;
};

const Card = ({ color, number, text }: Props) => {
  return (
    <div className={`h-[160px] w-[240px] p-[20px] text-[20px] flex flex-col justify-between text-white`} style={{backgroundColor: color}}>
      <p>{number}</p>
      <p>{text}</p>
    </div>
  );
};

export default Card;
