import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Education = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Animate the vertical timeline line drawing down
            gsap.to(".education-line", {
                scaleY: 1,
                ease: "none",
                scrollTrigger: {
                    trigger: ".education-timeline",
                    start: "top 70%",
                    end: "bottom 80%",
                    scrub: 1,
                }
            });

            // Animate each education item fading in as the line reaches it
            gsap.from(".education-item", {
                opacity: 0,
                x: -30,
                stagger: 0.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: ".education-timeline",
                    start: "top 70%",
                    end: "bottom 80%",
                    scrub: 1,
                }
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section id="education" ref={sectionRef} className="py-16 sm:py-32 px-4 sm:px-6 md:px-24 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-24">
            <div className="reveal-on-scroll">
                <h2 className="text-2xl sm:text-3xl font-bold mb-10 sm:mb-16 flex items-center">
                    <span className="text-accent mr-4 font-mono text-sm">05.</span>
                    Education
                </h2>
                
                {/* Timeline Container */}
                <div className="education-timeline relative pl-8 sm:pl-12 space-y-10">
                    {/* The Background Line */}
                    <div className="absolute top-0 bottom-0 left-[7px] w-[2px] bg-white/10"></div>
                    
                    {/* The Animated Accent Line */}
                    <div className="education-line absolute top-0 bottom-0 left-[7px] w-[2px] bg-accent origin-top scale-y-0"></div>

                    {/* Items */}
                    <div className="education-item relative">
                        <div className="absolute w-4 h-4 bg-dark border-2 border-accent rounded-full -left-8 sm:-left-12 top-1.5 z-10 shadow-[0_0_10px_rgba(139,92,246,0.5)]"></div>
                        <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">Master of Computer Application (MCA)</h3>
                        <p className="text-white/50 mb-1">Shri Vaishnav Vidyapeeth Vishwavidyalaya</p>
                        <p className="text-accent font-mono text-xs">2024 — 2026</p>
                    </div>

                    <div className="education-item relative">
                        <div className="absolute w-4 h-4 bg-dark border-2 border-white/20 rounded-full -left-8 sm:-left-12 top-1.5 z-10 transition-colors duration-300"></div>
                        <h3 className="text-xl font-bold mb-2">Bachelor of Computer Application (BCA)</h3>
                        <p className="text-white/50 mb-1">Devi Ahilya University, Indore</p>
                        <p className="text-accent font-mono text-xs">2020 — 2024</p>
                    </div>

                    <div className="education-item relative">
                        <div className="absolute w-4 h-4 bg-dark border-2 border-white/20 rounded-full -left-8 sm:-left-12 top-1.5 z-10 transition-colors duration-300"></div>
                        <h3 className="text-xl font-bold mb-2">Class 12th</h3>
                        <p className="text-white/50 mb-1">Board of Education, Bhopal</p>
                        <p className="text-accent font-mono text-xs">2019 — 2020</p>
                    </div>

                    <div className="education-item relative">
                        <div className="absolute w-4 h-4 bg-dark border-2 border-white/20 rounded-full -left-8 sm:-left-12 top-1.5 z-10 transition-colors duration-300"></div>
                        <h3 className="text-xl font-bold mb-2">Class 10th</h3>
                        <p className="text-white/50 mb-1">Board of Education, Bhopal</p>
                        <p className="text-accent font-mono text-xs">2016 — 2017</p>
                    </div>
                </div>
            </div>

            <div className="reveal-on-scroll delay-200">
                <h2 className="text-2xl sm:text-3xl font-bold mb-10 sm:mb-16 flex items-center">
                    <span className="text-accent mr-4 font-mono text-sm">06.</span>
                    Certifications
                </h2>
                <ul className="space-y-4 sm:space-y-6 font-mono text-xs sm:text-sm text-white/60">
                    <li className="flex items-start group">
                        <span className="text-accent mr-4 group-hover:translate-x-1 transition-transform">→</span>
                        <a href="https://drive.google.com/file/d/1GGEvuDIY8fd-rqZXQOhRtk8YXFhrjGjn/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">Internship Certificate – Eagle In Cloud (4 months)</a>
                    </li>
                    <li className="flex items-start group">
                        <span className="text-accent mr-4 group-hover:translate-x-1 transition-transform">→</span>
                        <a href="https://drive.google.com/file/d/12zWP-StA86s90WDpMb0WdqKA3jYwO5R7/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">Web Development Workshop – Google Developer Group (3 days)</a>
                    </li>
                    <li className="flex items-start group">
                        <span className="text-accent mr-4 group-hover:translate-x-1 transition-transform">→</span>
                        <a href="https://drive.google.com/file/d/1-lm2gbkeb6KePMx9-Cbz_YmznNYWtcvi/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">React JS Workshop – Sanamtrana 2025, Cloud State University (USA)</a>
                    </li>
                    <li className="flex items-start group">
                        <span className="text-accent mr-4 group-hover:translate-x-1 transition-transform">→</span>
                        <a href="https://drive.google.com/file/d/10ybC-mKeStYVZMFlFlM9cZgbXPgeOchL/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">Soft Skills Certification – IIT Roorkee (NPTEL, 58%)</a>
                    </li>
                    <li className="flex items-start group">
                        <span className="text-accent mr-4 group-hover:translate-x-1 transition-transform">→</span>
                        <a href="https://drive.google.com/file/d/1j1ATiTbrrELCcGca-KhYF7qaCFDGnqJ-/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">Public Speaking Certification – IIT Roorkee (NPTEL, 62%)</a>
                    </li>
                    <li className="flex items-start group">
                        <span className="text-accent mr-4 group-hover:translate-x-1 transition-transform">→</span>
                        <a href="https://drive.google.com/file/d/1hM8kFPdj7GywiBHnV4sf6c9t0volfvsu/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">C/C++ & Data Structures Internship – Universal Information</a>
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default Education;
