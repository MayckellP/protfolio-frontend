import React from "react";
import Card from "react-bootstrap/Card";
import ModalProject from "./ModalProject";

const CardProject = (data) => {
  return (
    <>
      <Card className="card-project">
        <Card.Img
          variant="top"
          src={`../image/${data.global.main_Image}`}
          className="card-img"
        />
        <Card.Body className="card-text">
          <ModalProject global={data.global} />
        </Card.Body>
      </Card>
    </>
  );
};

export default CardProject;
