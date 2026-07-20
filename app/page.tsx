import { Encryption } from "@/components/main/encryption";
import { Hero } from "@/components/main/hero";
import { Projects } from "@/components/main/projects";
import { Skills } from "@/components/main/skills";
import { Education } from "@/components/main/education";
import { Achievements } from "@/components/main/achievements";
import { About } from "@/components/main/about";
import { Metrics } from "@/components/main/metrics";
import { Experience } from "@/components/main/experience";
import { Contact } from "@/components/main/contact";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero />
        <About />
        <Achievements />
        <Skills />
        <Metrics />
        <Experience />
        <Education />
        <Projects />
        <Contact />
      </div>
    </main>
  );
}
