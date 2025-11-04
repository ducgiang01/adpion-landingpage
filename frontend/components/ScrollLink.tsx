"use client";

import React from "react";

type ScrollLinkProps = {
    children: React.ReactNode;
    targetId: string;
    className?: string;
    onClick?: () => void;
    as?: "a" | "button";
    ariaLabel?: string;
};

export default function ScrollLink({ children, targetId, className, onClick, as = "a", ariaLabel }: ScrollLinkProps) {
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
        e.preventDefault();
        const element = document.getElementById(targetId);
        if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
        if (onClick) onClick();
    };

    if (as === "button") {
        return (
            <button type="button" onClick={handleClick} className={className} aria-label={ariaLabel}>
                {children}
            </button>
        );
    }

    return (
        // Using anchor for styling semantics, but preventing default navigation
        <a href="/" onClick={handleClick} className={className} aria-label={ariaLabel}>
            {children}
        </a>
    );
}
