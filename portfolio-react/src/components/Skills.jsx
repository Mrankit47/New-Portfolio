import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// ==========================================
// Clean Tech Stack Data
// ==========================================
const SKILLS_CATEGORIES = [
    {
        id: "languages",
        category: "Languages",
        index: "01",
        description: "Core programming languages for algorithmic computing and system architectures.",
        items: [
            { 
                name: "Python", 
                role: "Core Backend & Scripts", 
                iconClass: "devicon-python-plain colored", 
                color: "#3776AB", 
                url: "https://docs.python.org/3/" 
            },
            { 
                name: "C", 
                role: "Low-Level Systems", 
                iconClass: "devicon-c-plain colored", 
                color: "#60A5FA", 
                url: "https://en.cppreference.com/w/c" 
            },
            { 
                name: "C++", 
                role: "OOP & High Performance", 
                iconClass: "devicon-cplusplus-plain colored", 
                color: "#3B82F6", 
                url: "https://en.cppreference.com/w/cpp" 
            },
        ]
    },
    {
        id: "frontend",
        category: "Frontend",
        index: "02",
        description: "Modern UI libraries and responsive design systems for immersive web applications.",
        items: [
            { 
                name: "React", 
                role: "Component Architecture", 
                iconClass: "devicon-react-original colored", 
                color: "#61DAFB", 
                url: "https://react.dev" 
            },
            { 
                name: "HTML5", 
                role: "Semantic Web Structure", 
                iconClass: "devicon-html5-plain colored", 
                color: "#E34F26", 
                url: "https://developer.mozilla.org/en-US/docs/Web/HTML" 
            },
            { 
                name: "CSS3", 
                role: "Keyframes & Shaders", 
                iconClass: "devicon-css3-plain colored", 
                color: "#2965F1", 
                url: "https://developer.mozilla.org/en-US/docs/Web/CSS" 
            },
        ]
    },
    {
        id: "backend",
        category: "Backend",
        index: "03",
        description: "Scalable backend frameworks, RESTful APIs, and enterprise server logic.",
        items: [
            { 
                name: "Django", 
                role: "REST APIs & ORM", 
                iconClass: "devicon-django-plain colored", 
                color: "#10B981", 
                url: "https://docs.djangoproject.com/" 
            },
            { 
                name: "FastAPI", 
                role: "Async High-Speed APIs", 
                iconClass: "devicon-fastapi-plain colored", 
                color: "#009688", 
                url: "https://fastapi.tiangolo.com/" 
            },
            { 
                name: "REST API", 
                role: "Architecture & Endpoints", 
                color: "#F97316", 
                url: "https://restfulapi.net/",
                svg: (
                    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8">
                        <circle cx="18" cy="5" r="3" />
                        <circle cx="6" cy="12" r="3" />
                        <circle cx="18" cy="19" r="3" />
                        <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" strokeLinecap="round" />
                        <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" strokeLinecap="round" />
                    </svg>
                )
            },
        ]
    },
    {
        id: "databases",
        category: "Databases",
        index: "04",
        description: "Relational SQL stores, cloud real-time databases, and embedded engines.",
        items: [
            { 
                name: "PostgreSQL", 
                role: "Enterprise Relational DB", 
                iconClass: "devicon-postgresql-plain colored", 
                color: "#4169E1", 
                url: "https://www.postgresql.org/docs/" 
            },
            { 
                name: "Supabase", 
                role: "Cloud Real-Time DB", 
                iconClass: "devicon-supabase-plain colored", 
                color: "#3ECF8E", 
                url: "https://supabase.com/docs" 
            },
            { 
                name: "SQLite", 
                role: "Embedded Local Store", 
                iconClass: "devicon-sqlite-plain colored", 
                color: "#38BDF8", 
                url: "https://www.sqlite.org/docs.html" 
            },
        ]
    },
    {
        id: "tools",
        category: "Tools",
        index: "05",
        description: "Development environments, version control, and AI-accelerated workflows.",
        items: [
            { 
                name: "GitHub", 
                role: "Version Control & CI/CD", 
                iconClass: "devicon-github-original text-white", 
                color: "#E2E8F0", 
                url: "https://docs.github.com/" 
            },
            { 
                name: "VS Code", 
                role: "Primary Development IDE", 
                iconClass: "devicon-vscode-plain colored", 
                color: "#007ACC", 
                url: "https://code.visualstudio.com/docs" 
            },
            { 
                name: "Antigravity AI", 
                role: "Agentic Development", 
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
        id: "deployment",
        category: "Deployment",
        index: "06",
        description: "Cloud infrastructure, serverless edge hosting, and microservice pipelines.",
        items: [
            { 
                name: "Vercel", 
                role: "Edge Frontend Cloud", 
                iconClass: "devicon-vercel-original text-white", 
                color: "#FFFFFF", 
                url: "https://vercel.com/docs" 
            },
            { 
                name: "Render", 
                role: "Cloud Web Services", 
                color: "#46E3B7", 
                url: "https://render.com/docs",
                svg: (
                    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                        <path d="M18.263.007c-3.121-.147-5.744 2.109-6.192 5.082-.018.138-.045.272-.067.405-.696 3.703-3.936 6.507-7.827 6.507-1.388 0-2.691-.356-3.825-.979a.2024.2024 0 0 0-.302.178V24H12v-8.999c0-1.656 1.338-3 2.987-3h2.988c3.382 0 6.103-2.817 5.97-6.244-.12-3.084-2.61-5.603-5.682-5.75" />
                    </svg>
                )
            },
            { 
                name: "Railway", 
                role: "Micro-Infrastructure", 
                color: "#FF007A", 
                url: "https://docs.railway.app/",
                svg: (
                    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                        <path d="M.113 10.27A13.026 13.026 0 000 11.48h18.23c-.064-.125-.15-.237-.235-.347-3.117-4.027-4.793-3.677-7.19-3.78-.8-.034-1.34-.048-4.524-.048-1.704 0-3.555.005-5.358.01-.234.63-.459 1.24-.567 1.737h9.342v1.216H.113v.002zm18.26 2.426H.009c.02.326.05.645.094.961h16.955c.754 0 1.179-.429 1.315-.96zm-17.318 4.28s2.81 6.902 10.93 7.024c4.855 0 9.027-2.883 10.92-7.024H1.056zM11.988 0C7.5 0 3.593 2.466 1.531 6.108l4.75-.005v-.002c3.71 0 3.849.016 4.573.047l.448.016c1.563.052 3.485.22 4.996 1.364.82.621 2.007 1.99 2.712 2.965.654.902.842 1.94.396 2.934-.408.914-1.289 1.458-2.353 1.458H.391s.099.42.249.886h22.748A12.026 12.026 0 0024 12.005C24 5.377 18.621 0 11.988 0z" />
                    </svg>
                )
            },
        ]
    }
];

const FILTER_TABS = ["All", "Languages", "Frontend", "Backend", "Databases", "Tools", "Deployment"];

// ==========================================
// Sub-component: Clean Tech Item Tile with Cursor Spotlight
// ==========================================
const TechTile = ({ item }) => {
    const tileRef = useRef(null);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseMove = (e) => {
        if (!tileRef.current) return;
        const rect = tileRef.current.getBoundingClientRect();
        setMousePos({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top
        });
    };

    const handleClick = () => {
        if (item.url) {
            window.open(item.url, '_blank', 'noopener,noreferrer');
        }
    };

    return (
        <div
            ref={tileRef}
            onClick={handleClick}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="group relative p-3 sm:p-4 rounded-xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04] backdrop-blur-md cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:border-white/20 flex items-center space-x-3.5 overflow-hidden"
            style={{
                boxShadow: isHovered ? `0 10px 25px -5px rgba(0, 0, 0, 0.5), 0 0 20px 2px ${item.color}25` : 'none'
            }}
        >
            {/* Dynamic Cursor Spotlight Radial Glow */}
            {isHovered && (
                <div
                    className="absolute pointer-events-none transition-opacity duration-300"
                    style={{
                        top: mousePos.y - 75,
                        left: mousePos.x - 75,
                        width: 150,
                        height: 150,
                        background: `radial-gradient(circle, ${item.color}33 0%, transparent 70%)`,
                        borderRadius: '50%'
                    }}
                />
            )}

            {/* Icon Container with subtle brand glow */}
            <div
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-lg bg-black/40 border border-white/[0.08] flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:border-white/20"
                style={{
                    boxShadow: isHovered ? `0 0 15px ${item.color}44` : 'none'
                }}
            >
                {item.svg ? (
                    <div style={{ color: item.color }} className="w-5 h-5 flex items-center justify-center">
                        {item.svg}
                    </div>
                ) : (
                    <i
                        className={`${item.iconClass} text-xl sm:text-2xl`}
                        style={{
                            filter: isHovered ? `drop-shadow(0 0 8px ${item.color}cc)` : 'grayscale(0.15)'
                        }}
                    />
                )}
            </div>

            {/* Tech Name & Role */}
            <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                    <h4 className="text-xs sm:text-sm font-semibold text-white group-hover:text-white transition-colors truncate">
                        {item.name}
                    </h4>
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-white/40 text-[10px]">
                        ↗
                    </span>
                </div>
                <p className="text-[10px] sm:text-[11px] font-mono text-white/40 truncate group-hover:text-white/60 transition-colors">
                    {item.role}
                </p>
            </div>
        </div>
    );
};

// ==========================================
// Sub-component: Clean Category Box
// ==========================================
const CategoryBox = ({ categoryData }) => {
    return (
        <div className="tech-category-card relative rounded-2xl p-[1px] transition-all duration-500 hover:scale-[1.01]">
            <div className="cyber-gradient-border rounded-2xl h-full w-full">
                <div className="bg-[#0d0d10]/95 backdrop-blur-2xl rounded-2xl p-5 sm:p-6 h-full flex flex-col justify-between relative overflow-hidden border border-white/[0.04]">
                    
                    {/* Header */}
                    <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/[0.05]">
                        <div className="flex items-center space-x-2.5">
                            <span className="font-mono text-accent text-xs sm:text-sm font-bold">
                                &lt;{categoryData.index}&gt;
                            </span>
                            <h3 className="text-sm sm:text-base font-bold uppercase tracking-wider text-white">
                                {categoryData.category}
                            </h3>
                        </div>

                        {/* Clean Status Pill */}
                        <div className="flex items-center space-x-1.5 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                            <span className="text-[9px] font-mono text-emerald-400 font-semibold uppercase tracking-widest">
                                ONLINE
                            </span>
                        </div>
                    </div>

                    {/* Tech Items List */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                        {categoryData.items.map((item, idx) => (
                            <TechTile key={idx} item={item} />
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
    const [activeFilter, setActiveFilter] = useState("All");
    const sectionRef = useRef(null);

    // Filter categories based on active tab
    const displayedCategories = activeFilter === "All"
        ? SKILLS_CATEGORIES
        : SKILLS_CATEGORIES.filter(c => c.category.toLowerCase() === activeFilter.toLowerCase());

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Heading Entrance
            gsap.fromTo(".skills-header",
                { y: 30, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: ".skills-header",
                        start: "top 85%",
                    }
                }
            );

            // Stagger Categories Grid
            gsap.fromTo(".tech-category-card",
                { y: 40, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.7,
                    stagger: 0.1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: ".skills-grid",
                        start: "top 85%",
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
            {/* Ambient Background Glow Mesh */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
                <div className="absolute inset-0 cyber-grid-bg opacity-[0.04]" />
                <div className="absolute top-[15%] left-[10%] w-[350px] h-[350px] rounded-full bg-accent/8 filter blur-[110px] animate-orb-pulse-1" />
                <div className="absolute bottom-[15%] right-[10%] w-[400px] h-[400px] rounded-full bg-pink-500/5 filter blur-[120px] animate-orb-pulse-2" />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Section Header */}
                <div className="skills-header flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12">
                    <div>
                        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white flex items-center">
                            <span className="text-white/40 mr-4 font-mono text-sm sm:text-base">02.</span> Tech Stack
                        </h2>
                    </div>

                    {/* Clean Minimalist Category Filter Pills */}
                    <div className="mt-6 md:mt-0 flex items-center space-x-1.5 overflow-x-auto pb-2 scrollbar-none">
                        {FILTER_TABS.map((tab) => {
                            const isActive = activeFilter.toLowerCase() === tab.toLowerCase();
                            return (
                                <button
                                    key={tab}
                                    onClick={() => setActiveFilter(tab)}
                                    className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all cursor-pointer border ${
                                        isActive
                                            ? "border-accent bg-accent/20 text-white font-semibold shadow-md shadow-accent/20"
                                            : "border-white/[0.05] bg-black/20 text-white/50 hover:text-white hover:border-white/20"
                                    }`}
                                >
                                    {tab}
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* Main Clean Categories Grid */}
                <div className="skills-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
                    {displayedCategories.map((catData) => (
                        <CategoryBox
                            key={catData.id}
                            categoryData={catData}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
