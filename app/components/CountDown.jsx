"use client"

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function CountDown() {

    const formatNumber = (number) => {
        return number < 10 ? `0${number}` : number;
    };

    const calculateTimeLeft = () => {
        const difference = + new Date('2025-07-23T13:00:00') - + new Date();
        let timeLeft = {};
    
        if (difference > 0) {
          timeLeft = {
            weeks: formatNumber(Math.floor(difference / (1000 * 60 * 60 * 24 * 7))),
            days: formatNumber(Math.floor((difference / (1000 * 60 * 60 * 24)) % 7)),
            hours:  formatNumber(Math.floor((difference / (1000 * 60 * 60)) % 24)),
            minutes:  formatNumber(Math.floor((difference / 1000 / 60) % 60)),
            seconds:  formatNumber(Math.floor((difference / 1000) % 60)),
          };
        }
    
        return timeLeft;
    };


    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
    
    useEffect(() => {
        const timer = setTimeout(() => {
          setTimeLeft(calculateTimeLeft());
        }, 1000);
      
        return () => clearTimeout(timer);
    }, [timeLeft]);
      
    
    const { weeks, days, hours, minutes, seconds } = timeLeft;
    
    
    return (
        <motion.div whileInView={{ opacity: 1, x: 0, }} initial={{ opacity: 0, x: -200 }} exit={{ opacity: 0 }} transition={{ duration: 1 }} className="grid grid-cols-5 sm:text-lg font-['wg'] bg-[rgba(0,0,0,0.3)] p-3 rounded-lg absolute bottom-40 text-white">
            <div className="col-span-1 text-center text-2xl">
                {weeks}
            </div>
            <div className="col-span-1 text-center text-2xl">
                {days}
            </div>
            <div className="col-span-1 text-center text-2xl">
                {hours}
            </div>
            <div className="col-span-1 text-center text-2xl">
                {minutes}
            </div>
            <div className="col-span-1 text-center text-2xl">
                {seconds}
            </div>
            <div className="col-span-1 text-center">
                {weeks === 1 ? 'Апта' : 'Апта'}
            </div>
            <div className="col-span-1 text-center">
                {days === 1 ? 'Күн' : 'Күн'}
            </div>
            <div className="col-span-1 text-center">
                {hours === 1 ? 'Сағат' : 'Сағат'}
            </div>
            <div className="col-span-1 text-center">
                {minutes === 1 ? 'Минута' : 'Минут'}
            </div>
            <div className="col-span-1 text-center">
                {seconds === 1 ? 'Секунда' : 'Секунд'}
            </div>
        </motion.div>
    );
}

export default CountDown;
