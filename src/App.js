import { Box } from "@mui/material";
import Greeting from "./Components/Greeting";
import AboutMe from "./Components/AboutMe";
import Skill from "./Components/Skill";
import Project from "./Components/Project";
import Footer from "./Components/Footer"
import ParticleBackground from './Components/ParticleBackground'

import { useEffect } from "react";

function App() {

  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, [])

  return (
    <Box>
      <ParticleBackground />
      <Greeting />
      <AboutMe />
      <Skill />
      <Project />
      <Footer />
    </Box>
  );
}

export default App;
