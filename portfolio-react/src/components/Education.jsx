import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Education = () => {
    const sectionRef = useRef(null);
    const [selectedCert, setSelectedCert] = useState(null);

    const certifications = [
        {
            title: "Internship Certificate – Eagle In Cloud (4 months)",
            url: "/assets/docs/ankit eagle in cloud.png",
            isImage: true
        },
        {
            title: "Web Development Workshop – Google Developer Group (3 days)",
            url: "/assets/docs/Ankit Kushwah GDG Certificats.png",
            isImage: true
        },
        {
            title: "React JS Workshop – Sanamtrana 2025, Cloud State University (USA)",
            url: "/assets/docs/Certificate Sanmantrana-25 (1).png",
            isImage: true
        },
        {
            title: "Soft Skills Certification – IIT Roorkee (NPTEL, 58%)",
            url: "/assets/docs/Soft Skills NPTL.png",
            isImage: true
        },
        {
            title: "Public Speaking Certification – IIT Roorkee (NPTEL, 62%)",
            url: "/assets/docs/Public Speaking NPTL.png",
            isImage: true
        },
        {
            title: "C/C++ & Data Structures Internship – Universal Information",
            url: "/assets/docs/Internship certificate.jpg",
            isImage: true
        }
    ];

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
        <>
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
                    {certifications.map((cert, index) => (
                        <li key={index} className="flex items-start group">
                            <span className="text-accent mr-4 group-hover:translate-x-1 transition-transform">→</span>
                            <a 
                                onClick={(e) => { e.preventDefault(); setSelectedCert(cert); }} 
                                className="hover:text-accent transition-colors cursor-pointer"
                            >
                                {cert.title}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </section>

        {/* Modal */}
        {selectedCert && (
            <div 
                className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 sm:p-8"
                onClick={() => setSelectedCert(null)}
            >
                <div 
                    className="relative w-full max-w-5xl h-[80vh] bg-[#0a0a0a] border border-white/10 rounded-xl overflow-hidden flex flex-col"
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="flex justify-between items-center p-4 border-b border-white/10 bg-[#0a0a0a] z-10">
                        <h3 className="text-white font-bold truncate pr-4">{selectedCert.title}</h3>
                        <button 
                            onClick={() => setSelectedCert(null)}
                            className="text-white/60 hover:text-accent transition-colors p-1"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                        </button>
                    </div>
                    <div className="flex-1 w-full bg-black/50 overflow-hidden flex items-center justify-center p-2">
                        {selectedCert.isImage ? (
                            <img src={selectedCert.url} alt={selectedCert.title} className="max-w-full max-h-full object-contain rounded-lg" />
                        ) : (
                            <iframe src={selectedCert.url} className="w-full h-full border-0 bg-white rounded-lg" title={selectedCert.title} />
                        )}
                    </div>
                </div>
            </div>
        )}
        </>
    );
};

export default Education;
