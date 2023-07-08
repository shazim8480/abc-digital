import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Featured from "./components/Featured";
import Services from "./components/Services";
import AnimatedImage from "./components/AnimatedImage";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-24 px-72">
      <Navbar />
      <Hero />
      <AnimatedImage />
      <Featured />
      <Services />
      <Footer />
    </main>
  );
}
