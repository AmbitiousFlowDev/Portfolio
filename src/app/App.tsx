import { useState, useEffect, type ReactNode } from "react";
import {
  Github,
  Mail,
  MapPin,
  Menu,
  X,
  ArrowUpRight,
  Star,
  ExternalLink,
  Download,
} from "lucide-react";
import { motion } from "motion/react";

import { projects } from "./constants/projects";
import { educationItems } from "./constants/educationItems";
import { skillGroups } from "./constants/skillGroups";
import { timelineItems } from "./constants/timelineItems";
import { theme } from "./constants/theme";

import { FadeUp } from "./components/animations/FadeUp";

const { ACCENT, ACCENT_ON_DARK, BLACK, DISPLAY_FONT } = theme;



function SectionLabel({
  number,
  title,
  light = false,
}: {
  number: string;
  title: string;
  light?: boolean;
}) {
  return (
    <div className="flex items-center gap-4 mb-16">
      <span
        className="font-mono text-xs tracking-[0.45em] uppercase shrink-0 font-semibold"
        style={{ color: light ? ACCENT_ON_DARK : ACCENT }}
      >
        — {number} —
      </span>
      <span
        className="uppercase leading-none tracking-tight"
        style={{
          fontFamily: DISPLAY_FONT,
          fontWeight: 900,
          fontSize: "clamp(36px, 6vw, 72px)",
          color: light ? "#ffffff" : BLACK,
        }}
      >
        {title}
      </span>
      <div
        className="flex-1 h-px ml-4"
        style={{
          background: light ? "rgba(255,255,255,0.15)" : "rgba(0,0,0,0.12)",
        }}
      />
    </div>
  );
}

function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "#ffffff" : "rgba(255,255,255,0.92)",
        backdropFilter: "blur(10px)",
        borderBottom: `2px solid ${scrolled ? BLACK : "rgba(0,0,0,0.08)"}`,
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="uppercase tracking-[0.15em] transition-colors"
          style={{
            fontFamily: DISPLAY_FONT,
            fontWeight: 900,
            fontSize: "18px",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = ACCENT)}
          onMouseLeave={(e) => (e.currentTarget.style.color = BLACK)}
        >
          M.LAFROUH
        </button>

        <div className="hidden md:flex items-center gap-8">
          {["about", "skills", "projects", "contact"].map((id) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className="text-xs font-semibold tracking-[0.25em] uppercase transition-colors text-black/80 hover:text-black"
              style={{ fontFamily: "'Poppins', sans-serif" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = ACCENT)}
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "rgba(0,0,0,0.8)")
              }
            >
              {id}
            </button>
          ))}
          <a
            href="https://github.com/AmbitiousFlowDev"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 border-2 border-black text-xs font-bold tracking-[0.2em] uppercase transition-colors hover:bg-black hover:text-white"
          >
            <Github size={12} /> GITHUB
          </a>
        </div>

        <button
          className="md:hidden p-1"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div
          className="md:hidden bg-white px-6 py-4 flex flex-col gap-1"
          style={{ borderTop: `2px solid ${BLACK}` }}
        >
          {["about", "skills", "projects", "contact"].map((id) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className="text-left text-sm font-bold tracking-[0.25em] uppercase py-3 border-b border-black/10 last:border-0 transition-colors text-black/80"
              onMouseEnter={(e) => (e.currentTarget.style.color = ACCENT)}
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "rgba(0,0,0,0.8)")
              }
            >
              {id}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}

