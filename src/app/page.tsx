// * COMPONENTS IMPORTS
import ThreeColumnLayout from "./components/layout/ThreeColumnLayout";
import Services from "./components/sections/Services";
import Projects from "./components/sections/Projects";
import InDevelopment from "./components/sections/InDevelopment";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";

export default function Home() {
  return (
    <main className="min-h-screen bg-blue-950 text-white">
      <Hero />
      <ThreeColumnLayout
        leftColumn={<Services />}
        centerColumn={<Projects />}
        rightColumn={<InDevelopment />}
      />
      <Footer companyName="Sidney Thomas" year={new Date().getFullYear()} />
    </main>
  );
}
