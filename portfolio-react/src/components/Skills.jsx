import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// ==========================================
// Reusable sub-component: TechCard
// ==========================================
const TechCard = ({ name, iconClass, svg, color, index, url }) => {
    const cardRef = useRef(null);
    const [tilt, setTilt] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseMove = (e) => {
        if (!cardRef.current) return;
        const card = cardRef.current;
        const rect = card.getBoundingClientRect();
        
        // Mouse coordinate relative to the card center
        const cardWidth = rect.width;
        const cardHeight = rect.height;
        const mouseX = e.clientX - rect.left - cardWidth / 2;
        const mouseY = e.clientY - rect.top - cardHeight / 2;

        // Calculate rotation angles (max 15 degrees)
        const rotateX = -(mouseY / (cardHeight / 2)) * 15;
        const rotateY = (mouseX / (cardWidth / 2)) * 15;

        setTilt({ x: rotateY, y: rotateX });
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        setTilt({ x: 0, y: 0 });
    };

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleClick = () => {
        if (url) {
            window.open(url, '_blank', 'noopener,noreferrer');
        }
    };

    // Style mapping for dynamic glow matching the technology color
    const glowStyle = isHovered 
        ? {
            boxShadow: `0 15px 35px -5px rgba(0, 0, 0, 0.6), 0 0 25px 2px ${color}44`,
            borderColor: `${color}66`,
            transform: `perspective(1000px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg) scale3d(1.05, 1.05, 1.05)`,
            background: 'rgba(255, 255, 255, 0.04)',
          }
        : {};

    const iconStyle = isHovered
        ? {
            filter: `drop-shadow(0 0 10px ${color}cc)`,
            transform: `translateZ(25px) scale(1.1) rotate(${tilt.x * 0.15}deg)`,
          }
        : {
            filter: 'grayscale(0.3) brightness(0.85)',
          };

    // Get float animation class based on index to randomize floating
    const floatClass = index % 3 === 0 
        ? 'animate-cyber-float-slow' 
        : index % 3 === 1 
            ? 'animate-cyber-float-medium' 
            : 'animate-cyber-float-fast';

    return (
        <div
            ref={cardRef}
            className={`tech-card relative p-2 sm:p-2.5 flex flex-col items-center justify-center rounded-2xl cursor-pointer select-none border border-white/[0.04] bg-white/[0.01] backdrop-blur-md transition-all duration-300 ease-out preserve-3d group ${floatClass}`}
            style={glowStyle}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handleClick}
        >
            {/* Holographic scanner effect line inside card on hover */}
            <div className="absolute inset-0 w-full h-[2px] bg-gradient-to-r from-transparent via-white/20 to-transparent top-0 group-hover:top-[100%] transition-all duration-1000 ease-in-out opacity-0 group-hover:opacity-100 pointer-events-none" />

            {/* Dynamic Colored Brand Ambient Backdrop Light */}
            <div 
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none"
                style={{
                    background: `radial-gradient(circle at center, ${color} 0%, transparent 70%)`
                }}
            />

            {/* Icon Wrapper (Sized even smaller as requested) */}
            <div 
                className="w-8 h-8 flex items-center justify-center mb-1.5 transition-all duration-300 preserve-3d"
                style={iconStyle}
            >
                {svg ? (
                    <div style={{ color }} className="w-5 h-5 flex items-center justify-center">
                        {svg}
                    </div>
                ) : (
                    <i className={`${iconClass} text-lg sm:text-xl`} />
                )}
            </div>

            {/* Tech Name Label */}
            <span className="text-[9px] sm:text-[11px] font-mono font-medium text-white/50 group-hover:text-white transition-colors duration-300 transform preserve-3d group-hover:translateZ(12px) text-center">
                {name}
            </span>
        </div>
    );
};

