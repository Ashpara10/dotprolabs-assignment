import GradientBall from "../gradient-ball";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";

const About = () => {
  return (
    <section
      id="about"
      className="w-full relative px-4 flex items-center justify-center h-screen mt-16"
    >
      <div className="max-w-7xl w-full flex flex-col items-center justify-center">
        <h2 className="w-full  text-4xl md:text-5xl font-neuman-ultrabold font-semibold flex items-center justify-start">
          Our <span className="ml-3 text-[#E4B40D]">MoonEx</span>?
        </h2>
        <div className="w-full mt-6 rounded-xl bg-white/5 p-5">
          <Table className="w-full ">
            <TableHeader className="w-full ">
              <TableHead className="w-[40%] px-2 text-left">
                <img className="" src="/Comparison.png" />
              </TableHead>
              <TableHead className="px-2">
                <img className="hidden md:flex" src="/logo2.png" />
                <img
                  className="md:hidden flex aspect-square size-16"
                  src="/moonex.png"
                />
              </TableHead>
              <TableHead className="px-2 ">
                <img className="hidden md:flex" src="/uniswap.png" />
                <img
                  className="md:hidden flex size-16 aspect-square"
                  src="/uniswap-logo.png"
                />
              </TableHead>
            </TableHeader>
            <TableBody className="w-full">
              <TableRow>
                <TableCell className="w-[40%] text-start px-4">
                  1. Point no one this
                </TableCell>
                <TableCell className="">
                  <img src="/check_bold.png" />
                </TableCell>
                <TableCell>
                  <img src="/coolicon.png" />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="w-[40%] text-start px-4">
                  2. Point no two this
                </TableCell>
                <TableCell>
                  <img src="/check_bold.png" />
                </TableCell>
                <TableCell>
                  <img src="/coolicon.png" />
                </TableCell>
              </TableRow>
              <TableRow className="">
                <TableCell className="w-[40%] text-start px-4">
                  3. Point no two this
                </TableCell>
                <TableCell>
                  <img src="/check_bold.png" />
                </TableCell>
                <TableCell>
                  <img src="/coolicon.png" />
                </TableCell>
              </TableRow>
              <TableRow className="w-full">
                <TableCell className="w-[40%] text-start px-4">
                  4. Point no two this
                </TableCell>
                <TableCell>
                  <img src="/check_bold.png" />
                </TableCell>
                <TableCell>
                  <img src="/coolicon.png" />
                </TableCell>
              </TableRow>
              <TableRow className="w-full">
                <TableCell className="w-[40%] text-start px-4">
                  5. Point no two this
                </TableCell>{" "}
                <TableCell>
                  <img src="/check_bold.png" />
                </TableCell>
                <TableCell>
                  <img src="/coolicon.png" />
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
      <GradientBall className="absolute bottom-20 left-[30%] w-[200px] h-[200px] blur-[200px]" />
      <GradientBall className="absolute top-[30%] right-0 w-[200px] h-[200px] blur-[200px]" />
    </section>
  );
};

export default About;
