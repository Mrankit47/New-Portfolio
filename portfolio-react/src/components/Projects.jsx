import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
    const projectsData = [
        {
            title: "Galaxium",
            category: "3D Space / WebGL",
            description: "A high-fidelity cinematic 3D solar system observatory. Features realistic planetary custom shaders, precise orbital mechanics, atmospheric simulation, and dynamic macro-to-micro camera traversals.",
            tech: ["React Three Fiber", "Three.js", "GSAP", "Custom Shaders"],
            github: "https://github.com/Mrankit47/Solar-System-Observation-",
            live: "https://solar-system-observation.vercel.app/"
        },
        {
            title: "BioSphere",
            category: "3D Education / WebGL",
            description: "An immersive 3D biology learning platform exploring life at every scale—from interactive cells, DNA replication, and viruses to organ systems and food webs in real-time.",
            tech: ["Next.js", "React Three Fiber", "Three.js", "Tailwind CSS"],
            github: "https://github.com/Mrankit47/Biosphere-",
            live: "https://biosphere-eatr.vercel.app/"
        },
        {
            title: "The Virtual Canvas",
            category: "Full Stack / RBAC",
            description: "RBAC-based full-stack web application with secure authentication, dynamic dashboards, and responsive UI for efficient user management.",
            tech: ["Next.js", "Tailwind CSS", "Sanity CMS"],
            github: "https://github.com/Mrankit47/The-Virtual-Canvas",
            live: "https://the-virtual-canvas-tvc.vercel.app/"
        },
        {
            title: "Tally ERP System",
            category: "ERP / Django",
            description: "Django-based ERP system with role-based access control, accounting modules, and responsive UI for financial and user management.",
            tech: ["Django", "PostgreSQL", "Tailwind CSS"],
            github: "https://github.com/Mrankit47/Tally-Erp-System",
            live: "https://tally-erp-system.onrender.com"
        },
        {
            title: "Lead Management System",
            category: "CRM / Django",
            description: "A secure, scalable lead management solution for tracking business inquiries, managing client data, and optimizing conversion workflows.",
            tech: ["Django", "PostgreSQL", "Python"],
            github: "https://github.com/Mrankit47/Leads-management-",
            live: "https://leads-management-egfi.onrender.com"
        },
        {
            title: "School Management System",
            category: "Education / React",
            description: "Comprehensive school administration portal for managing student records, faculty data, and academic operations with a seamless React UI.",
            tech: ["React", "Django", "PostgreSQL"],
            github: "https://github.com/Mrankit47/school-management-system",
            live: "https://school-management-system-1-ucmf.onrender.com"
        },
        {
            title: "Eagle In Cloud Website",
            category: "UI/UX / Frontend",
            description: "Redesigned company website using modern UI/UX principles with improved responsiveness and user experience.",
            tech: ["React", "Tailwind CSS"],
            github: "",
            live: "https://eagleinclouds.com/"
        }
    ];

    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Heading animation
            gsap.fromTo(".projects-heading", 
                { x: -50, opacity: 0 },
                { x: 0, opacity: 1, duration: 1, ease: "power3.out",
                    scrollTrigger: {
                        trigger: ".projects-heading",
                        start: "top 90%",
                        toggleActions: "play none none none",
                    }
                }
            );

            // Project cards stagger in
            gsap.fromTo(".project-card", 
                { y: 50, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: "power3.out",
                    scrollTrigger: {
                        trigger: ".projects-grid",
                        start: "top 90%",
                        toggleActions: "play none none none",
                    }
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section id="projects" ref={sectionRef} className="py-16 sm:py-32 px-4 sm:px-6 md:px-24 bg-dark-alt/50 border-y border-white/5">
            <div className="max-w-7xl mx-auto">
                <h2 className="projects-heading text-2xl sm:text-3xl font-bold mb-10 sm:mb-16 flex items-center text-white">
                    <span className="text-white/40 mr-4 font-mono text-sm">04.</span> Project work
                </h2>

                <div className="projects-grid grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
                    {projectsData.map((project, idx) => (
                        <div 
                            key={idx} 
                            className={`project-card ${idx === projectsData.length - 1 && projectsData.length % 2 !== 0 ? 'md:col-span-2' : ''}`}
                        >
                            <div className="group relative bg-dark border border-white/5 p-5 sm:p-8 md:p-10 hover:border-accent/50 hover:-translate-y-3 hover:shadow-[0_15px_40px_rgba(139,92,246,0.25)] transition-all duration-500 flex flex-col h-full">
                                <div className="flex justify-between items-start mb-4 sm:mb-8">
                                <div className="font-mono text-[10px] text-white/30 uppercase tracking-[0.2em]">{project.category}</div>
                                <div className="flex space-x-4">
                                    {project.github && (
                                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-accent transition-colors">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                                        </a>
                                    )}
                                </div>
                            </div>
                            
                            <div className="flex-grow">
                                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 group-hover:text-accent transition-colors">{project.title}</h3>
                                <p className="text-white/50 mb-4 sm:mb-8 leading-relaxed text-xs sm:text-sm">{project.description}</p>
                                <div className="flex flex-wrap gap-2 sm:gap-3 font-mono text-[10px] sm:text-[11px] text-accent/80 uppercase tracking-widest mb-6 sm:mb-10">
                                    {project.tech.map((t, i) => <span key={i}>{t}</span>)}
                                </div>
                            </div>

                            <div className="mt-auto flex justify-end">
                                <a 
                                    href={project.live} 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="inline-flex items-center space-x-3 text-xs font-mono uppercase tracking-[0.2em] text-white hover:text-accent transition-all group/btn"
                                >
                                    <span className="relative pb-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-accent after:transition-all group-hover/btn:after:w-full">
                                        Live View
                                    </span>
                                    <svg className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
