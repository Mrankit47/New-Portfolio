import React, { useState, useEffect } from 'react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = ['About', 'Skills', 'Experience', 'Projects', 'Contact'];

    return (
        <nav className={`fixed top-0 w-full z-[100] px-6 md:px-24 py-6 flex justify-between items-center transition-all duration-500 ${isScrolled ? 'bg-dark/80 backdrop-blur-xl border-b border-white/5 py-4' : 'bg-transparent'}`}>
            <div className="text-xl md:text-2xl font-black tracking-tighter text-accent">
                <a href="#" onClick={() => setIsMobileMenuOpen(false)}>PORTFOLIO</a>
            </div>
            
            {/* Desktop Links */}
            <div className="hidden md:flex space-x-10">
                {navLinks.map((item) => (
                    <a 
                        key={item} 
                        href={`#${item.toLowerCase()}`}
                        className="text-xs md:text-sm font-mono tracking-[0.2em] uppercase text-white hover:text-accent transition-all duration-300 relative group"
                    >
                        {item}
                        <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent transition-all duration-300 group-hover:w-full"></span>
                    </a>
                ))}
            </div>

            {/* Mobile Menu Toggle */}
            <button 
                className="md:hidden text-white p-2"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
                <div className="w-6 h-5 relative flex flex-col justify-between">
                    <span className={`w-full h-px bg-white transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                    <span className={`w-full h-px bg-white transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
                    <span className={`w-full h-px bg-white transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                </div>
            </button>

            {/* Mobile Menu Overlay */}
            <div className={`fixed inset-0 bg-dark/95 backdrop-blur-2xl z-[90] flex flex-col items-center justify-center space-y-8 transition-all duration-500 md:hidden ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
                {navLinks.map((item) => (
                    <a 
                        key={item} 
                        href={`#${item.toLowerCase()}`}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="text-2xl font-mono tracking-[0.3em] uppercase text-white hover:text-accent transition-all duration-300"
                    >
                        {item}
                    </a>
                ))}
            </div>
        </nav>
    );
};

export default Navbar;
