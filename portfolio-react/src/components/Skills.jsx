import React from 'react';

const Skills = () => {
    const skillsData = [
        {
            category: "Languages",
            items: [
                { name: "C", color: "#A8B9CC", svg: <svg viewBox="0 0 128 128"><path fill="currentColor" d="M117.5 33.5L64 2.7L10.5 33.5v61l53.5 30.8l53.5-30.8v-61zM64 107.7c-24.1 0-43.7-19.6-43.7-43.7s19.6-43.7 43.7-43.7c12 0 23 4.9 30.9 12.8L77.1 51c-3.4-3.4-8.1-5.5-13.1-5.5c-10.2 0-18.5 8.3-18.5 18.5s8.3 18.5 18.5 18.5c5 0 9.7-2.1 13.1-5.5l17.8 17.8c-7.9 8-18.9 12.9-30.9 12.9z"/></svg> },
                { name: "C++", color: "#00599C", svg: <svg viewBox="0 0 128 128"><path fill="currentColor" d="M117.5 33.5L64 2.7L10.5 33.5v61l53.5 30.8l53.5-30.8v-61zM64 107.7c-24.1 0-43.7-19.6-43.7-43.7s19.6-43.7 43.7-43.7c12 0 23 4.9 30.9 12.8L77.1 51c-3.4-3.4-8.1-5.5-13.1-5.5c-10.2 0-18.5 8.3-18.5 18.5s8.3 18.5 18.5 18.5c5 0 9.7-2.1 13.1-5.5l17.8 17.8c-7.9 8-18.9 12.9-30.9 12.9z"/><path fill="currentColor" d="M100.5 54.4h11.1v7h-11.1v11.1h-7v-11.1h-11.1v-7h11.1v-11.1h7v11.1zm-32.4 0h11.1v7h-11.1v11.1h-7v-11.1h-11.1v-7h11.1v-11.1h7v11.1z"/></svg> },
                { name: "Python", color: "#3776AB", svg: <svg viewBox="0 0 128 128"><path fill="#3776AB" d="M64 4c-32.6 0-31 14.1-31 14.1l.1 14.5h31.5v4.4H20.1S4.4 35 4.4 67.3c0 32.3 13.8 31.3 13.8 31.3h8.3V86.9c0-16.7 14.1-16.1 14.1-16.1h23.1s13.8-.4 13.8-13.8V35.4S78.8 4 64 4zm-14.8 8.1c2.4 0 4.4 2 4.4 4.4c0 2.4-2 4.4-4.4 4.4s-4.4-2-4.4-4.4c0-2.4 2-4.4 4.4-4.4z"/><path fill="#FFD343" d="M64 124c32.6 0 31-14.1 31-14.1l-.1-14.5H63.4v-4.4h44.5s15.7 2.1 15.7-30.2c0-32.3-13.8-31.3-13.8-31.3h-8.3v11.7c0 16.7-14.1 16.1-14.1 16.1H64.3s-13.8.4-13.8 13.8v21.7s-1.2 31.4 13.5 31.4zm14.8-8.1c-2.4 0-4.4-2-4.4-4.4c0-2.4 2-4.4 4.4-4.4s4.4 2 4.4 4.4c0 2.4-2 4.4-4.4 4.4z"/></svg> },
            ]
        },
        {
            category: "Web Tech",
            items: [
                { name: "HTML5/CSS3", color: "#E34F26", svg: <div className="flex space-x-1"><svg className="w-6 h-6" viewBox="0 0 128 128"><path fill="#E34F26" d="M19.1 13h89.8l-8.2 91.5L64 115l-36.7-10.5L19.1 13z"/><path fill="#EF652A" d="M64 105.7l28.6-8.2L98.6 30H64v75.7z"/><path fill="#EBEBEB" d="M64 54.4H44.6l-1.3-15.1h39.4l1.3-14.9H28.7l4.1 44.9H64v-14.9zm0 31.2l-0.1 0.1l-12.8-3.4l-0.8-9.2H35.4l1.6 17.8l26.9 7.4l0.1-12.7z"/><path fill="#FFF" d="M64 69.3h14.1l-1.3 14.9l-12.8 3.5v12.7l26.9-7.4l3.3-37.1H64v13.4zm0-39.3v14.9h20.6l1.3-14.9H64z"/></svg><svg className="w-6 h-6" viewBox="0 0 128 128"><path fill="#1572B6" d="M19.1 13h89.8l-8.2 91.5L64 115l-36.7-10.5L19.1 13z"/><path fill="#33A9DC" d="M64 105.7l28.6-8.2L98.6 30H64v75.7z"/><path fill="#EBEBEB" d="M64 54.4H44.6l-1.3-15.1h39.4l1.3-14.9H28.7l4.1 44.9H64v-14.9zm0 31.2l-0.1 0.1l-12.8-3.4l-0.8-9.2H35.4l1.6 17.8l26.9 7.4l0.1-12.7z"/><path fill="#FFF" d="M64 69.3h14.1l-1.3 14.9l-12.8 3.5v12.7l26.9-7.4l3.3-37.1H64v13.4zm0-39.3v14.9h20.6l1.3-14.9H64z"/></svg></div> },
                { name: "React", color: "#61DAFB", svg: <svg viewBox="0 0 128 128"><circle cx="64" cy="64" r="10.1" fill="currentColor"/><path fill="currentColor" d="M117.5 53.6c-1.3-7.4-4.8-13.8-9.8-18.4c-5.7-5.2-12.6-8.5-20-9.6c-4.4-.7-8.8-.7-13.2 0c-13.5 2.1-25.5 8.9-34.8 18.8c-1.6 1.7-3.1 3.5-4.5 5.4c-1.2-1.8-2.6-3.6-4-5.2c-10-11.4-23.7-18.9-38.9-20c-4.4-.3-8.8-.1-13.1.6c-7.4 1.2-14.3 4.5-20 9.7c-5 4.6-8.5 11-9.8 18.4c-1.3 7.4-.5 14.9 2.2 21.7c2.6 6.5 6.8 12.3 12.3 16.7c5.5 4.4 12 7.4 19 8.7c4.1.8 8.3 1 12.5.7c15.1-1.1 28.8-8.6 38.9-20c1.4-1.6 2.8-3.3 4-5.2c1.4 1.9 2.9 3.7 4.5 5.4c9.3 9.9 21.3 16.7 34.8 18.8c4.4.7 8.8.7 13.2 0c7.4-1.1 14.3-4.4 20-9.6c5-4.6 8.5-11 9.8-18.4c1.3-7.4.5-14.9-2.2-21.7c-2.6-6.5-6.8-12.2-12.3-16.6zm-53.5 10.4c0-4.1 3.3-7.4 7.4-7.4c4.1 0 7.4 3.3 7.4 7.4s-3.3 7.4-7.4 7.4s-7.4-3.3-7.4-7.4zm42.7 18c-3.1 4.3-7.3 7.9-12.2 10.3c-4.7 2.3-9.8 3.5-15 3.5c-3 0-6-.4-9-1.2c-11.2-2.9-20.7-10.4-26.6-20.7c5.9-10.3 15.4-17.8 26.6-20.7c3-.8 6-1.2 9-1.2c5.2 0 10.3 1.2 15 3.5c4.9 2.4 9.1 5.9 12.2 10.3c2.4 3.5 3.7 7.6 3.7 11.8c0 4.1-1.3 8.2-3.7 12.7zm-65.4-30.7c3.1-4.3 7.3-7.9 12.2-10.3c4.7-2.3 9.8-3.5 15-3.5c3 0 6 .4 9 1.2c1.5.4 3 .9 4.4 1.5c-3.9 3.1-7.4 6.9-10.3 11.2c-5.9 8.7-9.3 18.7-9.3 29.5c0 10.8 3.4 20.8 9.3 29.5c2.9 4.3 6.4 8.1 10.3 11.2c-1.4.6-2.9 1.1-4.4 1.5c-3 .8-6 1.2-9 1.2c-5.2 0-10.3-1.2-15-3.5c-4.9-2.4-9.1-5.9-12.2-10.3c-2.4-3.5-3.7-7.6-3.7-11.8c0-4.1 1.3-8.2 3.7-12.7z"/></svg> },
                { name: "Next.js", color: "#FFFFFF", svg: <svg viewBox="0 0 128 128"><path fill="currentColor" d="M64 0C28.7 0 0 28.7 0 64s28.7 64 64 64s64-28.7 64-64S99.3 0 64 0zm33.5 94.6L64 52.4L30.5 94.6H17.4L64 36.1l46.6 58.5H97.5z"/></svg> },
            ]
        },
        {
            category: "Databases",
            items: [
                { name: "PostgreSQL", color: "#336791", svg: <svg viewBox="0 0 128 128"><path fill="currentColor" d="M106.8 57.6c1.1-6.1 1.4-12.2 1.4-18.4C108.2 18.2 88.4 2 64.1 2S20 18.2 20 39.2c0 6.2.3 12.3 1.4 18.4C11.5 63.8 5 73.1 5 83.6c0 14.6 12.8 26.6 28.6 26.6c6.1 0 11.8-1.7 16.5-4.8c4.2 4.1 9.8 6.6 16.1 6.6c6.3 0 11.9-2.5 16.1-6.6c4.7 3.1 10.4 4.8 16.5 4.8c15.8 0 28.6-12 28.6-26.6c0-10.5-6.5-19.8-16.4-26zM28.6 39.2c0-11.9 15.9-21.5 35.5-21.5s35.5 9.6 35.5 21.5s-15.9 21.5-35.5 21.5s-35.5-9.6-35.5-21.5zm5.5 44.4c0-7.3 8.3-13.3 18.6-13.3c3.7 0 7.2.8 10.2 2.1c-1.8 3.5-2.8 7.4-2.8 11.5c0 4.1 1 8 2.8 11.5c-3 1.3-6.5 2.1-10.2 2.1c-10.3 0-18.6-6-18.6-13.9zm30 14.1c-6.8 0-12.3-5.5-12.3-12.3s5.5-12.3 12.3-12.3s12.3 5.5 12.3 12.3s-5.5 12.3-12.3 12.3zm30.3-0.8c-3 1.3-6.5 2.1-10.2 2.1c-3.7 0-7.2-.8-10.2-2.1c1.8-3.5 2.8-7.4 2.8-11.5c0-4.1-1-8-2.8-11.5c3-1.3 6.5-2.1 10.2-2.1c10.3 0 18.6 6 18.6 13.3c0 7.3-8.3 13.3-18.6 13.9z"/></svg> },
                { name: "MySQL", color: "#00758F", svg: <svg viewBox="0 0 128 128"><path fill="currentColor" d="M63.5 1.5C29.2 1.5 1.5 29.2 1.5 63.5S29.2 125.5 63.5 125.5s62-27.7 62-62s-27.7-62-62-62zm19.3 90.6c-2.3 1.4-5 2.4-8 3.1c-3.1.7-6.5 1-10.1 1c-5.9 0-11.1-1-15.5-3s-7.8-4.8-10.3-8.4c-2.5-3.6-3.7-7.8-3.7-12.7c0-4.9 1.2-9.2 3.7-12.8s5.9-6.4 10.3-8.4c4.4-2 9.6-3 15.5-3c3.6 0 7 1 10.1 1s5.7 1.7 8 3.1l-5.6 11.2c-1.4-.9-3.1-1.6-4.9-2.2s-3.8-.8-5.7-.8c-3.4 0-6.2.7-8.4 2.1s-3.9 3.4-5 5.9c-1.1 2.5-1.7 5.5-1.7 8.9s.6 6.4 1.7 8.9c1.1 2.5 2.8 4.5 5 5.9c2.2 1.4 5 2.1 8.4 2.1c1.9 0 3.8-.3 5.7-.8s3.5-1.3 4.9-2.2l5.6 11.2z"/></svg> },
                { name: "Sanity", color: "#F03E2F", svg: <svg viewBox="0 0 128 128"><path fill="currentColor" d="M12 0L3 5.25v13.5L12 24l9-5.25V5.25L12 0zm7.125 17.625L12 21.75l-7.125-4.125V6.375L12 2.25l7.125 4.125v11.25zM12 6L6.75 9v6L12 18l5.25-3V9L12 6z"/></svg> },
            ]
        },
        {
            category: "Tools",
            items: [
                { name: "GitHub", color: "#FFFFFF", svg: <svg viewBox="0 0 128 128"><path fill="currentColor" d="M64 5.1C31.5 5.1 5.1 31.5 5.1 64c0 26 16.8 48 40.2 55.8c3 0.5 4-1.3 4-2.8c0-1.4-0.1-5.1-0.1-9.9c-16.4 3.6-19.9-7.9-19.9-7.9c-2.7-6.8-6.6-8.6-6.6-8.6c-5.3-3.7 0.4-3.6 0.4-3.6c5.9 0.4 9 6.1 9 6.1c5.3 9 13.8 6.4 17.2 4.9c0.5-3.8 2.1-6.4 3.7-7.9c-13.1-1.5-26.9-6.5-26.9-29.2c0-6.5 2.3-11.7 6.1-15.8c-0.6-1.5-2.6-7.5 0.6-15.6c0 0 5-1.6 16.4 6.1c4.8-1.3 9.8-2 14.9-2c5.1 0 10.1 0.7 14.9 2c11.4-7.7 16.4-6.1 16.4-6.1c3.2 8.1 1.2 14.1 0.6 15.6c3.8 4.1 6.1 9.3 6.1 15.8c0 22.8-13.8 27.7-27 29.2c2.1 1.8 4 5.5 4 11c0 8-0.1 14.4-0.1 16.4c0 1.5 1 3.3 4 2.7c23.3-7.9 40.1-29.8 40.1-55.8c0-32.5-26.5-58.9-59-58.9z"/></svg> },
                { name: "VS Code", color: "#007ACC", svg: <svg viewBox="0 0 128 128"><path fill="currentColor" d="M114.3 22.8l-23.7-9L66.7 30l23.9 16.2l23.7-23.4zM13.7 22.8l23.7-9L61.3 30L37.4 46.2l-23.7-23.4zM64 128c35.3 0 64-28.7 64-64S99.3 0 64 0S0 28.7 0 64s28.7 64 64 64zm0-98.3l37.4 25.1L64 79.9l-37.4-25.1L64 29.7z"/></svg> },
                { name: "UI/UX", color: "#FFB000", svg: <svg viewBox="0 0 128 128"><path fill="currentColor" d="M64 128c35.3 0 64-28.7 64-64S99.3 0 64 0S0 28.7 0 64s28.7 64 64 64zM64 22c5.5 0 10 4.5 10 10s-4.5 10-10 10s-10-4.5-10-10s4.5-10 10-10zm-10 32h20v54H54V54z"/></svg> },
            ]
        }
    ];

    return (
        <section id="skills" className="py-16 sm:py-32 px-4 sm:px-6 md:px-24 bg-dark-alt/50 border-y border-white/5">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-2xl sm:text-3xl font-bold mb-10 sm:mb-16 flex items-center reveal-on-scroll">
                    <span className="text-accent mr-4 font-mono text-sm">02.</span> Tech Stack
                </h2>

                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12">
                    {skillsData.map((category, idx) => (
                        <div key={idx} className={`reveal-on-scroll delay-${idx * 100}`}>
                            <h3 className="text-xs font-mono text-white/40 mb-6 uppercase tracking-widest">
                                {category.category}
                            </h3>
                            <ul className="space-y-4">
                                {category.items.map((skill, sIdx) => (
                                    <li key={sIdx} className="flex items-center space-x-4 group">
                                        <div 
                                            className="w-12 h-12 flex items-center justify-center rounded-2xl bg-white/5 border border-white/5 transition-all duration-500 group-hover:scale-110 group-hover:bg-white/10"
                                            style={{ 
                                                boxShadow: `0 0 0px rgba(0,0,0,0)`,
                                                filter: `drop-shadow(0 0 0px rgba(0,0,0,0))` 
                                            }}
                                            onMouseEnter={(e) => {
                                                e.currentTarget.style.boxShadow = `0 10px 30px -10px ${skill.color}40`;
                                                e.currentTarget.style.filter = `drop-shadow(0 0 8px ${skill.color}60)`;
                                                e.currentTarget.style.borderColor = `${skill.color}30`;
                                            }}
                                            onMouseLeave={(e) => {
                                                e.currentTarget.style.boxShadow = 'none';
                                                e.currentTarget.style.filter = 'none';
                                                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)';
                                            }}
                                        >
                                            <div className="w-6 h-6 flex items-center justify-center transition-transform duration-500 group-hover:rotate-[10deg]" style={{ color: skill.color }}>
                                                {skill.svg}
                                            </div>
                                        </div>
                                        <span className="font-bold text-lg text-white/70 group-hover:text-white transition-colors duration-300">
                                            {skill.name}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
