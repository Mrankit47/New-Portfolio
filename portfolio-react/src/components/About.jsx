import React from 'react';

const About = () => {
    return (
        <section id="about" className="py-32 px-6 md:px-24 grid grid-cols-1 md:grid-cols-2 gap-16 items-center bg-dark">
            <div className="reveal-on-scroll">
                <h2 className="text-3xl font-bold mb-8 flex items-center">
                    <span className="text-accent mr-4 font-mono text-sm">01.</span> About Me
                </h2>
                <div className="space-y-6 text-white/60 leading-relaxed text-lg">
                    <p>
                        Hello! I'm Ankit Kushwah, a passionate Full Stack Developer with a strong focus on building 
                        secure and scalable web applications. I enjoy creating seamless digital experiences 
                        that combine robust backend logic with intuitive frontend design.
                    </p>
                    <p>
                        My journey in web development has led me to work with a diverse range of technologies, 
                        from <span className="text-white">Python (Django)</span> and <span className="text-white">PostgreSQL</span> on the backend to 
                        <span className="text-white">React</span> and <span className="text-white">Tailwind CSS</span> on the frontend.
                    </p>
                    <p>
                        I'm currently focused on expanding my expertise in <span className="text-accent">ERP systems</span> and 
                        <span className="text-accent">Lead Management solutions</span>, always striving to write clean, 
                        maintainable code that solves real-world problems.
                    </p>
                </div>
            </div>
            
            <div className="relative reveal-on-scroll delay-200 flex justify-center">
                {/* Unique Geometric Container */}
                <div className="relative group">
                    {/* Background Glow */}
                    <div className="absolute -inset-4 bg-accent/20 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    
                    {/* The Beveled Frame */}
                    <div className="relative overflow-hidden p-1 bg-gradient-to-br from-accent/50 to-transparent [clip-path:polygon(10%_0,100%_0,100%_90%,90%_100%,0_100%,0_10%)]">
                        <div className="bg-dark-alt [clip-path:polygon(10%_0,100%_0,100%_90%,90%_100%,0_100%,0_10%)]">
                            <img
                                src="/profile_final_clean.png"
                                alt="Ankit Kushwah"
                                className="max-h-[350px] md:max-h-[400px] w-auto transition-all duration-700 group-hover:scale-105"
                            />
                            
                            {/* Modern White Signature inside the card */}
                            <div className="absolute bottom-6 right-12 z-20 pointer-events-none select-none">
                                <span className="font-signature text-3xl md:text-4xl text-white font-normal -rotate-18 block">
                                    Ankit
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute -top-4 -left-4 w-12 h-12 border-t-2 border-l-2 border-accent opacity-50"></div>
                    <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b-2 border-r-2 border-accent opacity-50"></div>
                </div>
            </div>
        </section>
    );
};

export default About;
