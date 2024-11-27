import "./App.css";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import About from "./components/section/about";
import Faq from "./components/section/faq";
import Features from "./components/section/features";
import Hero from "./components/section/hero";

function App() {
  return (
    <div className="w-full flex flex-col ">
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Faq />
      <Footer />
    </div>
  );
}

export default App;
