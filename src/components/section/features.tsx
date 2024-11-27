import FeatureCard, { FeatureCardProps } from "../feature-card";

const Features = () => {
  const features: FeatureCardProps[] = [
    {
      icon: "/f1.png",
      title: "Cheapest TXs",
      description:
        "Exchange popular digital currencies at the cheapest possible transaction price",
    },
    {
      icon: "/f4.png",
      title: "CerTIK ",
      description:
        "We are Audited by Certik. CertiK is the leading security-focused ranking platform to ",
    },
    {
      icon: "/f2.png",
      title: "No Contract Sells",
      description: "No contract sells to fund the marketing wallets",
    },
    {
      icon: "/f3.png",
      title: "CrossDex Support",
      description:
        "Exchange popular digital currencies at the cheapest possible transaction price",
    },
  ];
  return (
    <section
      id="features"
      className="w-full flex items-center min-h-[80vh] justify-center mt-10 pb-10 px-4"
    >
      <div className="max-w-6xl w-full flex flex-col items-center justify-center">
        <h2 className=" text-4xl md:text-5xl font-neuman-ultrabold md:font-semibold lg:font-bold flex items-center justify-center">
          Our <span className="ml-3 text-[#E4B40D]">Features</span>
        </h2>
        <div className="w-full  flex flex-col md:flex-row gap-4 md:gap-0 items-center justify-evenly mt-16">
          {features.map((feature, index) => {
            return (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
