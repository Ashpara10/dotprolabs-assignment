import { cn } from "@/lib/utils";
import { FC } from "react";

type GradientBallProps = {
  className?: string;
};
const GradientBall: FC<GradientBallProps> = ({ className }) => {
  return (
    <div
      className={cn(
        " w-[300px] h-[300px] blur-[210px] rounded-full bg-blur-ball -z-10 md:z-20",
        className
      )}
    />
  );
};

export default GradientBall;
