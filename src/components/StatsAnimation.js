import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './StatsAnimation.css';

const Counter = ({ value }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let start = 0;
        const increment = Math.ceil(value / 50); // Ajuste para suavidade
        const interval = setInterval(() => {
            start += increment;
            if (start >= value) {
                start = value;
                clearInterval(interval);
            }
            setCount(start);
        }, 40); // Velocidade da contagem

        return () => clearInterval(interval);
    }, [value]);

    return (
        <motion.h2
            className="rolling-number"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <motion.span
                animate={{ rotate: 360 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
            >
                +{count}
            </motion.span>
        </motion.h2>
    );
};

const StatsAnimation = () => {
    const stats = [
        { label: "Anos no mercado", value: 18 },
        { label: "Apartamentos vendidos", value: 500 },
        { label: "Prédios construídos", value: 30 },
    ];

    return (
        <div className="stats-container">
            {stats.map((stat, index) => (
                <div className="stat-item" key={index}>
                    <Counter value={stat.value} />
                    <p>{stat.label}</p>
                </div>
            ))}
        </div>
    );
};

export default StatsAnimation;
