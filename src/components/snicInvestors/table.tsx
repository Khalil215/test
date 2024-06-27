import React from "react";

type List = {
  normal: string;
  bold: string;
};
type Props = {
  title: string;
  lists: List[];
};

const Table = ({ title, lists }: Props) => {
  return (
    <div className="border-y-[.5px] border-y-[#A4A4A4] last:border-r-0 p-[15px] h-[212px] border-r-[.5px] border-r-[#A4A4A4]">
      <p className="text-[18px] font-medium">{title}</p>
      <ul className="text-[13px]">
        {lists.map((list, index) => (
          <li key={index}>
            {list.normal}
            <span className="font-medium">{list.bold}</span>{" "}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Table;
