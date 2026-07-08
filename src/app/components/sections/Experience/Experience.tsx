import {FadeUp} from "../../animations/FadeUp";
import {timelineItems} from "../../../constants/timelineItems";
import {motion} from "motion/react";
import {SectionLabel} from "../../typography/SectionLabel";
import {theme} from "../../../constants/theme";

const {ACCENT, BLACK, DISPLAY_FONT} = theme;

export function Experience() {
    return (
        <section
            id="experience"
            className="py-24 md:py-36"
            style={{backgroundColor: "#F2F2F2"}}
        >
            <div className="px-6 md:px-16 max-w-7xl mx-auto">
                <FadeUp>
                    <SectionLabel number="04" title="EXPERIENCE"/>
                </FadeUp>

                <div className="relative ml-0 md:ml-[148px]">
                    <div
                        className="absolute left-3 md:-left-8 top-0 bottom-0 w-px"
                        style={{background: "rgba(0,0,0,0.18)"}}
                    />

                    <div className="space-y-0">
                        {timelineItems.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{opacity: 0, x: -20}}
                                whileInView={{opacity: 1, x: 0}}
                                viewport={{once: true}}
                                transition={{duration: 0.5, delay: i * 0.08}}
                                className="relative flex gap-6 md:gap-10 pb-10"
                            >
                                <div
                                    className="absolute left-0 md:-left-[41px] top-1.5 w-3 h-3 shrink-0 z-10"
                                    style={{backgroundColor: item.current ? ACCENT : BLACK}}
                                />

                                <div className="hidden md:block absolute -left-[148px] top-0 w-[112px] pr-6 text-right">
                  <span
                      className="font-mono text-xs tracking-[0.2em] uppercase leading-tight text-black/55 font-semibold block">
                    {item.year}
                  </span>
                                </div>

                                <div className="pl-8 md:pl-0 flex-1">
                                    <div className="md:hidden mb-1">
                    <span
                        className="font-mono text-xs tracking-[0.3em] uppercase font-bold"
                        style={{color: ACCENT}}
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
                                                style={{color: ACCENT}}
                                            >
                                                {item.org}
                                            </p>
                                        </div>
                                        {item.current && (
                                            <span
                                                className="px-2.5 py-1 font-bold text-xs tracking-[0.25em] uppercase text-white shrink-0"
                                                style={{backgroundColor: ACCENT}}
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