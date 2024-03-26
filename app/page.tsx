
import About from '@/components/about';
import Intro from '@/components/intro'
import Projects from '@/components/projects';
import SectionDivider from '@/components/section-divider';
import Image from 'next/image'
import Skills from "@/components/skills";
import Experience from "@/components/experience";
import Contact from '@/components/contact';
export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center px-4">
      <Intro />
      <SectionDivider />
      <About />
      <Projects/>
      <Skills/>
      <Experience />
      <Contact/>
    </main>
  );
}
