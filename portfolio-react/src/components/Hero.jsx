import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const Hero = () => {
    const titleRef = useRef(null);
    const hudRef = useRef(null);
    const [typewriterText, setTypewriterText] = useState("");
    const roles = ["FULL STACK DEVELOPER", "PYTHON DEVELOPER", "SOFTWARE ENGINEER"];
    const [roleIndex, setRoleIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [charIndex, setCharIndex] = useState(0);
    const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

    useEffect(() => {
        const tl = gsap.timeline({ defaults: { ease: 'power4.out', duration: 1.5 } });

        // Hero Entrance
        tl.to('.reveal-text', { opacity: 1, y: 0, stagger: 0.1 }, 0.5)
          .to('.reveal-title', { opacity: 1, y: 0 }, '-=1')
          .to('.divider', { opacity: 1, scaleX: 1, transformOrigin: 'left', width: '100%' }, '-=1')
          .to('.reveal-subtitle', { opacity: 1, y: 0 }, '-=0.8')
          .to('.hud-item', { opacity: 1, x: 0, stagger: 0.2 }, '-=1.2')
          .to('.scroll-indicator', { opacity: 1, y: 0 }, '-=1');

        // Scramble Effect
        const title = titleRef.current;
        if (title) {
            const originalText = title.innerText;
            const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
            let iteration = 0;
            const scrambleInterval = setInterval(() => {
                title.innerText = originalText.split("").map((letter, index) => {
                    if(index < iteration) return originalText[index];
                    return letters[Math.floor(Math.random() * 26)];
                }).join("");
                if(iteration >= originalText.length) clearInterval(scrambleInterval);
                iteration += 1 / 3;
            }, 30);
        }

        // Floating Animation for HUD Items
        gsap.to('.hud-item-1', { y: 15, duration: 3, repeat: -1, yoyo: true, ease: "sine.inOut" });
        gsap.to('.hud-item-2', { y: -10, duration: 4, repeat: -1, yoyo: true, ease: "sine.inOut", delay: 0.5 });
        gsap.to('.hud-item-3', { y: 12, duration: 3.5, repeat: -1, yoyo: true, ease: "sine.inOut", delay: 1 });

        // Parallax Mouse Movement for HUD
        const onMouseMove = (e) => {
            const x = (e.clientX - window.innerWidth / 2) / 50;
            const y = (e.clientY - window.innerHeight / 2) / 50;
            gsap.to(hudRef.current, { x: x, y: y, duration: 1, ease: "power2.out" });
        };
        window.addEventListener('mousemove', onMouseMove);
        return () => window.removeEventListener('mousemove', onMouseMove);
    }, []);

    // Typewriter Logic
    useEffect(() => {
        const currentRole = roles[roleIndex];
        const typeSpeed = isDeleting ? 50 : 100;
        const timeout = setTimeout(() => {
            if (!isDeleting && charIndex < currentRole.length) {
                setTypewriterText(currentRole.substring(0, charIndex + 1));
                setCharIndex(prev => prev + 1);
            } else if (isDeleting && charIndex > 0) {
                setTypewriterText(currentRole.substring(0, charIndex - 1));
                setCharIndex(prev => prev - 1);
            } else if (!isDeleting && charIndex === currentRole.length) {
                setTimeout(() => setIsDeleting(true), 1500);
            } else if (isDeleting && charIndex === 0) {
                setIsDeleting(false);
                setRoleIndex((prev) => (prev + 1) % roles.length);
            }
        }, typeSpeed);
        return () => clearTimeout(timeout);
    }, [charIndex, isDeleting, roleIndex]);

    return (
        <section id="home" className="min-h-screen flex items-center px-4 sm:px-6 md:px-24 pt-24 sm:pt-32 pb-12 sm:pb-20 relative overflow-hidden">
            <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-16 items-center">
                
                <div className="relative z-10 text-center lg:text-left">
                    <p className="text-accent font-mono text-sm md:text-base mb-4 uppercase tracking-[0.3em] reveal-text opacity-0 translate-y-10 min-h-[1.5rem]">
                        // {typewriterText}<span className="animate-pulse">|</span>
                    </p>
                    
                    <h1 ref={titleRef} className="text-4xl sm:text-5xl md:text-7xl lg:text-[9rem] font-black leading-[1.1] mb-4 sm:mb-8 reveal-title opacity-0 translate-y-20 selection:text-accent">
                        ANKIT<br />KUSHWAH
                    </h1>
                    
                    <div className="w-0 h-px bg-white/20 mb-4 sm:mb-8 divider opacity-0 mx-auto lg:mx-0"></div>
                    
                    <p className="text-white/60 text-sm sm:text-base md:text-xl max-w-md mx-auto lg:mx-0 leading-relaxed reveal-subtitle opacity-0 translate-y-10 mb-6 sm:mb-10">
                        Building secure, scalable web applications with clean UI and strong backend systems.
                    </p>

                    <div className="reveal-subtitle opacity-0 translate-y-10">
                        <button 
                            onClick={() => setIsResumeModalOpen(true)}
                            className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-accent/10 border border-accent/40 rounded-full text-white font-mono text-xs sm:text-sm uppercase tracking-widest hover:bg-accent hover:text-white hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(139,92,246,0.1)] group cursor-pointer"
                        >
                            View Resume
                            <svg className="ml-3 w-4 h-4 transform group-hover:translate-y-[-2px] transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Right Side: Futuristic HUD Overlay (Hidden on small mobile, shown on tablet/desktop) */}
                <div className="hidden sm:flex justify-center lg:justify-end relative z-10" ref={hudRef}>
                    <div className="flex flex-col items-center lg:items-end space-y-12">
                        
                        {/* HUD Status */}
                        <div className="hud-item hud-item-1 opacity-0 translate-x-10 text-center lg:text-right group">
                            <div className="flex items-center justify-center lg:justify-end space-x-3 mb-2">
                                <span className="text-[10px] font-mono text-white/30 uppercase tracking-[0.3em]">System_Status</span>
                                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_#22c55e]"></div>
                            </div>
                            <h4 className="text-base md:text-lg font-bold text-white tracking-[0.2em] group-hover:text-accent transition-colors">AVAILABLE &nbsp; FOR &nbsp; WORK</h4>
                            <div className="w-12 h-px bg-accent/30 mt-2 ml-auto transition-all group-hover:w-full"></div>
                        </div>

                        {/* HUD Tech Stack */}
                        <div className="hud-item hud-item-2 opacity-0 translate-x-10 text-center lg:text-right">
                            <span className="text-[10px] font-mono text-white/30 uppercase tracking-[0.3em] block mb-4">Core_Arsenal</span>
                            <div className="grid grid-cols-2 gap-4">
                                {['REACT', 'DJANGO', 'PYTHON', 'POSTGRES'].map((tech) => (
                                    <div key={tech} className="text-center lg:text-right group">
                                        <p className="text-xs font-mono text-white/50 group-hover:text-white transition-colors">{tech}</p>
                                        <div className="w-4 h-px bg-white/10 mt-1 ml-auto group-hover:w-full group-hover:bg-accent transition-all"></div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* HUD Base */}
                        <div className="hud-item hud-item-3 opacity-0 translate-x-10 text-center lg:text-right">
                            <span className="text-[10px] font-mono text-white/30 uppercase tracking-[0.3em] block mb-2">Deployment_Zone</span>
                            <p className="text-xs md:text-sm font-bold text-white/80 tracking-widest whitespace-nowrap">INDIA // REMOTE // OFFICE</p>
                            <div className="flex justify-center lg:justify-end mt-4 space-x-2">
                                <div className="w-1 h-1 bg-accent"></div>
                                <div className="w-8 h-1 bg-white/5"></div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 scroll-indicator opacity-0 translate-y-10">
                <div className="w-px h-12 bg-gradient-to-b from-accent to-transparent"></div>
            </div>

            {/* Resume Modal */}
            {isResumeModalOpen && (
                <div 
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 sm:p-8"
                    onClick={() => setIsResumeModalOpen(false)}
                >
                    <div 
                        className="relative w-full max-w-5xl h-[85vh] bg-[#0a0a0a] border border-white/10 rounded-xl overflow-hidden flex flex-col shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex justify-between items-center p-4 border-b border-white/10 bg-[#0a0a0a] z-10">
                            <h3 className="text-white font-bold truncate pr-4 text-sm sm:text-base">Ankit Kushwah - Resume</h3>
                            <div className="flex items-center gap-2 sm:gap-3">
                                <a 
                                    href="/assets/docs/Ankit_Kushwah.pdf" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-1.5 text-xs font-mono text-white/70 hover:text-accent bg-white/5 hover:bg-white/10 px-2.5 sm:px-3 py-1.5 rounded-lg border border-white/10 transition-colors"
                                    title="Open in new tab"
                                >
                                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                    </svg>
                                    <span className="hidden sm:inline">Open Tab</span>
                                </a>
                                <a 
                                    href="/assets/docs/Ankit_Kushwah.pdf" 
                                    download="Ankit_Kushwah_Resume.pdf"
                                    className="flex items-center gap-1.5 text-xs font-mono text-white/70 hover:text-accent bg-white/5 hover:bg-white/10 px-2.5 sm:px-3 py-1.5 rounded-lg border border-white/10 transition-colors"
                                    title="Download Resume"
                                >
                                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                    </svg>
                                    <span className="hidden sm:inline">Download</span>
                                </a>
                                <button 
                                    onClick={() => setIsResumeModalOpen(false)}
                                    className="text-white/60 hover:text-accent transition-colors p-1"
                                    title="Close"
                                >
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                                </button>
                            </div>
                        </div>
                        <div className="flex-1 w-full bg-black/50 overflow-hidden flex items-center justify-center p-2">
                            <iframe 
                                src="/assets/docs/Ankit_Kushwah.pdf" 
                                className="w-full h-full border-0 bg-white rounded-lg" 
                                title="Resume" 
                            />
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Hero;
