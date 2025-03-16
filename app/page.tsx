import Image from "next/image";
import Topbar from "./components/topbar";
import HomePage from "./components/home";
import About from "./components/about";
import Services from "./components/services"
import ContactUs from "./components/contactUs";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Topbar/>
      <HomePage/>
      <About/>
      <Services/>
      <ContactUs/>
    </div>
  );
}
