import { Nav } from "./components/sections/Nav/Nav";
import { Hero } from "./components/sections/Hero/Hero";
import { About } from "./components/sections/About/About";
import { Skills } from "./components/sections/Skills/Skills";
import { Projects } from "./components/sections/Projects/Projects";
import { Experience } from "./components/sections/Experience/Experience";
import { Education } from "./components/sections/Education/Education";
import { Contact } from "./components/sections/Contact/Contact";
import { Footer } from "./components/sections/Footer/Footer";
import { JSX } from "react";

/**
 * Root application component.
 *
 * Composes the portfolio as a single-page layout by rendering each
 * section in its intended order.
 *
 * @returns The application's main page.
 */
export default function App(): JSX.Element {
  return (
    <main className="overflow-x-hidden bg-white text-[#111111]">
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Contact />
      <Footer />
    </main>
  );
}
