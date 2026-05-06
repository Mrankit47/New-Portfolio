import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Heading slides in from left
            gsap.from(".about-heading", {
                x: -60,
                opacity: 0,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: ".about-heading",
                    start: "top 85%",
                }
            });

            // Each paragraph fades in with stagger
            gsap.from(".about-para", {
                y: 30,
                opacity: 0,
                duration: 0.8,
                stagger: 0.25,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: ".about-text",
                    start: "top 80%",
                }
            });

            // Profile image scales up
            gsap.from(".about-image", {
                scale: 0.85,
                opacity: 0,
                duration: 1.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: ".about-image",
                    start: "top 80%",
                }
            });

            // Decorative corner elements animate in
            gsap.from(".corner-tl", {
                x: -20,
                y: -20,
                opacity: 0,
                duration: 0.8,
                delay: 0.4,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: ".about-image",
                    start: "top 80%",
                }
            });

            gsap.from(".corner-br", {
                x: 20,
                y: 20,
                opacity: 0,
                duration: 0.8,
                delay: 0.5,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: ".about-image",
                    start: "top 80%",
                }
            });

            // Signature fades in
            gsap.from(".about-signature", {
                opacity: 0,
                y: 10,
                duration: 0.8,
                delay: 0.6,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: ".about-image",
                    start: "top 80%",
                }
            });

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section id="about" ref={sectionRef} className="py-16 sm:py-32 px-4 sm:px-6 md:px-24 grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-16 items-center bg-dark">
            <div>
                <h2 className="about-heading text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 flex items-center">
                    <span className="text-accent mr-4 font-mono text-sm">01.</span> About Me
                </h2>
                <div className="about-text space-y-4 sm:space-y-6 text-white/60 leading-relaxed text-base sm:text-lg">
                    <p className="about-para">
                        Hello! I'm Ankit Kushwah, a passionate Full Stack Developer with a strong focus on building 
                        secure and scalable web applications. I enjoy creating seamless digital experiences 
                        that combine robust backend logic with intuitive frontend design.
                    </p>
                    <p className="about-para">
                        My journey in web development has led me to work with a diverse range of technologies, 
                        from <a href="https://docs.djangoproject.com/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-accent transition-colors">Python (Django)</a> and <a href="https://www.postgresql.org/docs/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-accent transition-colors">PostgreSQL</a> on the backend to 
                        <a href="https://react.dev/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-accent transition-colors"> React</a> and <a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-accent transition-colors">Tailwind CSS</a> on the frontend.
                    </p>
                    <p className="about-para">
                        I'm currently focused on expanding my expertise in <a href="https://tally-erp-system.onrender.com" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-white transition-colors underline decoration-accent/30 underline-offset-4">ERP systems</a> and 
                        <a href="https://leads-management-egfi.onrender.com" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-white transition-colors underline decoration-accent/30 underline-offset-4"> Lead Management solutions</a>, always striving to write clean, 
                        maintainable code that solves real-world problems.
                    </p>
                </div>
            </div>
            
            <div className="relative flex justify-center">
                {/* Unique Geometric Container */}
                <div className="about-image relative group">
                    {/* Background Glow */}
                    <div className="absolute -inset-4 bg-accent/20 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    
                    {/* The Beveled Frame */}
                    <div className="relative overflow-hidden p-1 bg-gradient-to-br from-accent/50 to-transparent [clip-path:polygon(10%_0,100%_0,100%_90%,90%_100%,0_100%,0_10%)]">
                        <div className="bg-dark-alt [clip-path:polygon(10%_0,100%_0,100%_90%,90%_100%,0_100%,0_10%)]">
                            <img
                                src="/profile_final_clean.png"
                                alt="Ankit Kushwah"
                                className="max-h-[280px] sm:max-h-[350px] md:max-h-[400px] w-auto transition-all duration-700 group-hover:scale-105"
                            />
                            
                            {/* Modern White Signature inside the card */}
                            <div className="about-signature absolute bottom-6 right-12 z-20 pointer-events-none select-none">
                                <span className="font-signature text-3xl md:text-4xl text-white font-normal -rotate-18 block">
                                    Ankit
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Decorative Elements */}
                    <div className="corner-tl absolute -top-4 -left-4 w-12 h-12 border-t-2 border-l-2 border-accent opacity-50"></div>
                    <div className="corner-br absolute -bottom-4 -right-4 w-12 h-12 border-b-2 border-r-2 border-accent opacity-50"></div>
                </div>
            </div>
        </section>
    );
};

export default About;
