import React, { useState, useEffect } from "react";

function Example() {

    const [time, seTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            seTime(new Date())
        }, 1000);
        return () => {
            clearInterval(intervalId);
        }
    }, []);

    function formatTime() {
        let hours = time.getHours();
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();
        const meridiem = hours >= 12 ? "PM" : "AM";

        hours = hours % 12 || 12;

        return `${addZero(hours)}:${addZero(minutes)}:${addZero(seconds)} ${meridiem}`;
    }

    function addZero(number) {
        return (number < 10 ? "0" : "") + number;
    }

    return (<div className="clock-container">
        <div className="clock">
            <span>{formatTime()}</span>
        </div>
    </div>);
}

export default Example