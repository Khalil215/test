import { Nigeria } from "@/icons";
import React from "react";

type Props = {};

const Bottom = (props: Props) => {
  return (
    <div className="md:pl-32 pl-5 pt-9 pb-3">
      <div className="flex flex-col md:flex-row gap-4 md:gap-0 justify-between md:items-center">
        <p className="text-14px">
          Guaranteed 2x on your service or cash investment, usually been the
          first to invest.{" "}
          <span className="font-medium">
            Get in early and SINC your guaranty!
          </span>
        </p>
        <div>
          <img src="/images/gasus.png" alt="gasus logo" />
          <p>
            We are a business built on the foundation of Christian values and
            belief
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between gap-4 md:gap-0 mt-7">
        <p className="font-medium">
          2023 SINC Partners Ltd. All rights reserved
        </p>
        <div className="flex gap-4 items-center">
          <a href="#" className="underline">
            Privacy Policy
          </a>
          <a href="#" className="underline">
            Terms of Service
          </a>
          <a href="#" className="underline">
            Security
          </a>
        </div>
        <div className="flex gap-4">
          <img src="/images/facebook.png" alt="facebook" />
          <img src="/images/twitter.png" alt="twitter" />
          <img src="/images/insta.png" alt="insta" />
          <img src="/images/linkedin.png" alt="linkedin" />
          <img src="/images/medium.png" alt="medium" />
          <img src="/images/youtube.png" alt="youtube" />
          <img src="/images/chat.png" alt="chat" />
        </div>
      </div>
      <p className="flex justify-center items-center gap-2">
        Web in Nigeria <Nigeria />{" "}
      </p>
    </div>
  );
};

export default Bottom;
