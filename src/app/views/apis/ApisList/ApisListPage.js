import { Card, CardBody, CardTitle, Col, Row } from "reactstrap";
import React, { Component } from "react";

import ApisListTable from "./apis-table/ApisListTable";
import { Link } from "react-router-dom";
import { fetchConfigs } from "../store/apiCrud";

class ApisListPage extends Component {
  state = {
    apiConfigs: [],
    loading: false,
  };
  componentDidMount() {
    this.setState({ loading: true });
    fetchConfigs().then((response) => {
      console.log("fetchConfigs", response.data);
      this.setState({ apiConfigs: response.data });
      this.setState({ loading: false });
    });
  }
  render() {
    return (
      <div>
        <Row>
          <Col sm={12}>
            <div className="row mb-1">
              <div className="col-lg-12 text-right">
                <Link
                  color="primary"
                  className="btn btn-primary"
                  to="/apis/new"
                >
                  Add Api
                </Link>
              </div>
            </div>
            <Card>
              <CardBody>
                <div className="d-flex align-items-center">
                  <div>
                    <CardTitle>Apis</CardTitle>
                    {/* <CardSubtitle>Overview of Latest Month</CardSubtitle> */}
                  </div>
                </div>
                <ApisListTable
                  apiConfigs={this.state.apiConfigs}
                  loading={this.state.loading}
                />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default ApisListPage;
