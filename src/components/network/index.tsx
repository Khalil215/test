import RightArrowS from "@/icons/rightArrowS";
import React from "react";
import InfoCard from "./infoCard";

type Props = {};

const Network = (props: Props) => {
  const contentArray = [
    {
      title: "Work with Service Incubators to expedite your time-to-market",
      description1: "Collaborate with our meticulously chosen service partners, each with a vested interest, ensuring a shared commitment to success in the game of venture building.",
      description2: "For 7.5% equity, you get a product manager, product designer, frontend engineer, software engineer and growth marketer to build the MVP of your app or web application and validate it."
    },
    {
      title: "Access funding after your MVP is validated",
      description1: "Startups that have built and validated their product can take advantage of the financial resources of the SINC Investors Network, elevating their potential for success in the venture capital landscape.",
      description2: "Raise $5k, $25k, $50k and $125k in 4 bootstrap deals within 12 months"
    }
  ];

  return (
    <section className="mt-28 md:mx-10 mx-5">
      <div className="md:w-[60%] w-[100%] mx-auto flex justify-center align-center bg-white rounded-[32px] px-7 py-5  font-normal text-center">
        <div>
          <p className="md:text-[20px] text-[16px]">
            &quot;Nigeria and Africa has a massive network effect that have not
            be fully utilized. With Nigerians/Africans in every country and
            territory of the world, we can scale an African business to 100+
            countries in few weeks&quot;
          </p>
          <p className="md:text-[16px] text-[14px] mt-6 font-medium">
            Daniel Izeghs Oratokhai
          </p>
          <p className="md:text-[16px] text-[14px] mt-3">
            Managing Partner at SINC Partners Ltd
          </p>
        </div>
      </div>

      <div className="mt-28  md:w-[80%] w-[100%] mx-auto">
        <h2 className="header">
          Network of builders helping startup scale
        </h2>
        <div className="flex flex-col md:flex-row gap-7 items-center mt-10">
      {contentArray.map((content, index) => (
        <InfoCard
          key={index}
          title={content.title}
          description1={content.description1}
          description2={content.description2}
        />
      ))}
    </div>
      </div>
    </section>
  );
};

export default Network;
