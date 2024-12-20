// * COMPONENTS IMPORTS
import ThreeColumnLayout from "./components/layout/ThreeColumnLayout";
import Services from "./components/sections/Services";
import Projects from "./components/sections/Projects";
import InDevelopment from "./components/sections/InDevelopment";

export default function Home() {
  return (
    <main className="min-h-screen bg-blue-950 text-white">
      <ThreeColumnLayout
        leftColumn={<Services />}
        centerColumn={<Projects />}
        rightColumn={<InDevelopment />}
      />
    </main>
  );
}
