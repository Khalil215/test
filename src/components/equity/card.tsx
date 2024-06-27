import React from "react";

type Props = {
  image: string;
  description: string;
  position: string;
  location: string;
  industry: string;
  equity: string;
  stipend: string;
  deadline: string;
  role: string;
};

const Card = (props: Props) => {
  return (
    <div className="card h-[450px] w-[278px] flex flex-col gap-4">
      <img src={props.image} className="w-[100px]" alt="Skinmake" />
      <p className="text-[14px]">{props.description}</p>
      <p className="text-[18px] font-medium">{props.position}</p>
      <div className="grid grid-cols-2 gap-4 text-[13px]">
        <div>
          <p className="text-[#8E8E8E]">LOCATION</p>
          <p>{props.location}</p>
        </div>
        <div>
          <p className="text-[#8E8E8E]">INDUSTRY</p>
          <p>{props.industry}</p>
        </div>
        <div>
          <p className="text-[#8E8E8E]">EQUITY</p>
          <p>{props.equity}</p>
        </div>
        <div>
          <p className="text-[#8E8E8E]">STIPEND</p>
          <p>{props.stipend}</p>
        </div>
        <div>
          <p className="text-[#8E8E8E]">DEADLINE</p>
          <p>{props.deadline}</p>
        </div>
        <div>
          <p className="text-[#8E8E8E]">ROLE TYPE</p>
          <p>{props.role}</p>
        </div>
      </div>
      <button className="bg-[#303030] py-[12px] w-[175px] text-white rounded-full">
        View Details
      </button>
    </div>
  );
};

export default Card;
