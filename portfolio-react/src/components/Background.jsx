import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const Background = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        if (!canvasRef.current) return;

        const canvas = canvasRef.current;
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ 
            canvas, 
            alpha: true, 
            antialias: true 
        });

        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

        // Create a plane geometry with optimized segment count for high-FPS performance
        const geometry = new THREE.PlaneGeometry(45, 45, 25, 25);
        const material = new THREE.MeshBasicMaterial({ 
            color: 0x8b5cf6, 
            wireframe: true, 
            transparent: true, 
            opacity: 0.12 
        });
        const mesh = new THREE.Mesh(geometry, material);
        scene.add(mesh);

        mesh.rotation.x = -Math.PI / 2.5;
        mesh.position.y = -5;
        camera.position.z = 15;

        // Mouse Interaction
        let mouseX = 0;
        let mouseY = 0;
        let targetMouseX = 0;
        let targetMouseY = 0;

        const onMouseMove = (e) => {
            targetMouseX = (e.clientX / window.innerWidth) - 0.5;
            targetMouseY = (e.clientY / window.innerHeight) - 0.5;
        };
        window.addEventListener('mousemove', onMouseMove, { passive: true });

        const clock = new THREE.Clock();
        let animationFrameId;

        const positionAttribute = geometry.attributes.position;
        const vertexCount = positionAttribute.count;

        const animate = () => {
            const elapsedTime = clock.getElapsedTime() * 0.8;

            // Animate Vertices with optimized math
            for (let i = 0; i < vertexCount; i++) {
                const x = positionAttribute.getX(i);
                const y = positionAttribute.getY(i);
                
                // Create wave effect
                const wave = Math.sin(x * 0.4 + elapsedTime) * 0.45 + Math.sin(y * 0.25 + elapsedTime * 0.7) * 0.45;
                positionAttribute.setZ(i, wave);
            }
            positionAttribute.needsUpdate = true;

            // Smooth rotation interpolation
            mouseX += (targetMouseX - mouseX) * 0.05;
            mouseY += (targetMouseY - mouseY) * 0.05;
            mesh.rotation.z = mouseX * 0.08;
            mesh.rotation.y = mouseY * 0.08;

            renderer.render(scene, camera);
            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        const onResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };
        window.addEventListener('resize', onResize);

        return () => {
            window.removeEventListener('mousemove', onMouseMove);
            window.removeEventListener('resize', onResize);
            cancelAnimationFrame(animationFrameId);
            
            // Cleanup
            geometry.dispose();
            material.dispose();
            renderer.dispose();
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            id="bg-canvas"
            className="fixed top-0 left-0 w-full h-full -z-10 block"
            style={{ pointerEvents: 'none' }}
        />
    );
};

export default Background;
