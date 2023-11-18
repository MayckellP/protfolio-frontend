import React from "react";
import { useRef } from "react";
import DelayedLink from "../components/DelayedLink";
import ToastStudieDown from "../components/ToastStudieDown";
import ToastStudieUp from "../components/ToastStudieUp";

const Studies = ({
  setSharedElement,
  setLeftSideElement,
  setRigthSideElement,
}) => {
  const backgroundCenter = useRef();
  const leftSide = useRef();
  const rigthSide = useRef();
  setSharedElement(backgroundCenter.current);
  setLeftSideElement(leftSide.current);
  setRigthSideElement(rigthSide.current);

  const changeBackground = () => {
    backgroundCenter.current.className = "dark-ball-animation-studies-in";
    leftSide.current.style.display = "none";
    rigthSide.current.style.display = "none";
  };

  const job = "bi bi-briefcase-fill";
  const study = "bi bi-mortarboard-fill text-danger";
  const ZHAW = true;

  return (
    <div className="cont-studies">
      <div className="dark-ball-studies-done" ref={backgroundCenter}></div>
      <div className="topSide-studies" ref={leftSide}>
        <h2 className="cont-title-studies">
          Academic <span>Studies</span>
        </h2>
        <div className="cont-btn-skills-back" onClick={changeBackground}>
          <DelayedLink to="/skills" delay={400}>
            <span className="btn-text">Back to Skills</span>
          </DelayedLink>
        </div>
      </div>
      <div className="botSide-studies" ref={rigthSide}>
        <div className="cont-cronogram">
          <ToastStudieDown
            year="2018"
            image="../image/Gusber.svg"
            title="System Assistant"
            icon={job}
            institute="Gusber S.A,"
            country="Ec"
            subtitle="System assistant"
            description="Development of technological processes for the benefit of the
            company"
            duration="2018 - 2022"
          />

          <ToastStudieUp
            year="2019"
            icon={study}
            title_1="Microelectronic"
            title_2="Electronic Security"
            institute_1="1000Soluciones,"
            country_1="Ec"
            institute_2="INCAPEM,"
            country_2="Ec"
            subtitle_1="Microelectronic"
            subtitle_2="Electronic Security"
            description_1="Continuing education"
            description_2="Continuing education"
            duration_1="4 Months"
            duration_2="5 Months"
          />

          <ToastStudieDown
            year="2020"
            image="../image/ITB.svg"
            title="Software developer"
            icon={study}
            institute="ITB,"
            country="Ec"
            subtitle="Bolivarian University 
            Institute"
            description="Software developer - 2 Semester"
            duration="2019 - 2020"
          />

          <ToastStudieUp
            year="2021"
            icon={study}
            title_1="Cisco Academy"
            title_2="Cetec - Java"
            institute_1="CISCO,"
            country_1="Ec"
            institute_2="CETEC,"
            country_2="Ec"
            subtitle_1="IT Essential Security"
            subtitle_2="Object-oriented programming with Java"
            description_1="Continuing education"
            description_2="Continuing education"
            duration_1="3 Months"
            duration_2="3 Months"
          />

          <ToastStudieDown
            year="2022"
            image="../image/UCAMP.svg"
            title="Bootcamp Fullstack MERN"
            icon={study}
            institute="Ucamp,"
            country="Mx"
            subtitle="Utel University"
            description="Bootcamp Fullstack with:
            MongoDB - Express.js - React.js - Node.js"
            duration="1 Year"
          />

          <ToastStudieUp
            year="2023"
            icon={study}
            title_1="Bootcamp Fullstack with PHP"
            title_2=""
            institute_1="Opportunity"
            institute_2=""
            subtitle_1="Stadt Zürich (German)"
            subtitle_2=""
            description_1="Continuing education"
            description_2=""
            duration_1="9 Months"
            duration_2=""
          />

          <ToastStudieDown
            year="2024"
            image="../image/ZHAW.svg"
            title="Informatiker"
            icon={study}
            institute="ZHAW,"
            country="Zh"
            subtitle="System assistant"
            description="Development of technological processes for the benefit of the
            company"
            duration="2018 - 2022"
            zhaw={ZHAW}
          />
        </div>
      </div>
    </div>
  );
};

export default Studies;
