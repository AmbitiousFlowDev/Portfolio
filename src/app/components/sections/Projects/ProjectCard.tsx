import { projects } from "../../../constants/projects";
import { useState } from "react";
import { ExternalLink, Star } from "lucide-react";
import { theme } from "../../../constants/theme";

const { ACCENT, BLACK, DISPLAY_FONT } = theme;

export function ProjectCard({ project }: { project: (typeof projects)[0] }) {
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
