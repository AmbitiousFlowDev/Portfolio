import {educationItems} from "../../../constants/educationItems";
import {theme} from "../../../constants/theme";
import {FadeUp} from "../../animations/FadeUp";
import {SectionLabel} from "../../typography/SectionLabel";
import {EduCard} from "./EduCard";

const {ACCENT , BLACK, DISPLAY_FONT} = theme;


export function Education() {
    return (
        <section id="education" className="py-24 md:py-36 px-6 md:px-16 bg-white">
            <div className="max-w-7xl mx-auto">
                <FadeUp>
                    <SectionLabel number="05" title="EDUCATION"/>
                </FadeUp>

                <div className="grid md:grid-cols-2 gap-4 mb-4">
                    {educationItems.slice(0, 2).map((edu, i) => (
                        <FadeUp key={edu.degree} delay={0.1 + i * 0.08}>
                            <EduCard edu={edu}/>
                        </FadeUp>
                    ))}
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                    <FadeUp delay={0.26}>
                        <EduCard edu={educationItems[2]}/>
                    </FadeUp>

                    <FadeUp delay={0.3}>
                        <div
                            className="p-8 h-full"
                            style={{borderTop: `3px solid ${BLACK}`}}
                        >
                            <div
                                className="font-mono text-xs tracking-[0.4em] uppercase mb-4 font-bold"
                                style={{color: ACCENT}}
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
                                            style={{backgroundColor: ACCENT}}
                                        />
                                        <div>
                                            <div className="text-sm font-semibold text-black">
                                                {cert.name}
                                            </div>
                                            <div
                                                className="font-mono text-xs text-black/55 tracking-[0.15em] uppercase mt-0.5 font-medium">
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