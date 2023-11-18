import React from "react";
import { useRef } from "react";
import DelayedLink from "../components/DelayedLink";
import ItemSkill from "../components/ItemSkill";
import RadarChart from "../components/RadarChart";

const Skills = ({
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
    backgroundCenter.current.className = "dark-ball-animation-skills-in";
    leftSide.current.style.display = "none";
    rigthSide.current.style.display = "none";
  };

  return (
    <div className="cont-skills">
      <div className="dark-ball-skills-done" ref={backgroundCenter}></div>
      <div className="leftSide-skills" ref={leftSide}>
        <h2 className="cont-title">Skills</h2>
        <div className="cont-details-skills">
          <div className="cont-frontend">
            <h4 className="title-frontend">Frontend</h4>
            <div className="cont-skill row row-cols-2 row-cols-md-4 g-4 ps-2">
              <ItemSkill imageSkill="html.png" nameSkill="HTML" />
              <ItemSkill imageSkill="css.png" nameSkill="CSS" />
              <ItemSkill imageSkill="js.png" nameSkill="Javascript" />
              <ItemSkill imageSkill="bootstrap.png" nameSkill="Bootstrap" />
              <ItemSkill imageSkill="react.png" nameSkill="React.js" />
              <ItemSkill imageSkill="vue.png" nameSkill="Vue.js" />
            </div>
            <div className="cont-Robit-skills">
              <img
                className="Robit-about"
                src="../image/Robit_Skills.svg"
                alt="Robit"
              />
            </div>
          </div>
          <div className="cont-chart">
            <div className="chart-skills">
              <RadarChart />
            </div>
            <div className="cont-btn-academic" onClick={changeBackground}>
              <DelayedLink to="/studies" delay={400}>
                <span className="study-logo">
                  <i className="bi bi-mortarboard-fill"></i>
                </span>
                <span className="btn-text">Show academic Studies</span>
              </DelayedLink>
            </div>
          </div>
        </div>
      </div>
      <div className="rigthSide-skills" ref={rigthSide}>
        <div className="cont-backend">
          <h4 className="title-frontend">Backend</h4>
          <div className="cont-skill row row-cols-2 row-cols-md-4 g-4">
            <ItemSkill imageSkill="Laravel.png" nameSkill="Laravel" />
            <ItemSkill imageSkill="php.png" nameSkill="Php" />
            <ItemSkill imageSkill="Node.png" nameSkill="Node" />
            <ItemSkill imageSkill="Mongo_DB.png" nameSkill="MongoDB" />
            <ItemSkill imageSkill="MySql.png" nameSkill="MySql" />
            <ItemSkill imageSkill="Java_2.png" nameSkill="Java" />
          </div>
        </div>
        <div className="cont-tools">
          <h4 className="title-frontend">Another Tools</h4>
          <div className="cont-skill row row-cols-2 row-cols-md-4 g-4">
            <ItemSkill imageSkill="Wordpress.png" nameSkill="Wordpress" />
            <ItemSkill imageSkill="Office.png" nameSkill="Office" />
            <ItemSkill imageSkill="Figma.png" nameSkill="Figma" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
