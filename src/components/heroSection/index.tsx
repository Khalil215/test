import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
type Props = {};

const HeroSection = (props: Props) => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 2000,
  };
  const contentArray = [
    {
      text: "SINC Partners is a service incubation company",
      subText:
        "Connecting experts in product development and growth marketing willing to offer their services to amazing startups in exchange for minute equity (usually 0.5% to 2%).",
      imgSrc: "/images/hero1.png",
    },
    {
      text: "We are big on these 3 things;",
      subText:
        "✓ Service Incubation & Ecosystem Advocacy \n ✓ Building SAAS & Marketing Tech Platforms \n ✓ Institutional Innovations",
      imgSrc: "/images/hero2.png",
    },
    {
      text: "Come with an idea, leave with a company.",
      subText:
        "You, alongside seasoned service partners and investors, expedite the growth and market entry of your startup.",
      imgSrc: "/images/hero3.png",
    },
  ];
  return (
    <Slider {...settings}>
      {contentArray.map((content, index) => (
        <div key={index}>
          <div className="flex flex-col md:flex-row h-[600px] md:h-[477px] bg-white">
            <div className="w-full md:w-[50%] flex justify-center items-center">
              <div className="max-w-[350px] py-10">
                <p className="md:text-[28px] text-[24px] font-medium">
                  {content.text}
                </p>
                <p className="md:text-[20px] text-[16px] font-normal">
                  {content.subText}
                </p>
                <button className="px-[24px] py-[10px] rounded-[24px] bg-[#303030] text-white mt-5">
                  SINC With Us
                </button>
              </div>
            </div>
            <img
              className="w-full md:w-[50%] object-cover hidden md:block"
              src={content.imgSrc}
              alt={`image ${index + 1}`}
            />
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default HeroSection;
