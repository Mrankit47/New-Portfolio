import React, { useEffect, useRef, useState } from 'react';
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
        color: "#F59E0B",
        badge: "CLIENT UI/UX",
        accentGradient: "from-amber-900/40 via-yellow-900/20 to-black"
    }
];

const ProjectCard = ({ project, isActive, onSelect }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [loadIframe, setLoadIframe] = useState(false);

    return (
        <div
            onMouseEnter={() => {
                setIsHovered(true);
                setLoadIframe(true);
            }}
            onMouseLeave={() => setIsHovered(false)}
            className="group relative w-[88vw] sm:w-[540px] md:w-[620px] lg:w-[680px] h-[400px] sm:h-[450px] md:h-[480px] flex-shrink-0 rounded-2xl overflow-hidden border border-white/[0.08] bg-[#0c0c0f] shadow-2xl transition-all duration-300 hover:border-accent/60 hover:shadow-[0_20px_50px_rgba(139,92,246,0.2)] flex flex-col justify-between"
            style={{ contain: 'paint layout' }}
        >
            {/* ========================================== */}
            {/* Live Website Background Layer              */}
            {/* ========================================== */}
            <div className={`absolute inset-0 z-0 overflow-hidden bg-gradient-to-br ${project.accentGradient}`}>
                {/* Lazy-loaded Iframe on Hover / Click for 100% Lag-Free Scrolling */}
                {loadIframe ? (
                    <iframe
                        src={project.live}
                        title={`${project.title} live website preview`}
                        loading="lazy"
                        tabIndex={-1}
                        className="absolute -top-[10%] -left-[10%] w-[160%] h-[160%] scale-[0.62] origin-top-left pointer-events-none opacity-40 group-hover:opacity-75 transition-opacity duration-500 border-0 filter brightness-[0.9] contrast-[1.05]"
                    />
                ) : (
                    /* Lightweight Cyber Grid & Ambient Art Preview */
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden opacity-30 group-hover:opacity-50 transition-opacity">
                        <div className="absolute inset-0 cyber-grid-bg opacity-30" />
                        <div
                            className="w-[300px] h-[300px] rounded-full filter blur-[80px]"
                            style={{ backgroundColor: `${project.color}33` }}
                        />
                        <div className="relative font-mono text-5xl font-black text-white/[0.04] select-none tracking-widest uppercase">
                            {project.title}
                        </div>
                    </div>
                )}

                {/* Gradient Overlay for Ultra-Crisp Text Readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b0b] via-[#0b0b0b]/85 to-[#0b0b0b]/40 pointer-events-none" />

                {/* Dynamic Brand Spotlight Glow */}
                <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-15 transition-opacity duration-500 pointer-events-none"
                    style={{ background: `radial-gradient(circle at center, ${project.color} 0%, transparent 80%)` }}
                />
            </div>

            {/* ========================================== */}
            {/* Mock Browser Top Header Bar                */}
            {/* ========================================== */}
            <div className="relative z-10 px-4 sm:px-5 py-3 border-b border-white/[0.08] bg-[#0a0a0d]/80 backdrop-blur-md flex items-center justify-between">
                {/* Window Traffic Dots */}
                <div className="flex items-center space-x-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
                </div>

                {/* Mock URL Chip */}
                <div className="px-3 py-1 rounded-md bg-black/50 border border-white/[0.06] text-[10px] sm:text-[11px] font-mono text-white/60 flex items-center space-x-1.5 max-w-[200px] sm:max-w-[340px] truncate">
                    <svg className="w-3 h-3 text-emerald-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                    <span className="truncate">{project.live.replace('https://', '')}</span>
                </div>

                {/* Live Badge */}
                <div className="flex items-center space-x-1.5 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-[9px] font-mono text-emerald-400 font-semibold uppercase tracking-wider hidden sm:inline">
                        LIVE
                    </span>
                </div>
            </div>

            {/* ========================================== */}
            {/* Card Body & Details                        */}
            {/* ========================================== */}
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
                            className="text-white/40 hover:text-white transition-colors p-1"
                            title="View GitHub Repository"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                            </svg>
                        </a>
                    )}
                </div>

                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-accent transition-colors">
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
                        className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-lg bg-accent hover:bg-accent/80 text-white text-xs font-mono font-semibold transition-all shadow-lg hover:shadow-accent/40 group/btn"
                    >
                        <span>LAUNCH SITE</span>
                        <svg className="w-3.5 h-3.5 transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    );
};

