import { Form, Meeting, User, Document } from "@/icons";
import BottomLink from "../bottomLink";
import Card from "./card";
import { useRef } from "react";
import ScrollArrows from "./scrollArrows";

type Props = {};

const EirProgram = (props: Props) => {
  const containerRef: any = useRef(null);

  const cards = [
    {
      icon: <Form />,
      title: "Application and Selection",
      text: "Begin your journey by completing our straightforward application form. Share insights into your entrepreneurial background, expertise, and your vision for supporting the success of our portfolio companies. Our dedicated selection committee, comprised of key stakeholders at SINC Partners, will carefully review your application.",
    },
    {
      icon: <Meeting />,
      title: "Alignment Meeting and Proposal Submission",
      text: "If your application stands out, we'll invite you to an alignment meeting. This is an opportunity to discuss the goals of our EIR program and explore how your expertise aligns with the needs of our portfolio companies. Following the alignment meeting, submit a formal proposal outlining your intended contributions and how you envision adding significant value to our portfolio companies.",
    },
    {
      icon: <Document />,
      title: "Negotiation and Agreement",
      text: "Upon successful alignment and proposal review, we'll engage in discussions to finalize the terms of your EIR role. This includes the duration, expectations, and any compensation or equity arrangements. Once terms are agreed upon, we'll draft a formal agreement outlining the specifics of your EIR engagement, including reporting structures, responsibilities, and the support/resources provided by SINC Partners.",
    },
    {
      icon: <User />,
      title: "Onboarding and Integration",
      text: "Congratulations! As an accepted EIR, you'll undergo an onboarding process to familiarize yourself with the SINC Partners ecosystem, our portfolio companies, and key team members. Facilitated introductions will ensure a seamless integration between you and relevant portfolio companies, setting clear expectations for collaboration.",
    },
  ];
  return (
    <section className="md:mx-10 mx-5 mt-28">
      <div className="md:w-[90%] w-[100%] mx-auto">
        <h2 className="header">
          Join Our Entrepreneur In Residence (EIR) Program
        </h2>
        <p className="subHeading md:w-[80%]">
          Our EIR program is our structured 3 months un-paid program designed to
          help us have a pipeline of business and technical cofounders who can
          run the venture of choice as CEO & CTO owning 20% equity each.
        </p>
      </div>
      <div
        className="mt-10 flex overflow-x-auto scrollbar gap-10"
        ref={containerRef}
      >
        {cards.map((card, index) => (
          <div key={index}>
            <Card icon={card.icon} title={card.title} text={card.text} />
          </div>
        ))}
      </div>
      <BottomLink text="Support the Future" />
      <ScrollArrows containerRef={containerRef} />
    </section>
  );
};

export default EirProgram;
