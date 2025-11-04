// components/Testimonials.tsx
'use client';

import { useEffect, useRef, useState } from "react";

type Testimonial = {
    name: string;
    role: string;
    quote: string;
    stars: number;
};

const ITEMS: Testimonial[] = [
    {
        name: "Leah M.",
        role: "Growth Lead, DTC",
        quote:
            "Adpion delivered verified accounts fast and kept funding transparent. We scaled spend safely without surprises.",
        stars: 5,
    },
    {
        name: "Hussain A.",
        role: "Agency Owner",
        quote:
            "Setup across multiple BMs was smooth. 24/7 support helped us handle appeals during a critical launch window.",
        stars: 5,
    },
    {
        name: "Bruno S.",
        role: "Performance Marketer",
        quote:
            "Stable delivery, clean top-ups, and clear comms. Exactly what we needed to protect ROAS while growing.",
        stars: 5,
    },
];

const AUTO_MS = 4000;

export default function Testimonials() {
    const [i, setI] = useState(0);
    const timer = useRef<NodeJS.Timeout | null>(null);
    const hovering = useRef(false);

    // autoplay
    useEffect(() => {
        start();
        return stop;
    }, []);

    const start = () => {
        stop();
        timer.current = setInterval(() => {
            if (!hovering.current) next();
        }, AUTO_MS);
    };

    const stop = () => {
        if (timer.current) clearInterval(timer.current);
    };

    const prev = () => setI((p) => (p + ITEMS.length - 1) % ITEMS.length);
    const next = () => setI((p) => (p + 1) % ITEMS.length);
    const go = (idx: number) => setI(idx % ITEMS.length);

    // swipe (mobile)
    const touchX = useRef<number | null>(null);
    const onTouchStart = (e: React.TouchEvent) => (touchX.current = e.touches[0].clientX);
    const onTouchEnd = (e: React.TouchEvent) => {
        if (touchX.current == null) return;
        const dx = e.changedTouches[0].clientX - touchX.current;
        if (Math.abs(dx) > 40) (dx > 0 ? prev() : next());
        touchX.current = null;
    };

    return (
        <section
            id="reviews"
            className="py-20 bg-gradient-to-b from-gray-800 to-gray-900"
            onMouseEnter={() => (hovering.current = true)}
            onMouseLeave={() => (hovering.current = false)}
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
            aria-roledescription="carousel"
            aria-label="Customer testimonials"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold mb-3">
                        <span className="bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
                            What Customers Say
                        </span>
                    </h2>
                    <p className="text-gray-400 text-lg">
                        Trusted by agencies and cross-border sellers worldwide
                    </p>
                </div>

                <div className="relative max-w-3xl mx-auto">
                    {/* Slides */}
                    <div className="relative h-[280px] sm:h-[240px]">
                        {ITEMS.map((t, idx) => (
                            <figure
                                key={idx}
                                className={`absolute inset-0 transition-opacity duration-500 ${i === idx ? "opacity-100" : "opacity-0"
                                    } bg-gray-900/70 border border-gray-700 rounded-2xl p-7`}
                                itemScope
                                itemType="https://schema.org/Review"
                                aria-hidden={i !== idx}
                            >
                                <div
                                    className="flex items-center gap-1 mb-3"
                                    aria-label={`${t.stars} star rating`}
                                >
                                    {Array.from({ length: t.stars }).map((_, j) => (
                                        <span key={j} className="text-accent-400">★</span>
                                    ))}
                                </div>
                                <blockquote className="text-gray-200 leading-relaxed" itemProp="reviewBody">
                                    “{t.quote}”
                                </blockquote>
                                <figcaption className="mt-4">
                                    <div className="font-semibold text-white" itemProp="author">
                                        {t.name}
                                    </div>
                                    <div className="text-sm text-gray-400">{t.role}</div>
                                </figcaption>
                                <meta itemProp="reviewRating" content={`${t.stars}`} />
                            </figure>
                        ))}
                    </div>

                    {/* Controls */}
                    <button
                        aria-label="Previous testimonial"
                        onClick={prev}
                        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 px-3 py-2 rounded-full text-white"
                    >
                        ‹
                    </button>
                    <button
                        aria-label="Next testimonial"
                        onClick={next}
                        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 px-3 py-2 rounded-full text-white"
                    >
                        ›
                    </button>

                    {/* Dots */}
                    <div className="mt-5 flex justify-center gap-2">
                        {ITEMS.map((_, idx) => (
                            <button
                                key={idx}
                                aria-label={`Go to testimonial ${idx + 1}`}
                                onClick={() => go(idx)}
                                className={`h-2.5 w-2.5 rounded-full ${i === idx ? "bg-white" : "bg-white/40"
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
