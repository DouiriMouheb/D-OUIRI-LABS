// ParticlesBackground.jsx
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      style={{ position: "absolute", width: "100%", height: "100%" }}
      options={{
        fullScreen: { enable: false, zIndex: -1 },
        particles: {
          number: { value: 120 },
          color: { value: "#D6D6D6" },
          shape: { type: "circle" },
          opacity: { value: 0.3 },
          size: { value: { min: 1, max: 3 } },
          move: { enable: true, speed: 1, outModes: { default: "bounce" } },
          links: {
            enable: true,
            distance: 120,
            color: "#D6D6D6",
            opacity: 0.2,
            width: 1,
          },
        },
        background: {
          color: "#0A0E1A",
        },
      }}
    />
  );
};

export default ParticlesBackground;
