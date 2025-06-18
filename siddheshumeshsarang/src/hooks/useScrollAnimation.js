import { useEffect, useRef, useState } from 'react';

export const useScrollAnimation = (threshold = 0.5) => {
    const elementRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !isVisible) {
                    setIsVisible(true);
                    // Once visible, stop observing to prevent fade out
                    observer.unobserve(entry.target);
                }
            },
            {
                threshold: threshold,
                rootMargin: '0px 0px -100px 0px'
            }
        );

        if (elementRef.current) {
            observer.observe(elementRef.current);
        }

        return () => {
            if (elementRef.current) {
                observer.unobserve(elementRef.current);
            }
        };
    }, [threshold, isVisible]);

    return [elementRef, isVisible];
}; 