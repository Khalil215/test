import React from "react";
import Table from "./table";

type Props = {};

const SnicInvestors = (props: Props) => {
  const cards = [
    {
      title: "Deal 1",
      list: [
        {
          normal: "✓ Idea Stage:",
          bold: "$5k for 5% Equity ",
        },
        {
          normal: "✓ Expected Revenue at This Stage:",
          bold: "$0/mth ",
        },
        {
          normal: "✓ Duration of Raise:",
          bold: "1mth ",
        },
        {
          normal: "✓ Who Can Invest:",
          bold: "People with Domain Expertise and Advisors",
        },
      ],
    },
    {
      title: "Deal 2",
      list: [
        {
          normal: "✓ Build Stage:",
          bold: " $25k worth of service for 10% Equity",
        },
        {
          normal: "✓ Expected Revenue at This Stage:",
          bold: "$100+/mth",
        },
        {
          normal: "✓ Duration of Raise:",
          bold: "1-3mths",
        },
        {
          normal: "✓ Who Can Invest:",
          bold: " Developers, Engineers, Growth Marketers",
        },
      ],
    },
    {
      title: "Deal 3",
      list: [
        {
          normal: "✓ Validation Stage:",
          bold: "$50k for 5% Equity",
        },
        {
          normal: "✓ Expected Revenue at This Stage:",
          bold: " $1k+/mth",
        },
        {
          normal: "✓ Duration of Raise:",
          bold: " 3-6mths",
        },
        {
          normal: "✓ Who Can Invest:",
          bold: " Everyone",
        },
      ],
    },
    {
      title: "Deal 4",
      list: [
        {
          normal: "✓ Traction Stage:",
          bold: "$125k worth of service for 5% Equity",
        },
        {
          normal: "✓ Expected Revenue at This Stage:",
          bold: " $5k+/mth",
        },
        {
          normal: "✓ Duration of Raise:",
          bold: " 6-12mths",
        },
        {
          normal: "✓ Who Can Invest:",
          bold: " Media, Influencers, Celebrity, Platform Owners",
        },
      ],
    },
  ];
  const cards2 = [
    {
      title: "Deal 5",
      list: [
        {
          normal: "✓ Pre-seed Stage:",
          bold: "$1.5M for 10% Equity",
        },
        {
          normal: "✓ Expected Revenue at This Stage:",
          bold: " $50k+/mth",
        },
        {
          normal: "✓ Duration of Raise:",
          bold: " 6-18mths",
        },
        {
          normal: "✓ Who Can Invest:",
          bold: "Angel Investors, VCs, PE, Institutions",
        },
      ],
    },
    {
      title: "Deal 5",
      list: [
        {
          normal: "✓ Seed Stage:",
          bold: " $7.5M for 20% Equity",
        },
        {
          normal: "✓ Expected Revenue at This Stage:",
          bold: "$250k+/mth",
        },
        {
          normal: "✓ Duration of Raise:",
          bold: "12-24mths",
        },
        {
          normal: "✓ Who Can Invest:",
          bold: "VCs, PE, Institutions ",
        },
      ],
    },
    {
      title: "Deal 7",
      list: [
        {
          normal: "✓ IPO Stage:",
          bold: " $1.5B for 20% Equity",
        },
        {
          normal: "✓ Expected Revenue at This Stage:",
          bold: "  $1M+/mth",
        },
        {
          normal: "✓ Duration of Raise:",
          bold: " 18-36mths",
        },
        {
          normal: "✓ Who Can Invest:",
          bold: " The Public",
        },
      ],
    },
  ];
  return (
    <section className="md:mx-10 mx-5 mt-28">
      <div className="md:w-[90%] w-[100%] mx-auto">
        <h2 className="header">SINC Investors Network</h2>
        <div className="subHeading md:w-[80%]">
          <p>
            Our deals are structured not just to take in investments but to
            onboard owners passionate about our solutions. Our portfolio
            companies are valued at $50k at start, with these low valuation, you
            are guaranteed at least 2x-5x, usually been the first to invest.{" "}
          </p>
          <p>
            <span className="font-bold">Disclaimer:</span> These deal flows is a
            statement of our projections and may differ from stage to stage and
            from venture to venture and the guarantee is for deal 1, usually
            the first to invest
          </p>
        </div>
        <div className="mt-10">
          <p className="text-[20px]">
            <span className="font-semibold">
              Micro Angel Investors & Service incubators{" "}
            </span>
            (Invest from $500 & above)
          </p>
          <div className="mt-5 w-full grid grid-cols-2 lg:grid-cols-4 border-l-0 border-r-0">
            {cards.map((card, index) => (
              <Table key={index} title={card.title} lists={card.list} />
            ))}
          </div>
        </div>

        <div className="mt-10">
          <p className="text-[20px]">
            <span className="font-semibold">
              Angel Investors & Venture Capital
            </span>
            (Invest from $500 & above)
          </p>
          <div className="mt-5 w-full grid grid-cols-2 lg:grid-cols-4 border-l-0 border-r-0">
            {cards2.map((card, index) => (
              <Table key={index} title={card.title} lists={card.list} />
            ))}
            <div className="border-y-[.5px] h-full border-y-[#A4A4A4] p-[15px] h-[212px] border-l-[.5px] border-l-[#A4A4A4] text-white">
              <div className="bg-[#101010] p-4">
                <p>Work with Service Incubators (SINC) to expedite your time to market</p>
                <button className="bg-[#303030] px-[12px] py-[15px] rounded-full mt-5">Join SINC Network</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SnicInvestors;
