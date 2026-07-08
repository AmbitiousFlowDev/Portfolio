import {useEffect, useState} from "react";
import {Github, Menu, X} from "lucide-react";

function Nav() {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handler = () => setScrolled(window.scrollY > 60);
        window.addEventListener("scroll", handler);
        return () => window.removeEventListener("scroll", handler);
    }, []);

    const scrollTo = (id: string) => {
        document.getElementById(id)?.scrollIntoView({behavior: "smooth"});
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
                    onClick={() => window.scrollTo({top: 0, behavior: "smooth"})}
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
                            style={{fontFamily: "'Poppins', sans-serif"}}
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
                        <Github size={12}/> GITHUB
                    </a>
                </div>

                <button
                    className="md:hidden p-1"
                    onClick={() => setOpen(!open)}
                    aria-label="Toggle navigation"
                >
                    {open ? <X size={22}/> : <Menu size={22}/>}
                </button>
            </div>

            {open && (
                <div
                    className="md:hidden bg-white px-6 py-4 flex flex-col gap-1"
                    style={{borderTop: `2px solid ${BLACK}`}}
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