const Projects = () => {
    const sectionRef = useRef(null);
    const triggerRef = useRef(null);
    const trackRef = useRef(null);
    const [scrollProgress, setScrollProgress] = useState(0);
    const [activeProjectIndex, setActiveProjectIndex] = useState(0);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const track = trackRef.current;
            const trigger = triggerRef.current;
            if (!track || !trigger) return;

            // Heading animation
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

            // Calculate precise horizontal scroll width so all 7 projects (including Leads Management) slide fully
            const getScrollDistance = () => {
                const totalWidth = track.scrollWidth;
                const viewWidth = window.innerWidth;
                return Math.max(0, totalWidth - viewWidth + 160);
            };

            const pinTimeline = gsap.to(track, {
                x: () => -getScrollDistance(),
                ease: "none",
                scrollTrigger: {
                    trigger: trigger,
                    start: "top top",
                    end: () => `+=${getScrollDistance()}`,
                    scrub: 0.8,
                    pin: true,
                    anticipatePin: 1,
                    invalidateOnRefresh: true,
                    onUpdate: (self) => {
                        const progress = self.progress;
                        setScrollProgress(Math.round(progress * 100));
                        const activeIdx = Math.min(
                            PROJECTS_DATA.length - 1,
                            Math.floor(progress * PROJECTS_DATA.length)
                        );
                        setActiveProjectIndex(activeIdx);
                    }
                }
            });

            // Ensure ScrollTrigger refreshes accurately after mounting
            ScrollTrigger.refresh();
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    // Quick Jump button handler to smoothly scroll to any specific project
    const scrollToProject = (index) => {
        const trigger = triggerRef.current;
        const track = trackRef.current;
        if (!trigger || !track) return;

        const st = ScrollTrigger.getById(trigger);
        const totalDistance = track.scrollWidth - window.innerWidth + 160;
        const progressTarget = index / (PROJECTS_DATA.length - 1);

        // Find scroll position corresponding to this project
        const scrollStart = trigger.offsetTop;
        const targetScroll = scrollStart + progressTarget * totalDistance;

        window.scrollTo({
            top: targetScroll,
            behavior: 'smooth'
        });
    };

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
                {/* Ambient Glows */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
                    <div className="absolute top-[20%] right-[10%] w-[500px] h-[500px] rounded-full bg-accent/8 filter blur-[150px]" />
                    <div className="absolute bottom-[20%] left-[5%] w-[450px] h-[450px] rounded-full bg-cyan-500/5 filter blur-[140px]" />
                </div>

                {/* Top Header & Progress */}
                <div className="projects-main-heading relative z-20 flex flex-col sm:flex-row sm:items-center justify-between border-b border-white/[0.06] pb-3 sm:pb-4 gap-3">
                    <div>
                        <div className="flex items-center space-x-2 font-mono text-[11px] text-accent uppercase tracking-widest mb-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-ping" />
                            <span>FEATURED CASE STUDIES</span>
                        </div>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white flex items-center">
                            <span className="text-white/40 mr-4 font-mono text-sm sm:text-base">04.</span> Project Work
                        </h2>
                    </div>

                    {/* Project Navigator Pills (Click to jump to any project) */}
                    <div className="flex items-center space-x-2 overflow-x-auto pb-1 scrollbar-none">
                        <div className="hidden lg:flex items-center space-x-1.5 mr-2">
                            {PROJECTS_DATA.map((p, i) => (
                                <button
                                    key={p.id}
                                    onClick={() => scrollToProject(i)}
                                    className={`px-2.5 py-1 rounded-md text-[10px] font-mono transition-all cursor-pointer border ${
                                        activeProjectIndex === i
                                            ? "bg-accent/20 border-accent text-white font-bold"
                                            : "bg-white/[0.02] border-white/[0.06] text-white/40 hover:text-white"
                                    }`}
                                >
                                    {p.index}. {p.title.split(' ')[0]}
                                </button>
                            ))}
                        </div>

                        {/* Progress readout */}
                        <div className="px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] text-white/70 flex items-center space-x-2 text-xs font-mono">
                            <span className="text-accent font-semibold">{scrollProgress}%</span>
                            <div className="w-16 sm:w-20 h-1 bg-white/10 rounded-full overflow-hidden">
                                <div 
                                    className="h-full bg-accent transition-all duration-150"
                                    style={{ width: `${scrollProgress}%` }}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Horizontal Sliding Track of Project Cards */}
                <div className="relative z-10 flex-1 flex items-center overflow-visible my-3">
                    <div 
                        ref={trackRef} 
                        className="flex space-x-6 sm:space-x-8 md:space-x-10 items-center pl-2 sm:pl-4 will-change-transform"
                        style={{
                            transform: 'translate3d(0, 0, 0)',
                            backfaceVisibility: 'hidden'
                        }}
                    >
                        {PROJECTS_DATA.map((project, idx) => (
                            <ProjectCard
                                key={project.id}
                                project={project}
                                isActive={activeProjectIndex === idx}
                                onSelect={() => scrollToProject(idx)}
                            />
                        ))}
                    </div>
                </div>

                {/* Bottom Footer Telemetry */}
                <div className="relative z-20 flex items-center justify-between text-[10px] sm:text-[11px] font-mono text-white/40 border-t border-white/[0.06] pt-2.5">
                    <span>
                        VIEWING: <span className="text-white font-bold">{PROJECTS_DATA[activeProjectIndex]?.title}</span> ({PROJECTS_DATA[activeProjectIndex]?.index} / 07)
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