// ==========================================
// Reusable sub-component: TechCategory
// ==========================================
const TechCategory = ({ category, items, catIdx }) => {
    return (
        <div className="tech-category-wrapper relative rounded-2xl p-[1px] transition-all duration-500 hover:scale-[1.01]">
            {/* The Animated Conic Gradient Neon Border card */}
            <div className="cyber-gradient-border rounded-2xl h-full w-full">
                <div className="bg-[#0c0c0d]/90 backdrop-blur-2xl rounded-2xl p-4 sm:p-5 h-full flex flex-col justify-between relative overflow-hidden">
                    
                    {/* Decorative subtle technological grids inside card */}
                    <div className="absolute inset-0 cyber-grid-bg opacity-[0.03] pointer-events-none" />

                    {/* Category Title Header */}
                    <div className="flex items-center justify-between mb-3 relative z-10 border-b border-white/[0.04] pb-2">
                        <div className="flex items-center space-x-2">
                            <span className="font-mono text-accent text-xs sm:text-sm font-semibold">
                                &lt;0{catIdx + 1}&gt;
                            </span>
                            <h3 className="text-xs sm:text-sm font-semibold uppercase tracking-wide text-white">
                                {category}
                            </h3>
                        </div>
                        {/* Status blinking dot for cyber UI look */}
                        <div className="flex items-center space-x-1.5">
                            <span className="w-1 h-1 rounded-full bg-accent animate-pulse" />
                            <span className="text-[9px] font-mono text-white/30 uppercase tracking-widest hidden sm:inline">
                                ONLINE
                            </span>
                        </div>
                    </div>

                    {/* Responsive Tech Cards Grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 relative z-10">
                        {items.map((skill, sIdx) => (
                            <TechCard 
                                key={sIdx}
                                name={skill.name}
                                iconClass={skill.iconClass}
                                svg={skill.svg}
                                color={skill.color}
                                index={sIdx}
                                url={skill.url}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

// ==========================================
// Main Component: Skills (Tech Stack Section)
// ==========================================
const Skills = () => {
    const skillsData = [
        {
            category: "Languages",
            items: [
                { name: "Python", iconClass: "devicon-python-plain colored", color: "#3776AB", url: "https://docs.python.org/3/" },
                { name: "C", iconClass: "devicon-c-plain colored", color: "#60A5FA", url: "https://en.cppreference.com/w/c" },
                { name: "C++", iconClass: "devicon-cplusplus-plain colored", color: "#3B82F6", url: "https://en.cppreference.com/w/cpp" },
            ]
        },
        {
            category: "Frontend",
            items: [
                { name: "HTML5", iconClass: "devicon-html5-plain colored", color: "#E34F26", url: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
                { name: "CSS3", iconClass: "devicon-css3-plain colored", color: "#1572B6", url: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
                { name: "React", iconClass: "devicon-react-original colored", color: "#61DAFB", url: "https://react.dev" },
            ]
        },
        {
            category: "Backend",
            items: [
                { name: "Django", iconClass: "devicon-django-plain colored", color: "#10B981", url: "https://docs.djangoproject.com/" },
                { name: "FastAPI", iconClass: "devicon-fastapi-plain colored", color: "#009688", url: "https://fastapi.tiangolo.com/" },
            ]
        },
        {
            category: "Databases",
            items: [
                { name: "PostgreSQL", iconClass: "devicon-postgresql-plain colored", color: "#4169E1", url: "https://www.postgresql.org/docs/" },
                { name: "SQLite", iconClass: "devicon-sqlite-plain colored", color: "#38BDF8", url: "https://www.sqlite.org/docs.html" },
                { name: "Supabase", iconClass: "devicon-supabase-plain colored", color: "#3ECF8E", url: "https://supabase.com/docs" },
            ]
        },
        {
            category: "Tools",
            items: [
                { name: "GitHub", iconClass: "devicon-github-original text-white", color: "#FFFFFF", url: "https://docs.github.com/" },
                { name: "VS Code", iconClass: "devicon-vscode-plain colored", color: "#007ACC", url: "https://code.visualstudio.com/docs" },
                { 
                    name: "Antigravity", 
                    color: "#A78BFA", 
                    url: "https://xkcd.com/353/",
                    svg: (
                        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <circle cx="12" cy="12" r="9" strokeDasharray="3 3" className="animate-spin" style={{ animationDuration: '15s' }} />
                            <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="1" opacity="0.5" />
                            <path d="M12 8l3 4h-6z" fill="currentColor" />
                            <line x1="12" y1="12" x2="12" y2="16" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                    )
                },
            ]
        },
        {
            category: "Deployment",
            items: [
                { name: "Vercel", iconClass: "devicon-vercel-original text-white", color: "#FFFFFF", url: "https://vercel.com/docs" },
                { 
                    name: "Render", 
                    color: "#46E3B7", 
                    url: "https://render.com/docs",
                    svg: <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor"><path d="M18.263.007c-3.121-.147-5.744 2.109-6.192 5.082-.018.138-.045.272-.067.405-.696 3.703-3.936 6.507-7.827 6.507-1.388 0-2.691-.356-3.825-.979a.2024.2024 0 0 0-.302.178V24H12v-8.999c0-1.656 1.338-3 2.987-3h2.988c3.382 0 6.103-2.817 5.97-6.244-.12-3.084-2.61-5.603-5.682-5.75"/></svg> 
                },
                { 
                    name: "Railway", 
                    color: "#FF007A", 
                    url: "https://docs.railway.app/",
                    svg: <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor"><path d="M.113 10.27A13.026 13.026 0 000 11.48h18.23c-.064-.125-.15-.237-.235-.347-3.117-4.027-4.793-3.677-7.19-3.78-.8-.034-1.34-.048-4.524-.048-1.704 0-3.555.005-5.358.01-.234.63-.459 1.24-.567 1.737h9.342v1.216H.113v.002zm18.26 2.426H.009c.02.326.05.645.094.961h16.955c.754 0 1.179-.429 1.315-.96zm-17.318 4.28s2.81 6.902 10.93 7.024c4.855 0 9.027-2.883 10.92-7.024H1.056zM11.988 0C7.5 0 3.593 2.466 1.531 6.108l4.75-.005v-.002c3.71 0 3.849.016 4.573.047l.448.016c1.563.052 3.485.22 4.996 1.364.82.621 2.007 1.99 2.712 2.965.654.902.842 1.94.396 2.934-.408.914-1.289 1.458-2.353 1.458H.391s.099.42.249.886h22.748A12.026 12.026 0 0024 12.005C24 5.377 18.621 0 11.988 0z"/></svg> 
                },
            ]
        }
    ];

    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Title reveal
            gsap.fromTo(".skills-heading", 
                {
                    y: 30,
                    opacity: 0,
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: ".skills-heading",
                        start: "top 85%",
                    }
                }
            );

            // Staggered categories reveal
            gsap.fromTo(".tech-category-wrapper", 
                {
                    y: 60,
                    opacity: 0,
                    scale: 0.95,
                },
                {
                    y: 0,
                    opacity: 1,
                    scale: 1,
                    duration: 0.8,
                    stagger: 0.12,
                    ease: "power4.out",
                    scrollTrigger: {
                        trigger: ".skills-categories-grid",
                        start: "top 80%",
                        toggleActions: "play none none none"
                    }
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section 
            id="skills" 
            ref={sectionRef} 
            className="py-20 sm:py-32 px-4 sm:px-6 md:px-12 lg:px-24 bg-dark-alt/20 border-y border-white/5 relative overflow-hidden"
        >
            {/* Ambient Background Glow Mesh and Orbs */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
                {/* Subtle Cyber Grid overlay */}
                <div className="absolute inset-0 cyber-grid-bg opacity-[0.06]" />

                {/* Glowing purple and cyan futuristic mesh/orbs */}
                <div className="absolute top-[10%] left-[5%] w-[350px] h-[350px] rounded-full bg-accent/8 filter blur-[100px] animate-orb-pulse-1" />
                <div className="absolute bottom-[10%] right-[5%] w-[400px] h-[400px] rounded-full bg-pink-500/5 filter blur-[120px] animate-orb-pulse-2" />
                <div className="absolute top-[40%] left-[45%] -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] rounded-full bg-blue-500/5 filter blur-[130px] animate-orb-pulse-1" />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header Title matching standard portfolio headers */}
                <h2 className="skills-heading text-2xl sm:text-3xl font-bold mb-10 sm:mb-16 flex items-center text-white">
                    <span className="text-white/40 mr-4 font-mono text-sm">02.</span> Tech Stack
                </h2>

                {/* Main 3-column Categories Grid */}
                <div className="skills-categories-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {skillsData.map((cat, idx) => (
                        <TechCategory 
                            key={idx}
                            category={cat.category}
                            items={cat.items}
                            catIdx={idx}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
