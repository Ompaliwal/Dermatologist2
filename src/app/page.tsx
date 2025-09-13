import Hero from "@/app/hero/page";
import Image from "next/image";
import ServicesPage from "./services/page";
import DoctorsPage from "./doctor/page";
import Contact from "./contact/page";
import About from "./about/page";

export default function Home() {
  return (
  <>
  <Hero/>
  <About/>
  <ServicesPage/>
  <DoctorsPage/>
  <Contact/>
  </>
  );
}
