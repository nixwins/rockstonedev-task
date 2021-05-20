import React, { useState, useEffect } from 'react';
import './clock.css';

const Clock = () => {
    const [time, setTime] = useState(new Date());

    let interval;

    useEffect(() => {
        interval = setInterval(() => {
            setTime(new Date())
        }, 1000);

        return () => clearInterval(interval);
    });

    return <div className="clock">{time.toLocaleTimeString()}</div>
}

export default Clock;