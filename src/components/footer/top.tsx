import React from "react";

type Props = {};

const Top = (props: Props) => {
  return (
    <div className="md:pl-32 pl-5 pt-9 pb-6 border-b-[1px] border-b-[#676767]">
      <p className="text-[50px] font-medium mb--3">Newsletter</p>
      <p className="md:w-[453px]">
        Get the latest about SINC Partners, our startup Incubator program,
        Portfolio company offerings - straight into your inbox.
      </p>
      <div className="relative flex w-full max-w-[468px] mt-8">
        <input
          type="email"
          placeholder="Enter your email address"
          className="pr-20 bg-[#212121] rounded-full border-[1px] border-[#676767] px-5 py-3 font-medium w-full"
        />
        <button className="absolute right-[1px] top-[1px] rounded-full text-[#212121] bg-white px-5 py-3 font-bold">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default Top;
