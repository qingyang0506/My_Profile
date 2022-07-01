import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import particlesOptions from "../particles.json";

const ParticleBackground = () => {
  const particlesInit = async (main) => {
    console.log(main);

    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };
  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={particlesOptions}
    />
  );
};

export default ParticleBackground;