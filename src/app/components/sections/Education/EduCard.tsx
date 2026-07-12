import { educationItems } from "../../../constants/educationItems";
import { useState } from "react";
import { theme } from "../../../constants/theme";

const { ACCENT, ACCENT_ON_DARK, BLACK, DISPLAY_FONT } = theme;

export function EduCard({ edu }: { edu: (typeof educationItems)[0] }) {
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
      
    </div>
  );
}
