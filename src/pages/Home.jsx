import React from "react";
import { useRef } from "react";
import DelayedLink from "../components/DelayedLink";

const Home = () => {
  const elementsLink = useRef();
  const elementsRight = useRef();
  const titlePage = useRef();
  const titleDeveloper = useRef();
  const darkBall = useRef();
  const contCenter = useRef();
  const Robit = useRef();

  const disappear = () => {
    titlePage.current.style.display = "none";
    titleDeveloper.current.style.display = "none";
    elementsLink.current.className = "hiddenElement";
    elementsRight.current.className = "hiddenElement";
    Robit.current.style.display = "none";
    contCenter.current.className = "contCenter";
    darkBall.current.className = "dark-ball-about-in";
  };

  return (
    <div className="cont-home">
      <div className="nav-home" ref={elementsLink}>
        <ul className="cont-items">
          <li>
            <div className="items-right">
              <DelayedLink to="/about" delay={500}>
                <div className="cont-img-about" onClick={disappear}>
                  <i className="bi bi-person-vcard-fill"></i>
                </div>
              </DelayedLink>
              <span>About me</span>
            </div>
          </li>

          <li>
            <div className="items-left">
              <DelayedLink to="/skills" delay={500}>
                <div className="cont-img-skills" onClick={disappear}>
                  <i className="bi bi-journal-code"></i>
                </div>
              </DelayedLink>
              <span>Skills</span>
            </div>
          </li>

          <li>
            <div className="items-left">
              <DelayedLink to="/projects" delay={500}>
                <div className="cont-img-projects" onClick={disappear}>
                  <i className="bi bi-kanban-fill"></i>
                </div>
              </DelayedLink>
              <span>Projects</span>
            </div>
          </li>

          <li>
            <div className="items-right">
              <DelayedLink to="/contact" delay={500}>
                <div className="cont-img-contact" onClick={disappear}>
                  <i className="bi bi-send-check"></i>
                </div>
              </DelayedLink>
              <span>Contact me</span>
            </div>
          </li>
        </ul>
      </div>
      <div className="mini-robit" ref={contCenter}>
        <div className="dark-ball" ref={darkBall}>
          <div className="cont-title-Mayckell" ref={titleDeveloper}>
            <h3>Mayckell Perez</h3>
            <span className="web_developer">Web Developer</span>
            <span className="fullstack">Fullstack</span>
          </div>
          <img
            ref={Robit}
            className="Robit"
            src="../image/Robit_Home.svg"
            alt="Robit"
          />
        </div>
      </div>
      <div className="setMode" ref={elementsRight}>
        <h2 ref={titlePage}>
          Hello<span className="text-design">, Friend</span>
          <p className="text-welcome">Glad to see you here!</p>
        </h2>
        <ul className="cont-set-items">
          <li>
            <div className="items-set-right">
              <div className="cont-img-darkMode">
                <i className="bi bi-brightness-low-fill"></i>
              </div>
              <span>Dark mode</span>
            </div>
          </li>

          <li>
            <div className="items-set-left mt-3">
              <div className="cont-img-translate">
                <i className="bi bi-translate"></i>
              </div>
              <span>Dark mode</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
