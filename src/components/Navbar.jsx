import React from "react";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import DelayedLink from "../components/DelayedLink";

const Navbar = ({ sharedElement, leftSideElement, rigthSideElement }) => {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  const getGreetingTime = (hour) => {
    if (hour < 12) {
      return "Morning";
    } else if (hour < 17) {
      return "Afternoon";
    } else {
      return "Evening";
    }
  };
  const options = { day: "numeric", month: "long" };
  const locale = "de-CH";
  const formattedDate = currentDate.toLocaleDateString(locale, options);
  const timeOfDay = getGreetingTime(currentDate.getHours());

  const location = useLocation();
  var linkAbout;
  var linkSkills;
  var linkProjects;
  var linkContact;

  const changeBackground = () => {
    if (sharedElement) {
      leftSideElement.style.display = "none";
      rigthSideElement.style.display = "none";

      if (location.pathname === "/about") {
        sharedElement.className = "dark-ball-animation-about-in";
      } else if (location.pathname === "/skills") {
        sharedElement.className = "dark-ball-animation-skills-in";
      } else if (location.pathname === "/projects") {
        sharedElement.className = "dark-ball-animation-projects-in";
      } else if (location.pathname === "/contact") {
        sharedElement.className = "dark-ball-animation-skills-in";
      }
    }
  };
  if (location.pathname === "/about") {
    linkAbout = "text-info text-decoration-underline";
  } else if (location.pathname === "/skills") {
    linkSkills = "text-info text-decoration-underline";
  } else if (location.pathname === "/projects") {
    linkProjects = "text-info text-decoration-underline";
  } else if (location.pathname === "/contact") {
    linkContact = "text-info text-decoration-underline";
  }

  return (
    <div className="cont-navbar">
      <h3 className="regards">
        Good {timeOfDay}, {formattedDate}
      </h3>

      <ul
        className={
          location.pathname !== "/" ? "subMenu py-2" : "subMenu py-2 d-none"
        }
      >
        <li onClick={changeBackground}>
          <DelayedLink to="/about" delay={400}>
            <span className={linkAbout}>
              <i className="bi bi-person-vcard-fill"></i>About me
            </span>
          </DelayedLink>
        </li>
        <li onClick={changeBackground}>
          <DelayedLink to="/skills" delay={400}>
            <span className={linkSkills}>
              <i className="bi bi-journal-code"></i>Skills
            </span>
          </DelayedLink>
        </li>
        <li onClick={changeBackground}>
          <DelayedLink to="/projects" delay={400}>
            <span className={linkProjects}>
              <i className="bi bi-kanban-fill"></i>Projects
            </span>
          </DelayedLink>
        </li>
        <li onClick={changeBackground}>
          <DelayedLink to="contact" delay={400}>
            <span className={linkContact}>
              <i className="bi bi-send-check"></i>Contact me
            </span>
          </DelayedLink>
        </li>
      </ul>

      <div className="details-right">
        <span>{currentDate.toLocaleTimeString()}</span>
        <span>30°</span>
      </div>
    </div>
  );
};

export default Navbar;
