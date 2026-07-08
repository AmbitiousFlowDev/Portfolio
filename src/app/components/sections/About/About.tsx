import { JSX, useEffect, useState } from "react";

import { FadeUp } from "../../animations/FadeUp";
import { SectionLabel } from "../../typography/SectionLabel";
import { theme } from "../../../constants/theme";
import { getGitHubUser } from "../../../services/github";

const { ACCENT, DISPLAY_FONT } = theme;

/**
 * Portfolio statistic.
 */
interface StatItem {
  /**
   * Statistic value.
   */
  readonly value: string;

  /**
   * Statistic label.
   */
  readonly label: string;
}

/**
 * Shared style for statistic values.
 */
const STAT_VALUE_STYLE = {
  fontFamily: DISPLAY_FONT,
  fontWeight: 900,
  fontSize: "clamp(52px, 5.5vw, 76px)",
  color: ACCENT,
} as const;

/**
 * About section of the portfolio.
 *
 * Displays a short introduction and dynamically loads GitHub
 * statistics for the current profile.
 *
 * @returns The About section.
 */
export function About(): JSX.Element {
  const [stats, setStats] = useState<readonly StatItem[]>([]);

  useEffect(() => {
    async function loadStats(): Promise<void> {
      try {
        const github = await getGitHubUser();

        setStats([
          {
            value: github.public_repos.toString(),
            label: "REPOSITORIES",
          },
          {
            value: github.followers.toString(),
            label: "GITHUB FOLLOWERS",
          },
          {
            value: "6+",
            label: "LANGUAGES",
          },
          {
            value: "10+",
            label: "PROJECTS SHIPPED",
          },
        ]);
      } catch (error) {
        console.error("Failed to load GitHub statistics.", error);
      }
    }

    void loadStats();
  }, []);

  return (
    <section id="about" className="px-6 py-24 md:px-16 md:py-36">
      <div className="mx-auto max-w-7xl">
        <FadeUp>
          <SectionLabel number="01" title="ABOUT" />
        </FadeUp>

        <div className="grid gap-16 md:grid-cols-[1fr_260px] md:gap-24">
          <FadeUp delay={0.1}>
            <p className="mb-6 max-w-2xl text-xl font-medium leading-relaxed text-black md:text-2xl">
              Hi, I'm <strong>Mohamed Lafrouh</strong>. I'm studying Information
              Technology and Systems Engineering in Morocco.
            </p>

            <p className="mb-5 max-w-xl text-base leading-relaxed text-black/70">
              Over the past 3+ years, I've built backend applications with Java,
              frontend projects with Javascript, Python utilities, and desktop
              applications.
            </p>

            <p className="mb-5 max-w-xl text-base leading-relaxed text-black/70">
              Lately, I've been exploring machine learning applied to biomedical
              problems.
            </p>

            <p className="mb-8 max-w-xl text-base leading-relaxed text-black/70">
              I enjoy building open-source software and tools that make learning
              more engaging.
            </p>

            <p className="max-w-xl font-semibold text-black">
              I'm currently looking for an internship or a team where I can
              contribute and continue learning.
            </p>
          </FadeUp>

          <FadeUp delay={0.2}>
            <div
              className="pl-10"
              style={{
                borderLeft: `4px solid ${ACCENT}`,
              }}
            >
              {stats.map(({ value, label }) => (
                <article key={label} className="mb-9 last:mb-0">
                  <div className="leading-none" style={STAT_VALUE_STYLE}>
                    {value}
                  </div>

                  <div className="mt-1 font-mono text-xs font-semibold uppercase tracking-[0.4em] text-black/55">
                    {label}
                  </div>
                </article>
              ))}
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
