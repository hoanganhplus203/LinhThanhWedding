"use client";

import React, { useEffect, useState } from "react";

interface Cloud {
  id: number;
  top: string;
  startX: string;
  dir: "left" | "right";
  delay: number;
  duration: number;
}

export default function CloudAnimation() {
  const [clouds, setClouds] = useState<Cloud[]>([]);

  useEffect(() => {
    const total = 120; // even denser cloud field
    const newClouds: Cloud[] = [];

    for (let i = 0; i < total; i++) {
      // allow some clouds to start slightly above top, others slightly below bottom
      const top = `${Math.random() * 120 - 10}%`;
      // horizontal starting position across entire screen
      const startXVal = Math.random() * 100;
      const startX = `${startXVal}%`;
      // choose direction based on which side of centre the cloud starts
      const dir: "left" | "right" = startXVal < 50 ? "left" : "right";
      // quicker start delays and shorter travel durations for snappier effect
      const delay = parseFloat((Math.random() * 0.3).toFixed(2));
      const duration = parseFloat((2 + Math.random() * 1).toFixed(2));
      newClouds.push({ id: i, top, startX, dir, delay, duration });
    }

    setClouds(newClouds);
    // remove clouds after longest duration
    const max = Math.max(...newClouds.map(c => c.delay + c.duration));
    const t = setTimeout(() => setClouds([]), max * 1000 + 500);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="cloud-wrapper">
      {clouds.map(c => (
        <div
          key={c.id}
          className={`cloud ${c.dir}`}
          style={{
            top: c.top,
            left: c.startX,
            animationDelay: `${c.delay}s`,
            animationDuration: `${c.duration}s`,
          }}
        />
      ))}
    </div>
  );
}
