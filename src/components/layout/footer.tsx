import React from "react";
import { Top, Mid, Bottom } from "../footer";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="bg-[#212121] mt-28 pt-7 text-white">
      <Top />
      <Mid />
      <Bottom />
    </footer>
  );
};

export default Footer;
