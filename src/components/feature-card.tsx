import { FC } from "react";
import { Card } from "./ui/card";

export type FeatureCardProps = {
  title: string;
  description: string;
  icon: string;
};

const FeatureCard: FC<FeatureCardProps> = ({ description, icon, title }) => {
  return (
    <Card className="bg-white/5 card-shine-effect md:max-w-[250px] rounded-2xl flex flex-col items-start justify-between h-[250px]  py-5 px-4 text-white w-full border-white/15">
      <img src={icon} alt={title} className="size-14 mt-2" />
      <div className="flex flex-col px-1 h-full items-start justify-center">
        <h3 className="text-xl mt-6">{title}</h3>
        <p className="leading-snug mt-2 opacity-80">{description}</p>
      </div>
    </Card>
  );
};

export default FeatureCard;
