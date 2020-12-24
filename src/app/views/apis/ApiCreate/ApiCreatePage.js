import { Col, Row } from "reactstrap";
import React, { Component } from "react";

import ApiForm from "./ApiForm";
import Toast from "../../../../utils/Toast";
import { createConfig } from "../store/apiCrud";

class ApiCreatePage extends Component {
  handleSubmit = (data) => {
    console.log("data", data);
    createConfig(data).then(response => {
      console.log("response", response)
      Toast.successMsg("Api saved successfully");
    }).catch((err) => {
      console.error(err);
      Toast.errorMsg("something went wrong");
    })
  };
  render() {
    return (
      <>
        <div>
          <Row>
            <Col sm={12}>
              <ApiForm handleSubmit={this.handleSubmit} />
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default ApiCreatePage;
