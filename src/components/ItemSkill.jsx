import React from "react";

const ItemSkill = (props) => {
  return (
    <div className="item-skill">
      <div className="cont-img-skill">
        <img src={`../image/${props.imageSkill}`} alt="Robit" />
      </div>
    </div>
  );
};

export default ItemSkill;
