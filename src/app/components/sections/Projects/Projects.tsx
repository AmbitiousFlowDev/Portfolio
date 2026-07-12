import { FadeUp } from "../../animations/FadeUp";
import { projects } from "../../../constants/projects";
import { motion } from "motion/react";
import { ArrowUpRight, Github } from "lucide-react";
import { SectionLabel } from "../../typography/SectionLabel";
import { ProjectCard } from "./ProjectCard";

export function Projects() {
  return (
    <section id="projects" className="py-24 md:py-36 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        <FadeUp>
          <SectionLabel number="03" title="PROJECTS" />
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 2) * 0.09 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>

        <FadeUp delay={0.12} className="mt-10 text-center">
          <a
            href="https://github.com/AmbitiousFlowDev"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 text-sm font-bold tracking-[0.25em] uppercase border-2 border-black transition-colors hover:bg-black hover:text-white"
          >
            <Github size={14} /> ALL REPOSITORIES <ArrowUpRight size={12} />
          </a>
        </FadeUp>
      </div>
    </section>
  );
}
