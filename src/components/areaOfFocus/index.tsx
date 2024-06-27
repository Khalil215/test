import React from "react";
import Card from "./card";

type Props = {};

const AreaOfFucos = (props: Props) => {
  const cards = [
    {
      color: "#303030",
      number: "01",
      text: "Business Support & Incubation",
    },
    {
      color: "#F47733",
      number: "02",
      text: "On-Demand & As-A-Service",
    },
    {
      color: "#FF78BF",
      number: "03",
      text: "Marketplace & Crowdsourcing",
    },
    {
      color: "#20888F",
      number: "04",
      text: "Aggregation & Shared Economy",
    },
    {
      color: "#FF88C6",
      number: "05",
      text: "Decentralized Economy & Digital Assets",
    },
  ];
  return (
    <section className="md:mx-10 mx-5 mt-28">
      <div className="md:w-[90%] w-[100%] mx-auto">
        <h2 className="header">Our Area of Focus</h2>
        <p className="subHeading md:w-[55%]">
          In our quest to help make success available to everyone, we have
          initial strategic direction to focus on these five (5) key areas at
          the lab
        </p>
        <div className="mt-10 flex flex-wrap justify-center">
          {cards.map((card, index) => (
            <div key={index}>
              <Card
                color={card.color}
                number={card.number}
                text={card.text}
              ></Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AreaOfFucos;
