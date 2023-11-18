import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Toast from "react-bootstrap/Toast";

const ToastStudieUp = (data) => {
  const [showA, setShowA] = useState(false);

  const toggleShowA = () => setShowA(!showA);
  return (
    <>
      <Row className="general-itemYear-up">
        <div className="cont-itemYear ">
          <div className="btn-itemYear pb-3" onClick={toggleShowA}>
            <span className="icon_studies">
              <i className={data.icon}></i>
            </span>
            <h4 className="subTitle-itemYear mb-2">{data.title_1}</h4>
            <h4 className="subTitle-itemYear">{data.title_2}</h4>
          </div>
          <h3 className="title-itemYear">{data.year}</h3>
        </div>
        <Toast show={showA} onClose={toggleShowA} className="toaster-year">
          <Toast.Header className="toaster-title">
            <strong>
              {data.institute_1}
              <span> {data.country_1}</span>
            </strong>
          </Toast.Header>
          <Toast.Body className="toaster-body-up">
            <div className="cont-subTitle-toaster-up">{data.subtitle_1}</div>
            <span className="cont-description-toaster">
              {data.description_1}
            </span>
            <div className="cont-year-toaster-up">{data.duration_1}</div>
          </Toast.Body>

          <div className="toaster-title text-center">
            <strong>
              {data.institute_2}
              <span> {data.country_2}</span>
            </strong>
          </div>
          <Toast.Body className="toaster-body-up">
            <div className="cont-subTitle-toaster-up">{data.subtitle_2}</div>
            <span className="cont-description-toaster">
              {data.description_2}
            </span>
            <div className="cont-year-toaster-up">{data.duration_2}</div>
          </Toast.Body>
        </Toast>
      </Row>
    </>
  );
};

export default ToastStudieUp;
