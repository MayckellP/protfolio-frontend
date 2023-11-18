import React from "react";

const ItemProject = (props) => {
  return (
    <div className="item-project">
      <div className="cont-img-project">
        <img src={`../image/${props.imageProject}`} alt={props.nameSkill} />
      </div>
    </div>
  );
};

export default ItemProject;
