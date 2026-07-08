import { JSX } from "react";
import { FadeUp } from "../../animations/FadeUp";
import { SectionLabel } from "../../typography/SectionLabel";
import { skillGroups } from "../../../constants/skillGroups";
import { theme } from "../../../constants/theme";
import { SkillGroupCard } from "./SkillGroupCard";

const { BLACK } = theme;

/**
 * Skills section.
 *
 * Displays categorized technologies and tools used throughout
 * the portfolio.
 *
 * @returns The Skills section.
 */
export function Skills(): JSX.Element {
  return (
    <section
      id="skills"
      className="py-24 md:py-36"
      style={{
        backgroundColor: BLACK,
      }}
    >
      <div className="mx-auto max-w-7xl px-6 md:px-16">
        <FadeUp>
          <SectionLabel number="02" title="SKILLS" light />
        </FadeUp>

        <div className="grid grid-cols-2 gap-x-8 gap-y-12 md:grid-cols-4">
          {skillGroups.map((group, index) => (
            <SkillGroupCard
              key={group.label}
              label={group.label}
              items={group.items}
              delay={index * 0.065}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
