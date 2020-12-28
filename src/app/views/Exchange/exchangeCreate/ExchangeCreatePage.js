import React from "react";
import { Col, Row } from "reactstrap";
import Toast from "../../../../utils/Toast";
import { createExchange } from "../store/exchangeCrud";
import ExchangeForm from "./ExchangeForm";

const ExchangeCreatePage = (props) => {
  const handleSubmit = (data) => {
    console.log("data", data);
    createExchange(data)
      .then((response) => {
        console.log("response", response);
        Toast.successMsg("Api saved successfully");
      })
      .catch((err) => {
        console.error(err);
        Toast.errorMsg("something went wrong");
      });
  };
  return (
    <>
      <div>
        <Row>
          <Col sm={12}>
            <ExchangeForm handleSubmit={handleSubmit} />
          </Col>
        </Row>
      </div>
    </>
  );
};

export default ExchangeCreatePage;
