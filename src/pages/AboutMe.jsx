import React from "react";
import { useRef } from "react";
import SwiperPhotos from "../components/SwiperPhotos";
import DelayedLink from "../components/DelayedLink";

const AboutMe = ({
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
    backgroundCenter.current.className = "dark-ball-animation-about-in";
    leftSide.current.style.display = "none";
    rigthSide.current.style.display = "none";
  };

  return (
    <div className="cont-about">
      <div className="dark-ball-about-done" ref={backgroundCenter}></div>
      <div className="cont-caroussel" ref={leftSide}>
        <h2 className="title-photos">Gallery Cube</h2>
        <SwiperPhotos />
        <h3 className="title-page-about-mobile">
          A little bit<span className="text-design">, About me</span>
        </h3>
      </div>
      <div className="cont-info" ref={rigthSide}>
        <h3 className="title-page-about">
          A little bit<span className="text-design">, About me</span>
        </h3>
        <p className="paragraph">
          I am a young computer programming lover, always willing to accept new
          challenges and have the skills to overcome them. Is it just me or is
          it normal to find exciting the idea of giving life or functionalities
          to ideas or tasks through code?.
        </p>
        <div className="robit-stress">
          <div className="btn-question">
            <div onClick={changeBackground}>
              <DelayedLink to="/aboutStress" delay={400}>
                <span className="btn-text">Show more</span>
              </DelayedLink>
            </div>

            <p className="question">Do you know how he de-stress?</p>
          </div>
          <div className="robit-question">
            <img
              className="Robit-about"
              src="../image/Robit_About.svg"
              alt="Robit"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
