import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const CustomCursor = () => {
    const cursorDotRef = useRef(null);
    const cursorOutlineRef = useRef(null);

    useEffect(() => {
        const cursorDot = cursorDotRef.current;
        const cursorOutline = cursorOutlineRef.current;

        // High performance quickTo setters for zero garbage collection overhead
        const setDotX = gsap.quickTo(cursorDot, "x", { duration: 0.08, ease: "power2.out" });
        const setDotY = gsap.quickTo(cursorDot, "y", { duration: 0.08, ease: "power2.out" });
        const setOutlineX = gsap.quickTo(cursorOutline, "x", { duration: 0.25, ease: "power3.out" });
        const setOutlineY = gsap.quickTo(cursorOutline, "y", { duration: 0.25, ease: "power3.out" });

        const onMouseMove = (e) => {
            setDotX(e.clientX);
            setDotY(e.clientY);
            setOutlineX(e.clientX);
            setOutlineY(e.clientY);
        };

        const onMouseDown = () => {
            gsap.to(cursorDot, { scale: 0.7, duration: 0.2 });
            gsap.to(cursorOutline, { scale: 0.9, duration: 0.2 });
        };

        const onMouseUp = () => {
            gsap.to(cursorDot, { scale: 1, duration: 0.2 });
            gsap.to(cursorOutline, { scale: 1, duration: 0.2 });
        };

        const onMouseEnterLink = () => {
            gsap.to(cursorDot, { 
                scale: 0, 
                duration: 0.3 
            });
            gsap.to(cursorOutline, { 
                scale: 1.5,
                backgroundColor: "#fff",
                borderColor: "transparent",
                mixBlendMode: "difference",
                duration: 0.3 
            });
        };

        const onMouseLeaveLink = () => {
            gsap.to(cursorDot, { 
                scale: 1, 
                duration: 0.3 
            });
            gsap.to(cursorOutline, { 
                scale: 1, 
                backgroundColor: "transparent",
                borderColor: "#8b5cf6", // accent color
                mixBlendMode: "normal",
                duration: 0.3 
            });
        };

        window.addEventListener('mousemove', onMouseMove);
        window.addEventListener('mousedown', onMouseDown);
        window.addEventListener('mouseup', onMouseUp);

        const links = document.querySelectorAll('a, button, .group');
        links.forEach(link => {
            link.addEventListener('mouseenter', onMouseEnterLink);
            link.addEventListener('mouseleave', onMouseLeaveLink);
        });

        return () => {
            window.removeEventListener('mousemove', onMouseMove);
            window.removeEventListener('mousedown', onMouseDown);
            window.removeEventListener('mouseup', onMouseUp);
            links.forEach(link => {
                link.removeEventListener('mouseenter', onMouseEnterLink);
                link.removeEventListener('mouseleave', onMouseLeaveLink);
            });
        };
    }, []);

    return (
        <>
            <div 
                ref={cursorOutlineRef} 
                className="fixed top-0 left-0 w-6 h-6 border border-accent rounded-full pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 hidden md:block"
            />
            <div 
                ref={cursorDotRef} 
                className="fixed top-0 left-0 w-1.5 h-1.5 bg-accent rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 hidden md:block shadow-[0_0_10px_rgba(139,92,246,0.5)]"
            />
        </>
    );
};

export default CustomCursor;
