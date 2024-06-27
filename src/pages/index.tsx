import React from "react";
import {
  HeroSection,
  Network,
  AreaOfFocus,
  OurConcept,
  OurServices,
  OurStudio,
  CoFound,
  EirProgram,
  SnicInvestors,
  Equity,
  Blogs,
  Featured,
} from "../components";
import Head from "next/head";

type Props = {};

const index = (props: Props) => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <div>
        <HeroSection />
        <Network />
        <AreaOfFocus />
        <OurConcept />
        <OurServices />
        <OurStudio />
        <CoFound />
        <EirProgram />
        <SnicInvestors />
        <Equity />
        <Blogs />
        <Featured />
      </div>
    </>
  );
};

export default index;
