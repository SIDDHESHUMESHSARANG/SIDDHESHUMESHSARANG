import React, { useState, useEffect } from 'react';
import Snowfall from 'react-snowfall';

const SeasonalApp = ({ children }) => {
    const [isWinter, setIsWinter] = useState(false);

    useEffect(() => {
        const checkSeason = () => {
            const month = new Date().getMonth();
            setIsWinter(month === 11 || month === 0);
        };

        checkSeason();
    }, []);

    return (
        <div style={{ position: 'relative', background: 'transparent' }}>
            {children}
            {isWinter && (
                <Snowfall style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }} color='#FFFAFA'/>
            )}
        </div>
    );
};

export default SeasonalApp;