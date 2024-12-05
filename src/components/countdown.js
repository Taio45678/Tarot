import React, { useState, useEffect } from "react";

const Countdown = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const difference = +new Date(targetDate) - +new Date();
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
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const timerComponents = Object.keys(timeLeft).map((interval) => {
    if (!timeLeft[interval]) return null;

    // Traducir las unidades a español
    const translatedInterval = {
      days: "días",
      hours: "horas",
      minutes: "minutos",
      seconds: "segundos",
    };

    return (
      <span key={interval} className="mx-1 text-lg text-gray-700">
        <strong className="font-bold">{timeLeft[interval]}</strong> {translatedInterval[interval]}
      </span>
    );
  });

  return (
    <div className="text-lg text-gray-700">
      {timerComponents.length ? timerComponents : <span>¡El descuento ha finalizado!</span>}
    </div>
  );
};

export default Countdown;