function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-white pt-[72px]">
      {/* Diagonal accent panel */}
      <div
        className="absolute top-0 right-0 hidden md:block"
        style={{
          width: "38vw",
          height: "58vh",
          backgroundColor: ACCENT,
          clipPath: "polygon(18% 0, 100% 0, 100% 100%, 0 100%)",
        }}
      />

      {/* Subtle grid lines */}
      <div className="absolute inset-0 pointer-events-none">
        {[25, 50, 75].map((p) => (
          <div
            key={p}
            className="absolute w-full border-t"
            style={{ top: `${p}%`, borderColor: "rgba(0,0,0,0.04)" }}
          />
        ))}
      </div>

      <div className="relative z-10 flex-1 flex flex-col justify-center px-6 md:px-16 max-w-7xl mx-auto w-full py-12">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <span
            className="font-mono text-xs tracking-[0.45em] uppercase font-semibold"
            style={{ color: ACCENT }}
          >
            ◼ INFORMATION TECHNOLOGY & SYSTEMS ENGINEERING · MOROCCO
          </span>
        </motion.div>

        {/* MOHAMED */}
        <div className="overflow-hidden mb-1">
          <motion.div
            initial={{ y: "115%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          >
            <span
              className="block uppercase leading-none"
              style={{
                fontFamily: DISPLAY_FONT,
                fontWeight: 900,
                fontSize: "clamp(68px, 13vw, 185px)",
                letterSpacing: "-0.025em",
                color: BLACK,
              }}
            >
              MOHAMED
            </span>
          </motion.div>
        </div>

        {/* LAFROUH */}
        <div className="overflow-hidden mb-10">
          <motion.div
            initial={{ y: "115%" }}
            animate={{ y: 0 }}
            transition={{
              duration: 0.75,
              delay: 0.08,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <span
              className="block uppercase leading-none"
              style={{
                fontFamily: DISPLAY_FONT,
                fontWeight: 900,
                fontSize: "clamp(68px, 13vw, 185px)",
                letterSpacing: "-0.025em",
                color: ACCENT,
              }}
            >
              LAFROUH
            </span>
          </motion.div>
        </div>

        {/* Descriptor row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="flex flex-wrap items-center gap-4 mb-10"
        >
          <div className="w-10 h-0.5" style={{ backgroundColor: ACCENT }} />
          <span className="text-sm font-semibold tracking-[0.2em] uppercase text-black">
            Full-Stack Engineer
          </span>
          <span className="text-black/40">·</span>
          <span className="flex items-center gap-1.5 font-mono text-xs tracking-[0.2em] uppercase text-black/60">
            <MapPin size={12} /> Morocco
          </span>
          <span className="text-black/40">·</span>
          <span className="font-mono text-xs tracking-[0.2em] uppercase text-black/60">
            Open to Opportunities
          </span>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.58 }}
          className="flex flex-wrap gap-3"
        >
          <button
            onClick={() =>
              document
                .getElementById("projects")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="px-8 py-4 text-sm font-bold tracking-[0.25em] uppercase text-white transition-colors"
            style={{ backgroundColor: BLACK }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = ACCENT)
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = BLACK)
            }
          >
            VIEW PROJECTS
          </button>
          <button
            onClick={() => window.print()}
            className="flex items-center gap-2 px-8 py-4 text-sm font-bold tracking-[0.25em] uppercase text-white transition-colors"
            style={{ backgroundColor: ACCENT }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = BLACK)
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = ACCENT)
            }
          >
            <Download size={14} /> DOWNLOAD CV
          </button>
          <a
            href="https://github.com/AmbitiousFlowDev"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-8 py-4 text-sm font-bold tracking-[0.25em] uppercase border-2 transition-colors"
            style={{ borderColor: BLACK, color: BLACK }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = ACCENT;
              e.currentTarget.style.color = ACCENT;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = BLACK;
              e.currentTarget.style.color = BLACK;
            }}
          >
            <Github size={14} /> GITHUB <ArrowUpRight size={12} />
          </a>
        </motion.div>
      </div>

      {/* Bottom status bar */}
      <div
        className="relative z-10"
        style={{ borderTop: `2px solid ${BLACK}` }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-16 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div
              className="w-2 h-2 rounded-full animate-pulse"
              style={{ backgroundColor: ACCENT }}
            />
            <span className="font-mono text-xs tracking-[0.35em] uppercase text-black/60">
              Available for Internships & Collaboration
            </span>
          </div>
          <span className="font-mono text-xs tracking-[0.25em] text-black/40">
            PORTFOLIO 2024
          </span>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-24 md:py-36 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        <FadeUp>
          <SectionLabel number="01" title="ABOUT" />
        </FadeUp>

        <div className="grid md:grid-cols-[1fr_260px] gap-16 md:gap-24">
          <FadeUp delay={0.1}>
            <p className="text-xl md:text-2xl leading-relaxed font-medium mb-6 max-w-2xl text-black">
              Hi, I'm <strong className="font-bold">Mohamed Lafrouh</strong>.
              I'm studying Information Technology and Systems Engineering in
              Morocco.
            </p>
            <p className="text-base leading-relaxed text-black/70 max-w-xl mb-5">
              Over the past 3+ years, I've built a range of things: backend with
              Java, frontend with TypeScript, some Python, and the occasional
              desktop app. I don't stick to one project. I've built stuff to
              help students and to make learning feel less like a chore.
            </p>
            <p className="text-base leading-relaxed text-black/70 max-w-xl mb-5">
              Lately, I've been digging into machine learning for biomedical
              problems.
            </p>
            <p className="text-base leading-relaxed text-black/70 max-w-xl mb-8">
              I've got 16 public repos in 6 languages. I built them because I
              wanted to.
            </p>
            <p className="text-base font-semibold text-black max-w-xl">
              Now I'm looking for an internship or team to work with.
            </p>
          </FadeUp>

          {/* Stats panel */}
          <FadeUp delay={0.2}>
            <div
              className="pl-10"
              style={{ borderLeft: `4px solid ${ACCENT}` }}
            >
              {[
                { value: "16", label: "REPOSITORIES" },
                { value: "156", label: "GITHUB FOLLOWERS" },
                { value: "6+", label: "LANGUAGES" },
                { value: "10+", label: "PROJECTS SHIPPED" },
              ].map(({ value, label }) => (
                <div key={label} className="mb-9 last:mb-0">
                  <div
                    className="leading-none"
                    style={{
                      fontFamily: DISPLAY_FONT,
                      fontWeight: 900,
                      fontSize: "clamp(52px, 5.5vw, 76px)",
                      color: ACCENT,
                    }}
                  >
                    {value}
                  </div>
                  <div className="font-mono text-xs tracking-[0.4em] uppercase text-black/55 mt-1 font-semibold">
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section
      id="skills"
      className="py-24 md:py-36"
      style={{ backgroundColor: BLACK }}
    >
      <div className="px-6 md:px-16 max-w-7xl mx-auto">
        <FadeUp>
          <SectionLabel number="02" title="SKILLS" light />
        </FadeUp>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.065 }}
            >
              {/* Category label — bigger and bolder */}
              <div
                className="font-mono text-xs tracking-[0.45em] uppercase mb-4 pb-3 font-bold"
                style={{
                  color: ACCENT_ON_DARK,
                  borderBottom: `1px solid ${ACCENT_ON_DARK}55`,
                }}
              >
                {group.label}
              </div>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-2 font-mono text-sm tracking-wide cursor-default transition-all duration-200 font-medium"
                    style={{
                      color: "rgba(255,255,255,0.80)",
                      border: "1px solid rgba(255,255,255,0.22)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = ACCENT_ON_DARK;
                      e.currentTarget.style.color = "#ffffff";
                      e.currentTarget.style.backgroundColor = `${ACCENT_ON_DARK}22`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor =
                        "rgba(255,255,255,0.22)";
                      e.currentTarget.style.color = "rgba(255,255,255,0.80)";
                      e.currentTarget.style.backgroundColor = "transparent";
                    }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects() {
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

function ProjectCard({ project }: { project: (typeof projects)[0] }) {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="relative block bg-white overflow-hidden"
      style={{
        borderTop: `2px solid ${hovered ? ACCENT : BLACK}`,
        transition: "border-color 0.25s",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Accent left bar */}
      <div
        className="absolute left-0 top-0 bottom-0 transition-all duration-300"
        style={{ width: hovered ? "4px" : "0px", backgroundColor: ACCENT }}
      />

      <div className="p-7">
        <div className="flex items-start justify-between mb-4">
          <span className="font-mono text-xs tracking-[0.4em] text-black/45 font-semibold">
            {project.id}
          </span>
          <div className="flex items-center gap-3">
            <span
              className="font-mono text-[10px] tracking-[0.4em] uppercase font-bold"
              style={{ color: ACCENT }}
            >
              {project.category}
            </span>
            <ExternalLink
              size={13}
              style={{
                color: hovered ? ACCENT : "rgba(0,0,0,0.35)",
                transition: "color 0.2s",
              }}
            />
          </div>
        </div>

        <h3
          className="uppercase leading-tight mb-3 transition-colors duration-200"
          style={{
            fontFamily: DISPLAY_FONT,
            fontWeight: 900,
            fontSize: "clamp(26px, 3.2vw, 40px)",
            color: hovered ? ACCENT : BLACK,
          }}
        >
          {project.name}
        </h3>

        <p className="text-sm text-black/65 leading-relaxed mb-6">
          {project.desc}
        </p>

        <div className="flex items-center justify-between flex-wrap gap-3">
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="px-2.5 py-1 font-mono text-xs tracking-wide text-white font-semibold transition-colors duration-200"
                style={{ backgroundColor: hovered ? ACCENT : BLACK }}
              >
                {t}
              </span>
            ))}
          </div>
          {project.stars > 1 && (
            <div className="flex items-center gap-1 font-mono text-xs text-black/45 font-semibold">
              <Star size={11} /> {project.stars}
            </div>
          )}
        </div>
      </div>
    </a>
  );
}

function Experience() {
  return (
    <section
      id="experience"
      className="py-24 md:py-36"
      style={{ backgroundColor: "#F2F2F2" }}
    >
      <div className="px-6 md:px-16 max-w-7xl mx-auto">
        <FadeUp>
          <SectionLabel number="04" title="EXPERIENCE" />
        </FadeUp>

        <div className="relative ml-0 md:ml-[148px]">
          <div
            className="absolute left-3 md:-left-8 top-0 bottom-0 w-px"
            style={{ background: "rgba(0,0,0,0.18)" }}
          />

          <div className="space-y-0">
            {timelineItems.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="relative flex gap-6 md:gap-10 pb-10"
              >
                <div
                  className="absolute left-0 md:-left-[41px] top-1.5 w-3 h-3 shrink-0 z-10"
                  style={{ backgroundColor: item.current ? ACCENT : BLACK }}
                />

                <div className="hidden md:block absolute -left-[148px] top-0 w-[112px] pr-6 text-right">
                  <span className="font-mono text-xs tracking-[0.2em] uppercase leading-tight text-black/55 font-semibold block">
                    {item.year}
                  </span>
                </div>

                <div className="pl-8 md:pl-0 flex-1">
                  <div className="md:hidden mb-1">
                    <span
                      className="font-mono text-xs tracking-[0.3em] uppercase font-bold"
                      style={{ color: ACCENT }}
                    >
                      {item.year}
                    </span>
                  </div>

                  <div className="flex items-start gap-4 justify-between flex-wrap mb-2">
                    <div>
                      <h4
                        className="uppercase leading-tight tracking-tight"
                        style={{
                          fontFamily: DISPLAY_FONT,
                          fontWeight: 900,
                          fontSize: "clamp(18px, 2.2vw, 24px)",
                          color: BLACK,
                        }}
                      >
                        {item.title}
                      </h4>
                      <p
                        className="font-mono text-xs tracking-[0.3em] uppercase mt-1 font-semibold"
                        style={{ color: ACCENT }}
                      >
                        {item.org}
                      </p>
                    </div>
                    {item.current && (
                      <span
                        className="px-2.5 py-1 font-bold text-xs tracking-[0.25em] uppercase text-white shrink-0"
                        style={{ backgroundColor: ACCENT }}
                      >
                        CURRENT
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-black/65 leading-relaxed max-w-lg pb-10 border-b border-black/10">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Education() {
  return (
    <section id="education" className="py-24 md:py-36 px-6 md:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <FadeUp>
          <SectionLabel number="05" title="EDUCATION" />
        </FadeUp>

        <div className="grid md:grid-cols-2 gap-4 mb-4">
          {educationItems.slice(0, 2).map((edu, i) => (
            <FadeUp key={edu.degree} delay={0.1 + i * 0.08}>
              <EduCard edu={edu} />
            </FadeUp>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <FadeUp delay={0.26}>
            <EduCard edu={educationItems[2]} />
          </FadeUp>

          <FadeUp delay={0.3}>
            <div
              className="p-8 h-full"
              style={{ borderTop: `3px solid ${BLACK}` }}
            >
              <div
                className="font-mono text-xs tracking-[0.4em] uppercase mb-4 font-bold"
                style={{ color: ACCENT }}
              >
                RECOGNITIONS & HIGHLIGHTS
              </div>
              <h4
                className="uppercase mb-6"
                style={{
                  fontFamily: DISPLAY_FONT,
                  fontWeight: 900,
                  fontSize: "20px",
                }}
              >
                CERTIFICATIONS &amp; AWARDS
              </h4>
              <div className="space-y-5">
                {[
                  {
                    name: "Open Source Contributions",
                    org: "GitHub · 16 Public Repositories",
                    year: "2023–2024",
                  },
                  {
                    name: "Multi-language Development",
                    org: "6 Programming Languages Mastered",
                    year: "2023",
                  },
                  {
                    name: "Machine Learning Research",
                    org: "Genomics & Biomedical ML",
                    year: "2025",
                  },
                  {
                    name: "Systems Architecture Design",
                    org: "P2P & Cloud-Native Platforms",
                    year: "2023–2026",
                  },
                ].map((cert) => (
                  <div key={cert.name} className="flex items-start gap-3">
                    <div
                      className="w-1.5 h-1.5 mt-2 shrink-0"
                      style={{ backgroundColor: ACCENT }}
                    />
                    <div>
                      <div className="text-sm font-semibold text-black">
                        {cert.name}
                      </div>
                      <div className="font-mono text-xs text-black/55 tracking-[0.15em] uppercase mt-0.5 font-medium">
                        {cert.org} · {cert.year}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}

function EduCard({ edu }: { edu: (typeof educationItems)[0] }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className="p-8 h-full transition-colors duration-300"
      style={{ borderTop: `3px solid ${hovered ? ACCENT : BLACK}` }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className="font-mono text-xs tracking-[0.4em] uppercase mb-4 font-bold"
        style={{ color: ACCENT }}
      >
        {edu.period}
      </div>
      <h4
        className="uppercase leading-snug mb-1"
        style={{ fontFamily: DISPLAY_FONT, fontWeight: 900, fontSize: "20px" }}
      >
        {edu.degree}
      </h4>
      <p className="text-sm text-black/70 mb-1 font-medium">{edu.spec}</p>
      <p className="font-mono text-xs tracking-[0.2em] text-black/50 uppercase mb-5 font-semibold">
        {edu.institution} · {edu.location}
      </p>
      <div className="flex flex-wrap gap-2">
        {edu.tags.map((h) => (
          <span
            key={h}
            className="px-2.5 py-1 font-mono text-xs tracking-wide font-medium transition-colors duration-200"
            style={{
              color: hovered ? ACCENT : "rgba(0,0,0,0.55)",
              border: `1px solid ${hovered ? ACCENT : "rgba(0,0,0,0.2)"}`,
            }}
          >
            {h}
          </span>
        ))}
      </div>
    </div>
  );
}

function Contact() {
  return (
    <section
      id="contact"
      className="relative py-24 md:py-36 overflow-hidden"
      style={{ backgroundColor: ACCENT }}
    >
      {/* Geometric decorators */}
      <div
        className="absolute top-10 right-10 w-44 h-44 hidden md:block"
        style={{ border: "2px solid rgba(255,255,255,0.2)" }}
      />
      <div
        className="absolute top-10 right-[72px] w-44 h-44 hidden md:block"
        style={{ border: "2px solid rgba(255,255,255,0.09)" }}
      />
      <div
        className="absolute -bottom-20 -left-20 w-64 h-64 rotate-12 opacity-10"
        style={{ backgroundColor: BLACK }}
      />

      <div className="relative z-10 px-6 md:px-16 max-w-7xl mx-auto">
        <FadeUp>
          <div className="flex items-center gap-4 mb-10">
            <span
              className="font-mono text-xs tracking-[0.45em] uppercase font-semibold"
              style={{ color: "rgba(255,255,255,0.65)" }}
            >
              — 06 —
            </span>
            <span
              className="uppercase leading-none tracking-tight text-white"
              style={{
                fontFamily: DISPLAY_FONT,
                fontWeight: 900,
                fontSize: "clamp(36px, 6vw, 72px)",
              }}
            >
              CONTACT
            </span>
          </div>
        </FadeUp>

        <FadeUp delay={0.1}>
          <h2
            className="uppercase text-white leading-none mb-8"
            style={{
              fontFamily: DISPLAY_FONT,
              fontWeight: 900,
              fontSize: "clamp(44px, 8vw, 114px)",
            }}
          >
            LET'S BUILD
            <br />
            SOMETHING.
          </h2>
        </FadeUp>

        <FadeUp delay={0.18}>
          <p
            className="text-base md:text-lg leading-relaxed max-w-md mb-12 font-medium"
            style={{ color: "rgba(255,255,255,0.85)" }}
          >
            Open to internships, freelance projects, and collaborative research.
            Based in Morocco — working globally.
          </p>
        </FadeUp>

        <FadeUp delay={0.24}>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://github.com/AmbitiousFlowDev"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-8 py-4 text-sm font-bold tracking-[0.25em] uppercase transition-colors"
              style={{ backgroundColor: "white", color: ACCENT }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = BLACK;
                e.currentTarget.style.color = "white";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "white";
                e.currentTarget.style.color = ACCENT;
              }}
            >
              <Github size={14} /> VIEW GITHUB
            </a>
            <a
              href="mailto:m.lafrouh@example.com"
              className="inline-flex items-center gap-2.5 px-8 py-4 text-sm font-bold tracking-[0.25em] uppercase text-white transition-all"
              style={{ border: "2px solid rgba(255,255,255,0.75)" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "white";
                e.currentTarget.style.color = ACCENT;
                e.currentTarget.style.borderColor = "white";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
                e.currentTarget.style.color = "white";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.75)";
              }}
            >
              <Mail size={14} /> EMAIL ME <ArrowUpRight size={12} />
            </a>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="px-6 md:px-16 py-8" style={{ backgroundColor: BLACK }}>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <span
          className="uppercase tracking-[0.1em] text-white"
          style={{
            fontFamily: DISPLAY_FONT,
            fontWeight: 900,
            fontSize: "22px",
          }}
        >
          MOHAMED LAFROUH
        </span>
        <span
          className="font-mono text-xs tracking-[0.25em] uppercase text-center font-medium"
          style={{ color: "rgba(255,255,255,0.4)" }}
        >
          © 2024 — IT & Systems Engineering · Morocco
        </span>
        <div className="flex items-center gap-6">
          {[
            { label: "GITHUB", href: "https://github.com/AmbitiousFlowDev" },
            { label: "EMAIL", href: "mailto:m.lafrouh@example.com" },
          ].map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target={label === "GITHUB" ? "_blank" : undefined}
              rel={label === "GITHUB" ? "noopener noreferrer" : undefined}
              className="font-mono text-xs tracking-[0.3em] uppercase transition-colors font-semibold"
              style={{ color: "rgba(255,255,255,0.5)" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = ACCENT_ON_DARK)
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "rgba(255,255,255,0.5)")
              }
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="bg-white text-[#111111] overflow-x-hidden">
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}
