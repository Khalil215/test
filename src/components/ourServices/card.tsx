import React from "react";

type Props = {
  icon: any;
  text: string;
};

const Card = ({ icon, text }: Props) => {
  return (
    <div className="card min-h-[230px] lg:w-[350px] w-[75%]">
      {icon}
      <p className="mt-4">{text}</p>
    </div>
  );
};

export default Card;
