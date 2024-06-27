import React from "react";
import Card from "./card";

type Props = {};

const OurConcept = (props: Props) => {
  const cards = [
    {
      title: "Service Incubator",
      text: "A service-for-shares model of incubating pre-product startups and early-stage companies by building their early stage product and MVP",
    },
    {
      title: "Virtualting",
      text: "A resource share model that allows companies share the time of resources (employees, consultants, technical advisers or influencers) while also splitting the service cost of the resource",
    },
    {
      title: "Diiming",
      text: "A progressive investment model that allows you to put aside income (disposable or non-disposable) as investment over a period towards an investment or spend of your choice ",
    },
  ];
  return (
    <section className="md:mx-10 mx-5 mt-28">
      <div className="md:w-[90%] w-[100%] mx-auto">
        <h2 className="header">Our Concept Innovations</h2>
        <p className="subHeading md:w-[80%]">
          We have proprietary concept innovations that will support the startup
          ecosystem, support solution-providers/entrepreneurs and ultimately
          help democratize success;
        </p>
        <div className="mt-10 flex flex-wrap gap-10 justify-center">
          {cards.map((card, index) => (
            <Card key={index} title={card.title} text={card.text} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurConcept;
