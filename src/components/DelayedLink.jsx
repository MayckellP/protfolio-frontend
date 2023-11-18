import React from "react";

const DelayedLink = ({ to, delay, children }) => {
  const clickToDelay = () => {
    setTimeout(() => {
      window.location.href = to;
    }, delay);
  };
  return (
    <div onClick={clickToDelay} style={{ cursor: "pointer" }}>
      {children}
    </div>
  );
};

export default DelayedLink;
