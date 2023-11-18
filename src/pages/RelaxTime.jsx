import React from "react";
import { useRef } from "react";
import DelayedLink from "../components/DelayedLink";

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
    backgroundCenter.current.className = "dark-ball-animation-relax-in";
    leftSide.current.style.display = "none";
    rigthSide.current.style.display = "none";
  };

  return (
    <div className="cont-relax">
      <div className="dark-ball-relax-done" ref={backgroundCenter}></div>
      <div className="topSide-relax" ref={leftSide}>
        <h2 className="cont-title-relax">
          Relax <span>Time!</span>
        </h2>
        <div className="cont-btn-relax-back" onClick={changeBackground}>
          <DelayedLink to="/about" delay={400}>
            <span className="btn-text">Back to About me</span>
          </DelayedLink>
        </div>
      </div>
      <div className="botSide-relax" ref={rigthSide}>
        <div className="cont-text-relax">
          <p className="text">
            To relax I like to disconnect from reality and through movies, video
            games or just reading a book. The idea is to completely change the
            routine!
          </p>
        </div>
        <div className="cont-img-relax">
          <img src="../image/Activities.svg" alt="Activities" />
        </div>
      </div>
    </div>
  );
};

export default Studies;
