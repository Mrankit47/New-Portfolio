import React from 'react';

const Education = () => {
    return (
        <section id="education" className="py-32 px-6 md:px-24 max-w-7xl mx-auto grid md:grid-cols-2 gap-24">
            <div className="reveal-on-scroll">
                <h2 className="text-3xl font-bold mb-16 flex items-center">
                    <span className="text-accent mr-4 font-mono text-sm">05.</span>
                    Education
                </h2>
                <div className="space-y-12">
                    <div>
                        <h3 className="text-xl font-bold mb-2">Master of Computer Application (MCA)</h3>
                        <p className="text-white/50 mb-1">Shri Vaishnav Vidyapeeth Vishwavidyalaya</p>
                        <p className="text-accent font-mono text-xs">2024 — 2026</p>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold mb-2">Bachelor of Computer Application (BCA)</h3>
                        <p className="text-white/50 mb-1">Devi Ahilya University, Indore</p>
                        <p className="text-accent font-mono text-xs">2020 — 2024</p>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold mb-2">Class 12th</h3>
                        <p className="text-white/50 mb-1">Board of Education, Bhopal</p>
                        <p className="text-accent font-mono text-xs">2019 — 2020</p>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold mb-2">Class 10th</h3>
                        <p className="text-white/50 mb-1">Board of Education, Bhopal</p>
                        <p className="text-accent font-mono text-xs">2016 — 2017</p>
                    </div>
                </div>
            </div>

            <div className="reveal-on-scroll delay-200">
                <h2 className="text-3xl font-bold mb-16 flex items-center">
                    <span className="text-accent mr-4 font-mono text-sm">06.</span>
                    Certifications
                </h2>
                <ul className="space-y-6 font-mono text-sm text-white/60">
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
