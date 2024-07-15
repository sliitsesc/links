"use client";

import React, { useEffect } from "react";

export default function HeaderAnimation() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "animatedBackgrounds/finisher-header.es5.min.js";
    script.async = true;
    script.onload = () => {
      new FinisherHeader({
        count: 70,
        size: {
          min: 1,
          max: 23,
          pulse: 0,
        },
        speed: {
          x: {
            min: 0,
            max: 0.2,
          },
          y: {
            min: 0,
            max: 0.2,
          },
        },
        colors: {
          background: "transparent",
          particles: ["#ffffff", "#dbfd51", "#7d61f2"],
        },
        blending: "none",
        opacity: {
          center: 1,
          edge: 0.8,
        },
        skew: 0,
        shapes: ["s"],
      });
    };
    document.body.appendChild(script);
  }, []);

  return (
    <div className="header finisher-header absolute w-full h-full overflow-hidden"></div>
  );
}
