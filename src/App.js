import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import "./styles/navbar.css";
import "./styles/homePage.css";
import "./styles/aboutPage.css";
import "./styles/relaxTimePage.css";
import "./styles/skillsPage.css";
import "./styles/studiesPage.css";
import "./styles/projectsPage.css";
import "./styles/contactPage.css";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import RelaxTime from "./pages/RelaxTime";
import Skills from "./pages/Skills";
import Studies from "./pages/Studies";
import Projects from "./pages/Projects";
import ContactMe from "./pages/ContactMe";

function App() {
  const [sharedElement, setSharedElement] = useState(null);
  const [leftSideElement, setLeftSideElement] = useState(null);
  const [rigthSideElement, setRigthSideElement] = useState(null);
  return (
    <div className="body">
      <Navbar
        sharedElement={sharedElement}
        leftSideElement={leftSideElement}
        rigthSideElement={rigthSideElement}
      />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/about"
          element={
            <AboutMe
              setSharedElement={setSharedElement}
              setLeftSideElement={setLeftSideElement}
              setRigthSideElement={setRigthSideElement}
            />
          }
        />

        <Route
          path="/aboutStress"
          element={
            <RelaxTime
              setSharedElement={setSharedElement}
              setLeftSideElement={setLeftSideElement}
              setRigthSideElement={setRigthSideElement}
            />
          }
        />

        <Route
          path="/skills"
          element={
            <Skills
              setSharedElement={setSharedElement}
              setLeftSideElement={setLeftSideElement}
              setRigthSideElement={setRigthSideElement}
            />
          }
        />

        <Route
          path="/studies"
          element={
            <Studies
              setSharedElement={setSharedElement}
              setLeftSideElement={setLeftSideElement}
              setRigthSideElement={setRigthSideElement}
            />
          }
        />

        <Route
          path="/Projects"
          element={
            <Projects
              setSharedElement={setSharedElement}
              setLeftSideElement={setLeftSideElement}
              setRigthSideElement={setRigthSideElement}
            />
          }
        />

        <Route
          path="/contact"
          element={
            <ContactMe
              setSharedElement={setSharedElement}
              setLeftSideElement={setLeftSideElement}
              setRigthSideElement={setRigthSideElement}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
