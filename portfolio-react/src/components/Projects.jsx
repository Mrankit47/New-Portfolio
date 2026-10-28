import React, { useEffect, useRef, useCallback, memo } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const PROJECTS_DATA = [
    {
        id: "galaxium",
        title: "Galaxium",
        category: "3D Space / WebGL",
        index: "01",
        description: "A high-fidelity cinematic 3D solar system observatory. Features realistic planetary custom shaders, precise orbital mechanics, atmospheric simulation, and dynamic macro-to-micro camera traversals.",
        tech: ["React Three Fiber", "Three.js", "GSAP", "Custom Shaders"],
        github: "https://github.com/Mrankit47/Solar-System-Observation-",
        live: "https://solar-system-observation.vercel.app/",
        color: "#8B5CF6",
        badge: "WEBGL 3D",
        accentGradient: "from-purple-900/40 via-indigo-900/20 to-black"
    },
    {
        id: "biosphere",
        title: "BioSphere",
        category: "3D Education / WebGL",
        index: "02",
        description: "An immersive 3D biology learning platform exploring life at every scale—from interactive cells, DNA replication, and viruses to organ systems and food webs in real-time.",
        tech: ["Next.js", "React Three Fiber", "Three.js", "Tailwind CSS"],
        github: "https://github.com/Mrankit47/Biosphere-",
        live: "https://biosphere-eatr.vercel.app/",
        image: "/projects/biosphere_preview.png",
        color: "#10B981",
        badge: "3D SIMULATION",
        accentGradient: "from-emerald-900/40 via-teal-900/20 to-black"
    },
    {
        id: "virtual-canvas",
        title: "The Virtual Canvas",
        category: "Full Stack / RBAC",
        index: "03",
        description: "RBAC-based full-stack web application with secure authentication, dynamic dashboards, and responsive UI for efficient user management.",
        tech: ["Next.js", "Tailwind CSS", "Sanity CMS"],
        github: "https://github.com/Mrankit47/The-Virtual-Canvas",
        live: "https://the-virtual-canvas-tvc.vercel.app/",
        image: "/projects/virtual_canvas_preview.png",
        color: "#3B82F6",
        badge: "FULL-STACK",
        accentGradient: "from-blue-900/40 via-sky-900/20 to-black"
    },
    {
        id: "tally-erp",
        title: "Tally ERP System",
        category: "ERP / Django",
        index: "04",
        description: "Django-based ERP system with role-based access control, accounting modules, and responsive UI for financial and user management.",
        tech: ["Django", "PostgreSQL", "Tailwind CSS"],
        github: "https://github.com/Mrankit47/Tally-Erp-System",
        live: "https://tally-erp-system.onrender.com",
        image: "/projects/tally_erp_preview.png",
        color: "#059669",
        badge: "ENTERPRISE ERP",
        accentGradient: "from-green-900/40 via-emerald-900/20 to-black"
    },
    {
        id: "lead-crm",
        title: "Lead Management System",
        category: "CRM / Django",
        index: "05",
        description: "A secure, scalable lead management solution for tracking business inquiries, managing client data, and optimizing conversion workflows.",
        tech: ["Django", "PostgreSQL", "Python"],
        github: "https://github.com/Mrankit47/Leads-management-",
        live: "https://leads-management-egfi.onrender.com",
        image: "/projects/leads_management_preview.png",
        color: "#EC4899",
        badge: "CRM PLATFORM",
        accentGradient: "from-pink-900/40 via-rose-900/20 to-black"
    },
    {
        id: "school-management",
        title: "School Management System",
        category: "Education / React",
        index: "06",
        description: "Comprehensive school administration portal for managing student records, faculty data, and academic operations with a seamless React UI.",
        tech: ["React", "Django", "PostgreSQL"],
        github: "https://github.com/Mrankit47/school-management-system",
        live: "https://school-management-system-1-ucmf.onrender.com",
        image: "/projects/school_management_preview.png",
        color: "#06B6D4",
        badge: "EDUCATION PORTAL",
        accentGradient: "from-cyan-900/40 via-teal-900/20 to-black"
    },
    {
        id: "eagle-in-cloud",
        title: "Eagle In Cloud Website",
        category: "UI/UX / Frontend",
        index: "07",
        description: "Redesigned company website using modern UI/UX principles with improved responsiveness and user experience.",
        tech: ["React", "Tailwind CSS"],
        github: "",
        live: "https://eagleinclouds.com/",
        image: "/projects/eagle_in_cloud_preview.png",
        color: "#F59E0B",
        badge: "CLIENT UI/UX",
        accentGradient: "from-amber-900/40 via-yellow-900/20 to-black"
    },
    {
        id: "furniture-website",
        title: "Chauhan Aluminium",
        category: "Landing Page / Frontend",
        index: "08",
        description: "A modern bilingual landing page for Chauhan Aluminium & Door House, Indore — showcasing aluminium doors, windows, glass work, and steel railings with WhatsApp integration.",
        tech: ["HTML", "CSS", "JavaScript"],
        github: "",
        live: "https://furniture-website-landing-page-1.onrender.com/",
        image: "/projects/furniture_preview.png",
        color: "#D97706",
        badge: "LANDING PAGE",
        accentGradient: "from-orange-900/40 via-amber-900/20 to-black"
    }
];

