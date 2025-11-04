'use client';

import { useEffect, useState } from 'react';

const BackgroundEffects = () => {
    const [particles, setParticles] = useState<Array<{ id: number; delay: number }>>([]);

    useEffect(() => {
        // Tạo particles
        const particleArray = Array.from({ length: 20 }, (_, i) => ({
            id: i,
            delay: Math.random() * 10
        }));
        setParticles(particleArray);
    }, []);

    return (
        <>
            {/* Floating Particles */}
            {particles.map((particle) => (
                <div
                    key={particle.id}
                    className="particle"
                    style={{
                        left: `${Math.random() * 100}%`,
                        animationDelay: `${particle.delay}s`
                    }}
                />
            ))}

            {/* Geometric Shapes */}
            <div className="geometric-shape shape-1" />
            <div className="geometric-shape shape-2" />
            <div className="geometric-shape shape-3" />
        </>
    );
};

export default BackgroundEffects;
