import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Timeline line animation
            gsap.to(".exp-line", {
                scaleY: 1,
                ease: "none",
                scrollTrigger: {
                    trigger: ".exp-timeline",
                    start: "top 70%",
                    end: "bottom 80%",
                    scrub: 1,
                }
            });

            // Header animation
            gsap.from(".exp-header", {
                y: 30,
                opacity: 0,
                duration: 1,
                scrollTrigger: {
                    trigger: ".exp-header",
                    start: "top 85%",
                }
            });

            // Role & Company animation
            gsap.from(".exp-info", {
                x: -30,
                opacity: 0,
                duration: 1,
                scrollTrigger: {
                    trigger: ".exp-info",
                    start: "top 85%",
                }
            });

            // Staggered list items
            gsap.from(".exp-item", {
                y: 20,
                opacity: 0,
                duration: 0.8,
                stagger: 0.2,
                scrollTrigger: {
                    trigger: ".exp-list",
                    start: "top 80%",
                }
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const experiences = [
        "Developed and maintained full-stack web applications using Django, React, and Tailwind CSS",
        "Built a Tally ERP system with Django backend and responsive frontend",
        "Developed a Lead Management System for workflow automation",
        "Created a School Management System with REST APIs and role-based access",
        "Redesigned company website UI for better usability and responsiveness",
        "Built and integrated REST APIs using Django REST Framework",
        "Optimized database queries and improved performance using Django ORM"
    ];

    return (
        <section id="experience" ref={sectionRef} className="py-16 sm:py-32 px-4 sm:px-6 md:px-24 bg-dark relative overflow-hidden">
            <div className="max-w-5xl mx-auto">
                <h2 className="exp-header text-2xl sm:text-3xl font-bold mb-10 sm:mb-16 flex items-center">
                    <span className="text-accent mr-4 font-mono text-sm">03.</span> Experience
                </h2>

                <div className="exp-timeline relative pl-4 sm:pl-8 ml-2 sm:ml-4">
                    {/* The Background Line */}
                    <div className="absolute top-0 bottom-0 left-0 w-[2px] bg-white/10"></div>
                    
                    {/* The Animated Accent Line */}
                    <div className="exp-line absolute top-0 bottom-0 left-0 w-[2px] bg-accent origin-top scale-y-0"></div>

                    {/* Top Dot */}
                    <div className="absolute -left-[3px] top-0 w-2 h-2 bg-accent rounded-full shadow-[0_0_10px_#8b5cf6] z-10"></div>
                    
                    <div className="exp-info mb-12 relative z-10">
                        <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                            <h3 className="text-xl sm:text-2xl font-bold text-white">Eagle In Cloud</h3>
                            <span className="text-xs font-mono text-white/30 uppercase tracking-widest">Jan 2026 — Apr 2026</span>
                        </div>
                        <p className="text-accent font-medium mb-8">Full Stack and Python Developer Intern</p>
                    </div>

                    <ul className="exp-list space-y-4 sm:space-y-6">
                        {experiences.map((exp, idx) => (
                            <li key={idx} className="exp-item flex items-start space-x-4 group">
                                <span className="mt-2 w-1.5 h-1.5 bg-accent/40 rounded-full group-hover:bg-accent transition-colors duration-300"></span>
                                <p className="text-sm sm:text-base text-white/60 leading-relaxed group-hover:text-white transition-colors duration-300">{exp}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Experience;