/* ─────────────────────────────────────────────────────────────────────
   ProjectCard — GPU-optimized, zero-rerender card
   • No iframe — images only (no heavy WebGL/DOM in background)
   • Scoped CSS transitions (only opacity, border-color, box-shadow)
   • contain: strict for full layout/paint isolation
   ───────────────────────────────────────────────────────────────────── */
const ProjectCard = memo(({ project }) => {
    return (
        <div
            className="project-card group"
            style={{
                '--card-color': project.color,
                contain: 'strict',
                contentVisibility: 'auto',
                containIntrinsicSize: '680px 480px',
            }}
        >
            {/* ── Background Layer ── */}
            <div className={`absolute inset-0 z-0 overflow-hidden bg-gradient-to-br ${project.accentGradient}`}>
                {project.image ? (
                    <img
                        src={project.image}
                        alt={`${project.title} preview`}
                        loading="lazy"
                        decoding="async"
                        className="project-card-img"
                    />
                ) : (
                    /* Lightweight ambient placeholder — no iframe */
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden opacity-30 group-hover:opacity-50 transition-opacity duration-500">
                        <div className="absolute inset-0 cyber-grid-bg opacity-30" />
                        <div
                            className="w-[300px] h-[300px] rounded-full"
                            style={{
                                backgroundColor: `${project.color}33`,
                                filter: 'blur(80px)',
                                willChange: 'auto',
                            }}
                        />
                        <div className="relative font-mono text-5xl font-black text-white/[0.04] select-none tracking-widest uppercase">
                            {project.title}
                        </div>
                    </div>
                )}

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b0b] via-[#0b0b0b]/85 to-[#0b0b0b]/40 pointer-events-none" />

                {/* Hover glow — GPU composited */}
                <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-15 transition-opacity duration-500 pointer-events-none"
                    style={{
                        background: `radial-gradient(circle at center, ${project.color} 0%, transparent 80%)`,
                        willChange: 'opacity',
                    }}
                />
            </div>

            {/* ── Browser Chrome Bar ── */}
            <div className="relative z-10 px-4 sm:px-5 py-3 border-b border-white/[0.08] bg-[#0a0a0d]/90 flex items-center justify-between">
                {/* Traffic dots */}
                <div className="flex items-center space-x-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
                </div>

                {/* URL chip */}
                <div className="px-3 py-1 rounded-md bg-black/50 border border-white/[0.06] text-[10px] sm:text-[11px] font-mono text-white/60 flex items-center space-x-1.5 max-w-[200px] sm:max-w-[340px] truncate">
                    <svg className="w-3 h-3 text-emerald-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                    <span className="truncate">{project.live.replace('https://', '')}</span>
                </div>

                {/* Live badge — static dot instead of animate-pulse during scroll */}
                <div className="flex items-center space-x-1.5 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 live-dot" />
                    <span className="text-[9px] font-mono text-emerald-400 font-semibold uppercase tracking-wider hidden sm:inline">
                        LIVE
                    </span>
                </div>
            </div>

            {/* ── Card Body ── */}
            <div className="relative z-10 p-5 sm:p-7 flex-1 flex flex-col justify-end">
                <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                        <span className="font-mono text-[10px] sm:text-xs text-accent uppercase tracking-[0.2em] font-semibold">
                            04.{project.index} // {project.category}
                        </span>
                        <span
                            className="text-[8px] font-mono px-1.5 py-0.5 rounded border tracking-widest font-semibold uppercase"
                            style={{
                                borderColor: `${project.color}44`,
                                color: project.color,
                                backgroundColor: `${project.color}15`
                            }}
                        >
                            {project.badge}
                        </span>
                    </div>

                    {project.github && (
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white/40 hover:text-white transition-colors duration-200 p-1"
                            title="View GitHub Repository"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                            </svg>
                        </a>
                    )}
                </div>

                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-accent transition-colors duration-300">
                    {project.title}
                </h3>

                <p className="text-white/70 text-xs sm:text-sm leading-relaxed mb-4 line-clamp-2 sm:line-clamp-3 max-w-2xl font-sans">
                    {project.description}
                </p>

                {/* Tech Tags & Launch Button */}
                <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-white/[0.08]">
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                        {project.tech.map((t, i) => (
                            <span
                                key={i}
                                className="font-mono text-[9px] sm:text-[10px] px-2 py-0.5 rounded-md bg-white/[0.04] border border-white/[0.08] text-white/80"
                            >
                                {t}
                            </span>
                        ))}
                    </div>

                    <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="launch-btn inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-lg bg-accent hover:bg-accent/80 text-white text-xs font-mono font-semibold shadow-lg group/btn"
                    >
                        <span>LAUNCH SITE</span>
                        <svg className="w-3.5 h-3.5 transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    );
});

ProjectCard.displayName = 'ProjectCard';


/* ─────────────────────────────────────────────────────────────────────
   Projects Section — Buttery-smooth horizontal scroll
   • scrub: true (direct 1:1 mapping, no interpolation lag)
   • All onUpdate DOM writes batched
   • No React state changes during scroll
   • GPU-composited track via translate3d
   ───────────────────────────────────────────────────────────────────── */
const Projects = () => {
    const sectionRef = useRef(null);
    const triggerRef = useRef(null);
    const trackRef = useRef(null);
    const progressTextRef = useRef(null);
    const progressBarRef = useRef(null);
    const activeTitleRef = useRef(null);
    const activeIndexRef = useRef(null);
    const navPillsRef = useRef([]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const track = trackRef.current;
            const trigger = triggerRef.current;
            if (!track || !trigger) return;

            // ── Heading entrance animation ──
            gsap.fromTo(".projects-main-heading",
                { y: 30, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: trigger,
                        start: "top 85%",
                        toggleActions: "play none none none"
                    }
                }
            );

            // ── Card stagger entrance ──
            const cards = track.querySelectorAll('.project-card');
            gsap.fromTo(cards,
                { y: 60, opacity: 0, scale: 0.92 },
                {
                    y: 0,
                    opacity: 1,
                    scale: 1,
                    duration: 0.7,
                    ease: "power3.out",
                    stagger: 0.08,
                    scrollTrigger: {
                        trigger: trigger,
                        start: "top 70%",
                        toggleActions: "play none none none"
                    }
                }
            );

            // ── Precise horizontal scroll distance ──
            const getScrollDistance = () => {
                return Math.max(0, track.scrollWidth - window.innerWidth + 160);
            };

            // ── Batched DOM update tracker ──
            let lastIdx = 0;
            let rafId = 0;

            // ── Main horizontal scroll tween ──
            gsap.to(track, {
                x: () => -getScrollDistance(),
                ease: "none",
                scrollTrigger: {
                    trigger: trigger,
                    start: "top top",
                    end: () => `+=${getScrollDistance()}`,
                    scrub: true,       // Direct 1:1 — no interpolation lag
                    pin: true,
                    anticipatePin: 1,
                    invalidateOnRefresh: true,
                    fastScrollEnd: true,
                    onUpdate: (self) => {
                        // Cancel any pending frame to avoid stacking
                        if (rafId) cancelAnimationFrame(rafId);

                        rafId = requestAnimationFrame(() => {
                            const progress = self.progress;
                            const pct = Math.round(progress * 100);

                            // Batch all DOM writes into one frame
                            if (progressTextRef.current) {
                                progressTextRef.current.textContent = `${pct}%`;
                            }
                            if (progressBarRef.current) {
                                progressBarRef.current.style.transform = `scaleX(${progress})`;
                            }

                            const activeIdx = Math.min(
                                PROJECTS_DATA.length - 1,
                                Math.floor(progress * PROJECTS_DATA.length)
                            );

                            if (activeIdx !== lastIdx) {
                                lastIdx = activeIdx;
                                if (activeTitleRef.current) {
                                    activeTitleRef.current.textContent = PROJECTS_DATA[activeIdx].title;
                                }
                                if (activeIndexRef.current) {
                                    activeIndexRef.current.textContent = PROJECTS_DATA[activeIdx].index;
                                }

                                // Swap active class — only touch the two affected pills
                                const pills = navPillsRef.current;
                                pills.forEach((pill, i) => {
                                    if (!pill) return;
                                    const isActive = i === activeIdx;
                                    pill.setAttribute('data-active', isActive ? 'true' : 'false');
                                });
                            }
                        });
                    }
                }
            });

            ScrollTrigger.refresh();
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    // ── Quick Jump handler ──
    const scrollToProject = useCallback((index) => {
        const trigger = triggerRef.current;
        const track = trackRef.current;
        if (!trigger || !track) return;

        const totalDistance = track.scrollWidth - window.innerWidth + 160;
        const progressTarget = index / (PROJECTS_DATA.length - 1);
        const scrollStart = trigger.offsetTop;
        const targetScroll = scrollStart + progressTarget * totalDistance;

        window.scrollTo({
            top: targetScroll,
            behavior: 'smooth'
        });
    }, []);

    return (
        <section
            id="projects"
            ref={sectionRef}
            className="relative bg-dark border-y border-white/5 overflow-hidden"
        >
            {/* Pinned Scroll Container */}
            <div
                ref={triggerRef}
                className="h-screen w-full flex flex-col justify-between py-5 sm:py-8 px-4 sm:px-8 md:px-14 overflow-hidden relative"
            >
                {/* Ambient Glows — reduced blur for performance */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
                    <div className="absolute top-[20%] right-[10%] w-[500px] h-[500px] rounded-full bg-accent/8 ambient-glow" />
                    <div className="absolute bottom-[20%] left-[5%] w-[450px] h-[450px] rounded-full bg-cyan-500/5 ambient-glow" />
                </div>

                {/* ── Top Header & Progress ── */}
                <div className="projects-main-heading relative z-20 flex flex-col sm:flex-row sm:items-center justify-between border-b border-white/[0.06] pb-3 sm:pb-4 gap-3">
                    <div>
                        <div className="flex items-center space-x-2 font-mono text-[11px] text-accent uppercase tracking-widest mb-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-accent live-dot" />
                            <span>FEATURED CASE STUDIES</span>
                        </div>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white flex items-center">
                            <span className="text-white/40 mr-4 font-mono text-sm sm:text-base">04.</span> Project Work
                        </h2>
                    </div>

                    {/* Project Navigator Pills */}
                    <div className="flex items-center space-x-2 overflow-x-auto pb-1 scrollbar-none">
                        <div className="hidden lg:flex items-center space-x-1.5 mr-2">
                            {PROJECTS_DATA.map((p, i) => (
                                <button
                                    key={p.id}
                                    ref={(el) => (navPillsRef.current[i] = el)}
                                    onClick={() => scrollToProject(i)}
                                    data-active={i === 0 ? 'true' : 'false'}
                                    className="nav-pill"
                                >
                                    {p.index}. {p.title.split(' ')[0]}
                                </button>
                            ))}
                        </div>

                        {/* Progress readout */}
                        <div className="px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] text-white/70 flex items-center space-x-2 text-xs font-mono">
                            <span ref={progressTextRef} className="text-accent font-semibold">0%</span>
                            <div className="w-16 sm:w-20 h-1 bg-white/10 rounded-full overflow-hidden">
                                <div
                                    ref={progressBarRef}
                                    className="h-full bg-accent origin-left"
                                    style={{ transform: 'scaleX(0)' }}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* ── Horizontal Sliding Track ── */}
                <div className="relative z-10 flex-1 flex items-center overflow-visible my-3">
                    <div
                        ref={trackRef}
                        className="flex space-x-6 sm:space-x-8 md:space-x-10 items-center pl-2 sm:pl-4 gpu-track"
                    >
                        {PROJECTS_DATA.map((project) => (
                            <ProjectCard
                                key={project.id}
                                project={project}
                            />
                        ))}
                    </div>
                </div>

                {/* ── Bottom Footer Telemetry ── */}
                <div className="relative z-20 flex items-center justify-between text-[10px] sm:text-[11px] font-mono text-white/40 border-t border-white/[0.06] pt-2.5">
                    <span>
                        VIEWING: <span ref={activeTitleRef} className="text-white font-bold">{PROJECTS_DATA[0].title}</span> (<span ref={activeIndexRef}>{PROJECTS_DATA[0].index}</span> / 08)
                    </span>
                    <span className="hidden sm:inline text-accent">
                        ✦ SCROLL MOUSE DOWN TO SLIDE PROJECTS →
                    </span>
                </div>
            </div>
        </section>
    );
};

export default Projects;
