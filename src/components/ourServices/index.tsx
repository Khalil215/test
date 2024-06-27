import { Triangle, PolygonF, Polygon } from "@/icons";
import React from "react";
import Card from "./card";
import BottomLink from "../bottomLink";
Triangle;
type Props = {};

const index = (props: Props) => {
  const cards = [
    {
      icon: <Triangle />,
      text: "Most early-stage companies and pre-product startups cannot afford professional services especially those who don’t have family and friends’ network that can support",
    },
    {
      icon: <Polygon />,
      text: "If startups can seed 5-10% in equity to incubators for $20k to $200k funding most times, they will be willing to seed 10% equity for a $25k service investment",
    },
    {
      icon: <PolygonF />,
      text: "Young professionals who don’t have a lot of money to invest nor an accredited investors will have opportunities to take equity at the early stage of their career, usually been the first to invest and almost guaranteed of return",
    },
  ];
  return (
    <section className="md:mx-10 mx-5 mt-28">
      <div className="md:w-[90%] w-[100%] mx-auto">
        <h2 className="header">Our Service Incubation Model</h2>
        <p className="subHeading md:w-[80%]">
          The Service Incubation model is an alternate funding model for startup
          that allows professionals to offer their services to startups in
          return for a minute equity (usually between 0.5% to 1.5%) in the
          startup. As a service incubator, you will see your share grow as much
          as 1000% in 12 – 24 months as been first to invest.
        </p>
      </div>
      <div>
        <h3 className="font-medium text-[30px] mt-10 mb-3">Hypothesis</h3>
        <p>
          Just a few reasons we know its time for this model
          within the ecosystem
        </p>
      </div>
      <div className="cardFlex">
        {cards.map((card, index) => (
          <Card key={index} icon={card.icon} text={card.text} />
        ))}
      </div>
      <div>
        <h3 className="font-medium text-[30px] mt-10 mb-3">Case Study</h3>
        <p>
          See what Service Incubators get, the maths behind Service Equity
          (SEEQ) and what the value of your share equity can be over time
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <div className="roundText">Service Incubator Equity</div>
          <div className="roundText">SEEQ Maths Equation</div>
          <div className="roundText">Value of my Equity Over Time</div>
        </div>
      </div>
      <BottomLink text="Become A Service Incubator"/>
    </section>
  );
};

export default index;
