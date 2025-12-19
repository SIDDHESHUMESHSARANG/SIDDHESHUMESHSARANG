import React, { useRef, useEffect, useState } from 'react';

// Fade based on distance from viewport center:
// - opacity = 1 when element center aligns with viewport center
// - opacity decreases smoothly as element moves away
const FadeInOnScroll = ({ children, maxTranslate = 20 }) => {
    const ref = useRef(null);
    const [style, setStyle] = useState({ opacity: 0, transform: `translateY(${maxTranslate}px)` });

    useEffect(() => {
        let raf = null;

        const update = () => {
            const node = ref.current;
            if (!node) return;
            const rect = node.getBoundingClientRect();
            const elemCenter = rect.top + rect.height / 2;
            const viewportCenter = window.innerHeight / 2;
            const distance = Math.abs(elemCenter - viewportCenter);
            const maxDist = window.innerHeight / 2; // when element is off-screen center
            let t = 1 - Math.min(distance / maxDist, 1); // 1 at center, 0 at far edge
            // ease curve
            const eased = Math.pow(t, 1.2);
            const opacity = eased;
            const translateY = (1 - eased) * maxTranslate;
            setStyle({ opacity, transform: `translateY(${translateY}px)` });
        };

        const onScroll = () => {
            if (raf) cancelAnimationFrame(raf);
            raf = requestAnimationFrame(update);
        };

        // initial update
        update();
        window.addEventListener('scroll', onScroll, { passive: true });
        window.addEventListener('resize', onScroll);

        return () => {
            window.removeEventListener('scroll', onScroll);
            window.removeEventListener('resize', onScroll);
            if (raf) cancelAnimationFrame(raf);
        };
    }, [maxTranslate]);

    return (
        <div
            ref={ref}
            style={{
                transition: 'opacity 300ms ease-out, transform 300ms ease-out',
                willChange: 'opacity, transform',
                ...style,
            }}
        >
            {children}
        </div>
    );
};

export default FadeInOnScroll;
