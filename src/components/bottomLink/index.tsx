import { RightArrowS } from "@/icons";

type Props = {
  text: string;
};

const BottomLink = ({ text }: Props) => {
  return (
    <div className="mt-10 flex justify-center items-center">
      <div className="flex gap-2 hover:cursor-pointer">
        <p className="underline font-semibold">{text}</p>
        <RightArrowS />
      </div>
    </div>
  );
};

export default BottomLink;
