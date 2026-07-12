import { educationItems } from "../../../constants/educationItems";
import type { RecognitionItem } from "../../../constants/recognitions";
import { theme } from "../../../constants/theme";
import { FadeUp } from "../../animations/FadeUp";
import { SectionLabel } from "../../typography/SectionLabel";
import { EduCard } from "./EduCard";
import { recognitionItems } from "../../../constants/recognitions";

const { ACCENT, BLACK, DISPLAY_FONT } = theme;

export function Education() {
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
                {recognitionItems.map((item: RecognitionItem) => (
                  <div key={item.name} className="flex items-start gap-3">
                    <div
                      className="mt-2 h-1.5 w-1.5 shrink-0"
                      style={{ backgroundColor: ACCENT }}
                    />
                    <div>
                      <h4 className="text-sm font-semibold text-black">
                        {item.name}
                      </h4>

                      <p className="mt-0.5 font-mono text-xs font-medium uppercase tracking-[0.15em] text-black/55">
                        {item.organization} · {item.period}
                      </p>
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
