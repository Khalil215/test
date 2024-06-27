import BottomLink from "../bottomLink";
import Card from "./card";

type Props = {};

const CoFound = (props: Props) => {
  const cards = [
    {
      color: "#303030",
      number: "1",
      title: "We Ideate",
      text: "We internally generate concepts and ideas that help solve problems in our thesis areas, after which we proceed to develop a nano/micro MVP (usually having as low as 30 functions to as high as 100 functions) of the product that we take to the market.",
    },
    {
      color: "#F47733",
      number: "2",
      title: "You Validate",
      text: "You join our 3 months  inResidence program as a business expert to run the operations or as a technical expert to further the development and validate the idea with an average monthly revenue of $1k or 10,000 users and/or an MVP of at least 150 functions ",
    },
    {
      color: "#FF78BF",
      number: "3",
      title: "You Co-own",
      text: "After successful validation and demo day at the end of the EIR program, we move those with perfect fit to become co-founders of the product they validated as CEO & CTO, each owning 20% of the venture.",
    },
  ];
  return (
    <section className="md:mx-10 mx-5 mt-28">
      <div className="md:w-[90%] w-[100%] mx-auto">
        <h2 className="header">Co-found With Us</h2>
        <p className="subHeading">
          We seek to collaborate with visionary individuals who are solving
          similar problems of helping entrepreneurs succeed
        </p>
        <div className="cardFlex">
          {cards.map((card, index) => (
            <Card
              key={index}
              color={card.color}
              number={card.number}
              title={card.title}
              text={card.text}
            />
          ))}
        </div>
      </div>
      <BottomLink text="Build your dream"/>
    </section>
  );
};

export default CoFound;
