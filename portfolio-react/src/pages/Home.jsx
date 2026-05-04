import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Education from '../components/Education';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Background from '../components/Background';
import CustomCursor from '../components/CustomCursor';


const Home = () => {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        // Section Scroll Reveals
        const revealElements = document.querySelectorAll('.reveal-on-scroll');
        revealElements.forEach((el) => {
            gsap.to(el, {
                scrollTrigger: {
                    trigger: el,
                    start: 'top 85%',
                    toggleActions: 'play none none none'
                },
                opacity: 1,
                y: 0,
                duration: 1.2,
                ease: 'power3.out'
            });
        });

        // Scroll Progress Bar
        const progressBar = document.querySelector('#progress-bar');
        const handleScroll = () => {
            const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = (winScroll / height) * 100;
            if (progressBar) progressBar.style.width = scrolled + '%';
        };

        window.addEventListener('scroll', handleScroll);

        // Magnetic Effect for Buttons
        const magneticElements = document.querySelectorAll('button, .magnetic');
        magneticElements.forEach((el) => {
            el.addEventListener('mousemove', (e) => {
                const rect = el.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                gsap.to(el, { x: x * 0.3, y: y * 0.3, duration: 0.5, ease: "power2.out" });
            });
            el.addEventListener('mouseleave', () => {
                gsap.to(el, { x: 0, y: 0, duration: 0.5, ease: "elastic.out(1, 0.3)" });
            });
        });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <div className="text-text selection:bg-accent selection:text-white overflow-x-hidden">
            <div
                id="progress-bar"
                className="fixed top-0 left-0 h-1 bg-accent z-[100] transition-all duration-300"
            ></div>
            
            <CustomCursor />
            <Background />
            <Navbar />
            
            <main>
                <Hero />
                <About />
                <Skills />
                <Experience />
                <Projects />
                <Education />
                <Contact />
            </main>
            
            <Footer />
        </div>
    );
};

export default Home;
