import GradientBall from "../gradient-ball";
import { Button } from "../ui/button";

const Hero = () => {
  return (
    <section className="w-full flex items-center justify-start relative h-screen md:h-[120vh] mt-10 ">
      <div className="w-full px-4 md:w-3/4 xl:w-3/5 flex  items-center justify-center z-30">
        <div className="flex flex-col ">
          <h2 className="flex flex-col font-neuman-ultrabold text-4xl md:text-5xl lg:text-6xl md:font-bold lg:font-extrabold">
            Trusted Multi-Chain <br className="hidden md:flex" />
            <span>
              <span className="text-[#E4B40D]">DEX</span> Platform
            </span>
          </h2>
          <span className="text-lg md:text-xl mt-3 opacity-80">
            Trade, earn, and own crypto on the all-in-one multi-chain DEX
          </span>
          <div className="flex md:flex-row flex-col items-center justify-center md:justify-start mt-6 gap-4">
            <Button className="md:w-fit px-8 w-full" variant="default">
              Connect Wallet
            </Button>
            <Button className="md:w-fit px-8 w-full" variant="outline">
              Trade Crypto
            </Button>
          </div>
        </div>
      </div>
      {/* Circles Bg */}
      <div className="absolute top-16 md:-top-16 -z-50 md:right-0 md:left-0 overflow-hidden">
        <img
          src="./src/assets/circles.png"
          alt="circle-patter-bg"
          className="h-full w-full "
        />
      </div>
      {/* Circles Bg */}
      {/* Gradient Ball */}
      <GradientBall className="hidden md:flex absolute top-0 left-10 " />

      <GradientBall className="hidden md:flex absolute bottom-16 size-[250px] right-10 " />
      {/* Gradient Ball */}
      {/* star */}
      <img
        src="./src/assets/star.png"
        className="absolute left-[10%] top-[16%] size-12 md:size-auto md:top-[20%]"
      />
      {/* star */}
      {/* star */}
      <img
        src="./src/assets/star.png"
        className="absolute  right-[14%] bottom-[15%]"
      />
      {/* star */}
      {/* star */}
      <img
        src="./src/assets/star2.png"
        className="absolute  right-[15%] top-[10%]"
      />
      {/* star */}
      <div className="absolute right-0 hidden md:flex">
        <img
          src="./src/assets/bg-gradient.png"
          alt="hero"
          className="h-full w-full"
        />
      </div>
    </section>
  );
};

export default Hero;
