import { RightArrow, LeftArrow } from "@/icons";
import { useEffect } from "react";
type Props = {
  containerRef: any;
};

const ScrollArrows = ({ containerRef }: Props) => {
  const scrollLeft = () => {
    containerRef.current.scrollBy({
      left: -350,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    containerRef.current.scrollBy({
      left: 350,
      behavior: "smooth",
    });
  };
  return (
    <div className="flex justify-center align-center gap-[70px] mt-10">
      <div className="hover:cursor-pointer" onClick={scrollLeft}>
        <LeftArrow />
      </div>
      <div className="hover:cursor-pointer" onClick={scrollRight}>
        <RightArrow />
      </div>
    </div>
  );
};

export default ScrollArrows;
