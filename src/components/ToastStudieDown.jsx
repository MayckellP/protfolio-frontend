import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Toast from "react-bootstrap/Toast";

const ToastStudieDown = (data) => {
  const [showA, setShowA] = useState(false);

  const toggleShowA = () => setShowA(!showA);
  return (
    <>
      <Row
        className={
          data.zhaw
            ? "general-itemYear-down flex-row-reverse"
            : "general-itemYear-down"
        }
      >
        <div className="cont-itemYear">
          <h3 className="title-itemYear">{data.year}</h3>
          <div
            className={data.zhaw ? "btn-itemYear-ZHAW" : "btn-itemYear"}
            onClick={toggleShowA}
          >
            <img
              className="logo_studies mb-2"
              src={`../image/${data.image}`}
              alt="Robit"
            />
            <h4 className="subTitle-itemYear">{data.title}</h4>
            <span className="icon_studies">
              <i className={data.icon}></i>
            </span>
          </div>
        </div>
        <Toast show={showA} onClose={toggleShowA} className="toaster-year">
          <Toast.Header className="toaster-title">
            <strong>
              {data.institute} <span> {data.country}</span>
            </strong>
          </Toast.Header>
          <Toast.Body className="toaster-body">
            <div className="cont-subTitle-toaster">{data.subtitle}</div>
            <span className="cont-description-toaster">{data.description}</span>
            <div className="cont-year-toaster">{data.duration}</div>
          </Toast.Body>
        </Toast>
      </Row>
    </>
  );
};

export default ToastStudieDown;
