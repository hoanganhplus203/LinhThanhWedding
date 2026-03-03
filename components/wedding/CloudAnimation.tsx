"use client";

import { useEffect, useState } from "react";
import Particles from "@tsparticles/react";
import { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function CloudAnimation() {
  const [isVisible, setIsVisible] = useState(true);
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  useEffect(() => {
    // Hide particles after animation completes (4 seconds)
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible || !init) {
    return null;
  }

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-50">
      <Particles
        id="cloud-particles"
        options={{
          background: {
            color: {
              value: "transparent",
            },
          },
          fpsLimit: 120,
          particles: {
            color: {
              value: ["#FFB6C1", "#FFC0CB", "#FFB6D9", "#FFC0D9", "#FFB6E6"],
            },
            number: {
              value: 0,
            },
            shape: {
              type: "circle",
            },
            opacity: {
              value: 0.9,
              animation: {
                enable: true,
                speed: 0.3,
                sync: false,
              },
            },
            size: {
              value: { min: 50, max: 150 },
              animation: {
                enable: true,
                speed: 1,
                sync: false,
              },
            },
            move: {
              enable: true,
              speed: 1,
              direction: "none",
              random: false,
              straight: false,
              outModes: {
                default: "destroy",
              },
            },
          },
          interactivity: {
            detectsOn: "window",
            events: {
              onHover: {
                enable: false,
              },
              onClick: {
                enable: false,
              },
              resize: {
                enable: true,
              },
            },
          },
          detectRetina: true,
          emitters: [
            {
              position: {
                x: 50,
                y: 50,
              },
              rate: {
                quantity: 30,
                delay: 0.05,
              },
              life: {
                count: 1,
                duration: {
                  value: 2.5,
                },
                delay: 0,
              },
              particles: {
                move: {
                  direction: "left",
                  speed: { min: 4, max: 6 },
                },
                opacity: {
                  value: 0.85,
                },
                size: {
                  value: { min: 60, max: 120 },
                },
              },
            },
            {
              position: {
                x: 50,
                y: 50,
              },
              rate: {
                quantity: 30,
                delay: 0.05,
              },
              life: {
                count: 1,
                duration: {
                  value: 2.5,
                },
                delay: 0,
              },
              particles: {
                move: {
                  direction: "right",
                  speed: { min: 4, max: 6 },
                },
                opacity: {
                  value: 0.85,
                },
                size: {
                  value: { min: 60, max: 120 },
                },
              },
            },
          ],
        }}
      />
    </div>
  );
}
