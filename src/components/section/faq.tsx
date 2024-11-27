import GradientBall from "../gradient-ball";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

const Faq = () => {
  const faqs = [
    {
      question: "How do I get a Referral Code?",
      answer:
        "You receive your rewards in ETH instantly once someone you refer makes a transaction!",
    },
    {
      question: `Do I get rewarded in tokens or ETH when I refer buyers?`,
      answer:
        "You receive your rewards in ETH instantly once someone you refer makes a transaction!",
    },
    {
      question: "How do I get a Referral Code?",
      answer:
        "You receive your rewards in ETH instantly once someone you refer makes a transaction!",
    },
  ];

  return (
    <section
      id="faqs"
      className="w-full relative h-screen mt-12 flex items-center px-4 justify-center"
    >
      <Accordion
        className="max-w-3xl z-50 w-full font-neuman-regular rounded-xl pb-10 bg-[#F7F9FF05]/5"
        type="single"
        collapsible
      >
        <div className="w-full py-6 border-b border-[#F7F9FF05]/15 ">
          <h2 className=" text-3xl text-[#E4B40D] font-neuman-ultrabold md:font-semibold lg:font-bold flex items-center justify-center">
            FAQs
          </h2>
        </div>
        {faqs.map((faq, index) => {
          return (
            <AccordionItem
              value={`item-${index}`}
              className="w-full px-6  lg:px-12 py-2 border-b border-[#F7F9FF05]/15"
            >
              <AccordionTrigger className="md:text-lg hover:no-underline ">
                {faq.question}{" "}
              </AccordionTrigger>
              <AccordionContent className="py-3 pb-8 md:text-lg font-light leading-snug opacity-80">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>

      <GradientBall className="hidden md:flex absolute top-20 right-10 w-[200px] h-[200px] blur-[220px] " />
      <GradientBall className="absolute bottom-6 left-10  w-[200px] h-[200px] blur-[200px] " />
    </section>
  );
};

export default Faq;
