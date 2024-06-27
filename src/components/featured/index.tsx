import React from "react";
import Card from "./card";

type Props = {};

const Featured = (props: Props) => {
  const cards = [
    {
      featured: "/images/feat1.png",
      newspaper: "/images/bujnews.png",
    },
    {
      featured: "/images/feat2.png",
      newspaper: "/images/punch.png",
    },
  ];
  return (
    <section className="mt-32">
      <h3 className="text-[24px] font-semibold text-center">As Featured In</h3>
      <div className="mt-10 flex overflow-x-auto gap-5 px-10">
        {cards.map((card, index) => (
          <div key={index}>
            <Card featured={card.featured} newspaper={card.newspaper} />
          </div>
        ))}
      </div>
      <div className="md:mx-10 mx-5 mt-28">
        <div className="mx-auto md:w-[70%] text-center">
          <h2 className="text-[50px]">Let&apos;s build companies that help everyone succeed</h2>
          <div className="flex justify-center gap-3 mt-10">
            <button className="rounded-full px-[30px] py-[10px] border-[1px] border-[#212121] font-semibold">SINC With Us</button>
            <button className="rounded-full px-[30px] py-[10px] font-semibold bg-[#303030] text-white">Apply to SIP 1.0</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Featured;
