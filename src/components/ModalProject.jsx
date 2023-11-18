import React from "react";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Carousel from "react-bootstrap/Carousel";
import DelayedLink from "./DelayedLink";
import ItemProject from "../components/ItemProject";

const ModalProject = (dataModal) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <button variant="primary" onClick={handleShow} className="card-button">
        {dataModal.global.name}
      </button>

      <Modal show={show} onHide={handleClose} size="lg" className="modalBG">
        <div className="cont-modal">
          <div className="modal-left">
            <Modal.Header className="modal-header">
              <Modal.Title
                id="example-modal-sizes-title-sm"
                className="title-modal"
              >
                {dataModal.global.name}
              </Modal.Title>

              <Carousel data-bs-theme="dark" className="carousel-project">
                <Carousel.Item>
                  <img
                    className="d-block w-50 m-auto"
                    src={`../image/${dataModal.global.image_1}`}
                    alt="First slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-50 m-auto"
                    src={`../image/${dataModal.global.image_2}`}
                    alt="Second slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-50 m-auto"
                    src={`../image/${dataModal.global.image_3}`}
                    alt="Third slide"
                  />
                </Carousel.Item>
              </Carousel>
            </Modal.Header>
            <Modal.Body>
              <p className="description-project">
                {dataModal.global.description}
              </p>
            </Modal.Body>
            <Modal.Footer className="modal-footer">
              <DelayedLink to={dataModal.global.demo} delay={100}>
                <span className="btn-demo">Go Demo</span>
              </DelayedLink>
              <DelayedLink to={dataModal.global.github} delay={100}>
                <span className="btn-github">Go to Github</span>
              </DelayedLink>
            </Modal.Footer>
          </div>
          <div className="modal-right">
            <div className="cont-overflow">
              {dataModal.global.skills.map((skill, index) => (
                <ItemProject
                  key={index}
                  imageProject={`${skill}.png`}
                  nameSkill="skill"
                />
              ))}
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ModalProject;
