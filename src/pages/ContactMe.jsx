import React from "react";
import { useRef } from "react";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import DelayedLink from "../components/DelayedLink";

const ContactMe = ({
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

  return (
    <div className="cont-contact">
      <div className="dark-ball-skills-done" ref={backgroundCenter}></div>
      <div className="leftSide-contact" ref={leftSide}>
        <div className="cont-details-contact">
          <div className="cont-formular">
            <h4 className="title-form">Contact Form</h4>
            <form action="">
              <div className="cont-name-number">
                <FloatingLabel
                  controlId="floatingInput"
                  label="Name"
                  className="input-name"
                >
                  <Form.Control
                    type="text"
                    className="inputs-form"
                    placeholder="Name"
                  />
                </FloatingLabel>

                <FloatingLabel
                  controlId="floatingInput"
                  label="Phone"
                  className="input-number"
                >
                  <Form.Control
                    type="number"
                    className="inputs-form"
                    placeholder="Phone"
                  />
                </FloatingLabel>
              </div>

              <div className="cont-email">
                <FloatingLabel
                  controlId="floatingInput"
                  label="E-Mail"
                  className="input-mail"
                >
                  <Form.Control
                    type="mail"
                    className="inputs-form"
                    placeholder="E-Mail"
                  />
                </FloatingLabel>
              </div>

              <div className="cont-comment">
                <FloatingLabel
                  controlId="floatingTextarea"
                  label="Comments"
                  className="input-comment"
                >
                  <Form.Control
                    as="textarea"
                    className="inputs-form"
                    placeholder="Comments"
                  />
                </FloatingLabel>
              </div>

              <div className="cont-btn-contact">
                <DelayedLink to="/studies" delay={400}>
                  <span className="btn-contact">Send Comment</span>
                </DelayedLink>
              </div>
            </form>
          </div>
          <div className="cont-contact-robit-title">
            <div className="cont-Robit-title">
              <h3>Battery save mode</h3>
              <span>See you later</span>
            </div>
            <div className="cont-Robit-contact">
              <img
                className="Robit-contact"
                src="../image/Robit_Contact.svg"
                alt="Robit"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="rigthSide-contact" ref={rigthSide}>
        <div className="cont-contact-title">
          <h2 className="title-contact">Any</h2>
          <span className="text-design-contact">questions?</span>
        </div>

        <ul className="cont-accounts-items">
          <DelayedLink to="/" delay={100}>
            <li>
              <div className="items-accounts-right">
                <div className="cont-img-mail">
                  <i className="bi bi-envelope-fill"></i>
                </div>
                <span>Mail</span>
              </div>
            </li>
          </DelayedLink>

          <DelayedLink to="https://github.com/MayckellP" delay={100}>
            <li>
              <div className="items-accounts-mid mt-3">
                <div className="cont-img-github">
                  <i className="bi bi-github"></i>
                </div>
                <span>Github</span>
              </div>
            </li>
          </DelayedLink>

          <DelayedLink
            to="https://www.linkedin.com/in/mayckell-perez"
            delay={100}
          >
            <li>
              <div className="items-set-left mt-3">
                <div className="cont-img-linkedin">
                  <i className="bi bi-linkedin"></i>
                </div>
                <span>Linkedin</span>
              </div>
            </li>
          </DelayedLink>
        </ul>
      </div>
    </div>
  );
};

export default ContactMe;
