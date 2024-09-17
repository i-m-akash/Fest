import React, { useState, useEffect } from 'react';

const CountdownTimer = () => {
    const calculateTimeLeft = () => {
        const targetDate = new Date('2024-10-09T23:59:59');
        const now = new Date();
        const difference = targetDate - now;

        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        }

        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="flex flex-col  p-4  text-[#001f3f]">
            {/* Text Above Timer */}
            <div className="text-center justify-center py-2 mb-2">
                <p className="text-xl md:text-2xl font-sans-serif poppins">Pyrexia 2024 Returns In </p>
            </div>

            {/* Middle Section: Logo and Timer */}
            <div className="flex justify-center flex-col md:flex-row items-center text-white ">
                {/* Logo */}
                

                {/* Countdown Timer */}
                <div className="flex justify-center items-center gap-3 p-3 bg-gradient-to-r from-[#001f3f] via-purple-800 to-[#001f3f] rounded-lg shadow-lg">
                    <div className="flex flex-col items-center bg-black bg-opacity-30 p-2 rounded-lg">
                        <span className="text-2xl md:text-3xl font-bold">{timeLeft.days || '0'}</span>
                        <span className="uppercase tracking-wide text-xs md:text-sm">Days</span>
                    </div>
                    <div className="flex flex-col items-center bg-black bg-opacity-30 p-2 rounded-lg">
                        <span className="text-2xl md:text-3xl font-bold">{timeLeft.hours || '0'}</span>
                        <span className="uppercase tracking-wide text-xs md:text-sm">Hours</span>
                    </div>
                    <div className="flex flex-col items-center bg-black bg-opacity-30 p-2 rounded-lg">
                        <span className="text-2xl md:text-3xl font-bold">{timeLeft.minutes || '0'}</span>
                        <span className="uppercase tracking-wide text-xs md:text-sm">Minutes</span>
                    </div>
                    <div className="flex flex-col items-center bg-black bg-opacity-30 p-2 rounded-lg">
                        <span className="text-2xl md:text-3xl font-bold">{timeLeft.seconds || '0'}</span>
                        <span className="uppercase tracking-wide text-xs md:text-sm">Seconds</span>
                    </div>
                </div>
            </div>

            {/* Text Below Timer */}
            <div className="text-center">
                <p className="text-lg md:text-xl mt-4 italic font-serif">Get ready to celebrate the biggest event of the year!</p>
            </div>
        </div>
    );
};

export default CountdownTimer;
