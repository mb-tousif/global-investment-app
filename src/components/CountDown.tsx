"use client";
import React, { useState, useEffect } from "react";

export default function CountDown () {
  let difference = +new Date(`12/10/2023`) - +new Date();
  const [delay, setDelay] = useState(difference);

  const d = Math.floor(difference / (1000 * 60 * 60 * 24));
  const h = Math.floor((difference / (1000 * 60 * 60)) % 24);
  const m = Math.floor((difference / 1000 / 60) % 60);
  const s = Math.floor((difference / 1000) % 60);

  useEffect(() => {
    const timer = setInterval(() => {
      setDelay(delay - 1);
    }, 1000);

    if (delay === 0) {
      clearInterval(timer);
    }

    return () => {
      clearInterval(timer);
    };
  });

  return (
    <div className="flex align-middle justify-center">
      <span className="font-bold text-5xl text-[#03A776]">
        {d}:{h}:{m}:{s}
      </span>
    </div>
  );
};
