import React from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import './ScrollFadeIn.css';

export const ScrollFadeIn = ({ children, threshold = 0.5, delay = 0 }) => {
    const [ref, isVisible] = useScrollAnimation(threshold);

    return (
        <div 
            ref={ref}
            className={`scroll-fade-in ${isVisible ? 'visible' : ''}`}
            style={{ animationDelay: `${delay}ms` }}
        >
            {children}
        </div>
    );
}; 