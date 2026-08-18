import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Mission } from "@/components/sections/Mission";
import { Vision } from "@/components/sections/Vision";

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Vision />
      <Mission />
    </main>
  );
}
