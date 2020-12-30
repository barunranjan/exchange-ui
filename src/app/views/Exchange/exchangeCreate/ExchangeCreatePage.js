import { Col, Row } from "reactstrap";

import ExchangeForm from "./ExchangeForm";
import React from "react";
import Toast from "../../../../utils/Toast";
import { createExchange } from "../store/exchangeCrud";

const ExchangeCreatePage = (props) => {

  const initialValues = {
    name: "",
    description: "",
    inputTypes: [
      {
        paramName: "",
        paramType: "",
      },
    ],
    outputTypes: [
      {
        paramName: "",
        paramType: "",
      },
    ],
  };
  const handleSubmit = (data) => {

    console.log("data",data)
    // createExchange(data)
    //   .then((response) => {
    //     Toast.successMsg("Api saved successfully");
    //   })
    //   .catch((err) => {
    //     Toast.errorMsg("something went wrong");
    //   });
  };

  const goBack = () => {
    props.history.goBack();
  };

  return (
    <>
      <div data-test='test-exchangeCreatePage'>
        <div className="row mb-1">
          <div className="col-lg-12 text-right">
            <button data-test='test-button' color="danger" className="btn btn-primary" onClick={goBack}>
              <i className="ti ti-arrow-left"></i> Back
            </button>
          </div>
        </div>
        <Row >
          <Col sm={12}>
            <ExchangeForm
             data-test='test-form'
              handleSubmit={handleSubmit}
              initialValues={initialValues}
            />
          </Col>
        </Row>
      </div>
    </>
  );
};

export default ExchangeCreatePage;
