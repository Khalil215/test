import Card from "./card";
import BottomLink from "../bottomLink";

type Props = {};

const Equity = (props: Props) => {
  const cards = [
    {
      image: "/images/skin.png",
      description:
        "This company is a SAAS Startup that builds AI copy generator...",
      position: "Chief Executive Officer",
      location: "Abuja, Nigeria",
      industry: "On-demand print",
      equity: "1.2%",
      stipend: "NGN 200,000/mth ",
      deadline: "24th, January 2024",
      role: "Full-time",
    },
    {
      image: "/images/kreeca.png",
      description:
        "This company is a SAAS Startup that builds AI copy generator...",
      position: "UX Strategist",
      location: "Abuja, Nigeria",
      industry: "Fintech",
      equity: "1.2%",
      stipend: "NGN 200,000/mth ",
      deadline: "24th, January 2024",
      role: "Full-time",
    },
    {
      image: "/images/krow.png",
      description:
        "This company is a SAAS Startup that builds AI copy generator...",
      position: "CTO & Head of innovations",
      location: "Abuja, Nigeria",
      industry: "On-demand print",
      equity: "1.2%",
      stipend: "NGN 200,000/mth ",
      deadline: "24th, January 2024",
      role: "Full-time",
    },
    {
      image: "/images/wettaa.png",
      description:
        "This company is a SAAS Startup that builds AI copy generator...",
      position: "Backend Developer",
      location: "Abuja, Nigeria",
      industry: "On-demand print",
      equity: "1.2%",
      stipend: "NGN 200,000/mth ",
      deadline: "24th, January 2024",
      role: "Full-time",
    },
  ];
  return (
    <section className="md:mx-10 mx-5 mt-28">
      <div className="md:w-[90%] w-[100%] mx-auto">
        <h2 className="header">Equity Jobs</h2>
        <div className="subHeading md:w-[80%]">
          <p>
            See companies and startups offering equity or a mix of cash and
            equity for very important position in their company
          </p>
        </div>
        <div className="mt-10">
          <div className="cardFlex">
            {cards.map((card, index) => (
              <Card
                key={index}
                image={card.image}
                description={card.description}
                position={card.position}
                location={card.location}
                industry={card.industry}
                equity={card.equity}
                stipend={card.stipend}
                deadline={card.deadline}
                role={card.role}
              />
            ))}
          </div>
        </div>
      </div>
      <BottomLink text="See More Equity Jobs" />
    </section>
  );
};

export default Equity;
