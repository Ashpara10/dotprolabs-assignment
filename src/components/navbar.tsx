import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import { FC, ReactNode } from "react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "./ui/sheet";

const Navbar = () => {
  const navLinks = [
    {
      name: "Home",
      href: "/#",
    },

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
    <header className="w-full flex absolute z-50 top-0 items-center justify-center md:pt-6 md:pb-3 px-2">
      <nav className="md:max-w-7xl w-full flex items-center justify-center">
        <div className="w-full flex items-center justify-between ">
          <div className="pt-3">
            <img src="src/assets/logo3.png" className="hidden md:flex" />
            <img
              src="src/assets/moon.png"
              className="flex md:hidden aspect-square size-24"
            />
          </div>
          <Navlinks navLinks={navLinks} className="hidden md:flex" />
        </div>
        <div className="w-1/2 flex items-center justify-end">
          <Button variant="default" className="md:flex hidden">
            Connect Wallet
          </Button>
          <SlidingMenu navLinks={navLinks}>
            <Button
              variant="outline"
              size={"icon"}
              className="md:hidden flex p-2 rounded-xl"
            >
              <Menu />
            </Button>
          </SlidingMenu>
        </div>
      </nav>
    </header>
  );
};

type NavlinksProps = {
  navLinks: {
    name: string;
    href: string;
  }[];
  className?: string;
};

const Navlinks: FC<NavlinksProps> = ({ navLinks, className }) => {
  return (
    <ul
      className={cn(
        "list-none flex gap-x-4 items-center justify-start",
        className
      )}
    >
      {navLinks.map((link, i) => {
        return (
          <li key={i} className={cn("font-neuman-ultrabold px-4")}>
            <a href={link?.href}>{link?.name}</a>
          </li>
        );
      })}
    </ul>
  );
};

const SlidingMenu = ({
  children,
  navLinks,
}: {
  children: ReactNode;
  navLinks: NavlinksProps["navLinks"];
}) => {
  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent className="bg-[#051422] border-white/5 flex flex-col items-center justify-between">
        <div className="w-full">
          <SheetHeader>
            <img src="src/assets/moon.png" className="aspect-square size-24" />
          </SheetHeader>
          <Navlinks
            navLinks={navLinks}
            className="flex-col items-start gap-y-6"
          />
        </div>
        <div className="w-full">
          <Button variant="default" className="w-full rounded-lg">
            Connect Wallet
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default Navbar;
