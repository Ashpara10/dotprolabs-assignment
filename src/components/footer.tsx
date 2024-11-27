const Footer = () => {
  const navLinks = [
    {
      name: "About Us",
      href: "/#about",
    },
    {
      name: "Roadmap",
      href: "/#features",
    },
    {
      name: "FAQs",
      href: "/#faqs",
    },
    {
      name: "Contact Us",
      href: "/#contact",
    },
  ];
  return (
    <footer
      id="contact"
      className="bg-[#051422] md:h-[40vh] w-full z-50 flex items-center justify-center px-4 py-8"
    >
      <div className="max-w-7xl w-full flex flex-col md:flex-row items-start md:items-center justify-center">
        <div className="w-1/5 flex items-center justify-center">
          <img src="src/assets/moon.png" className="aspect-square " />
        </div>
        <ul className="w-full flex flex-col md:flex-row list-none gap-2 ml-4 md:items-center items-start justify-evenly">
          {navLinks.map((link, i) => {
            return (
              <li
                key={i}
                className="font-neuman-regular font-bold md:font-normal md:font-neuman-ultrabold "
              >
                <a href={link?.href}>{link?.name}</a>
              </li>
            );
          })}
        </ul>
        <div className="flex px-4 w-full mt-8 md:w-1/5 flex-col md:items-center items-start justify-center">
          <h4 className=" text-2xl font-neuman-ultrabold  flex items-center justify-center">
            Contact <span className="ml-3 text-[#E4B40D]">Us</span>
          </h4>
          <div className="flex items-center justify-center  mt-4 gap-6">
            <img src="/src/assets/telegram.svg" />
            <img src="/src/assets/reddit.svg" />
            <img src="/src/assets/twitter.svg" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
