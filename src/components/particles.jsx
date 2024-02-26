'use client'
import { useCallback } from "react";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim"; 
import * as React from 'react';
import { Button, Container } from '@mui/material';


export default function Particless() {
    const particlesInit = useCallback(async engine => {
            await loadSlim(engine);
    }, []);
    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);
    return (
    <Container sx={{ flexGrow: 2, overflow:"hidden" }}>
            <Particles
        className="w-full h-screen"
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          fullScreen: true,
          background: {
            // color: {
            //   value: "#0d47a1",
            // },
          },
          fpsLimit: 60,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",

                distance: 400,
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 150,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#ffffff",
              distance: 120,
              enable: true,
              opacity: 0.6,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              directions: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 3,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 1200,
              },
              value: 80,
            },
            opacity: {
            value: 0.5,
            },
            shape: {
            type: "circle",
            },
            size: {
            value: { min: 1, max: 2 },
            },
        },
        detectRetina: true,
        }}
        />
    </Container>
    );
}
