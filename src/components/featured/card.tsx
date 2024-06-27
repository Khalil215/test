import React from "react";

type Props = {
  featured:string;
  newspaper:string;
};

const Card = ({featured, newspaper}: Props) => {
  return (
    <div className="flex w-[850px] h-[390px]">
      <img
        src={featured}
        className="w-[60%] object-top"
        alt="featured cover"
      />
      <div className="flex flex-col justify-between py-[30px] px-[15px] bg-white w-[40%]">
        <div>
          <img src={newspaper} alt="newspaper" />
          <p className="font-medium">
            SINC Partners invests over 200 million naira in 5 startups
          </p>
          <p className="text-[14px]">
            SINC Partners invests over 200 million naira in 5 startups. SINC
            Partners invests over 200 million naira in 5 startups SINC Partners
            invests over 200 million naira in ....
          </p>
        </div>
        <div>
          <p className="mb-3">REPORTED BY:</p>
          <p>Rema Viel</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
