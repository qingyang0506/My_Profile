import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import particlesOptions from "../particles.json";

const ParticleBackground = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <Particles
      init={particlesInit}
      options={particlesOptions}
    />
  );
};

export default ParticleBackground;