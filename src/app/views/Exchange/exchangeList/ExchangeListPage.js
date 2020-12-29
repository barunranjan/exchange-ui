import { Card, CardBody, CardTitle, Col, Row } from "reactstrap";
import React, { Component } from "react";

import ExchangeListTable from "./exchangeTable/ExchangeListTable";
import { Link } from "react-router-dom";

const fetchDummyData = (page, sizePerPage) => {
  return Array.apply(0, new Array(sizePerPage)).map((ex, i) => ({
    id: ((page - 1) * sizePerPage) + i + 1,
    name: "dummyName " + (((page - 1) * sizePerPage) + i + 1),
    description: "this is dummy description",
    inputType: ["duumy1", "dummy2"],
    outputType: ["duumy1", "dummy2"],
  }));
};

class ExchangeListPage extends Component {
  state = {
    apiConfigs: [],
    loading: false,
    dummyData: fetchDummyData(1, 10),
    queryParams: {
      totalSize: 100,
      sizePerPage: 10,
      page: 1,
    },
  };
  //   componentDidMount() {
  //     this.setState({ loading: true });
  //     fetchConfigs().then((response) => {
  //       console.log("fetchConfigs", response.data);
  //       this.setState({ apiConfigs: response.data });
  //       this.setState({ loading: false });
  //     });
  //   }

  fetchData = (page, sizePerPage) => {
    console.log("FETCHING FROM API", page, sizePerPage);
   this.setState({
      dummyData: fetchDummyData(page, sizePerPage),
      queryParams: { ...this.state.queryParams, page, sizePerPage },
    });
  };

  onEditExchange = (id) => {
    this.props.history.push(`/exchange/edit/${id}`);
  };
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
                  to="/exchange/new"
                >
                  <i className="ti ti-plus"></i> Add Exchange
                </Link>
              </div>
            </div>
            <Card>
              <CardBody>
                <div className="d-flex align-items-center">
                  <div>
                    <CardTitle>Exchange</CardTitle>
                    {/* <CardSubtitle>Overview of Latest Month</CardSubtitle> */}
                  </div>
                </div>
                <ExchangeListTable
                  apiConfigs={this.state.dummyData}
                  queryParams={this.state.queryParams}
                  fetchData={this.fetchData}
                  loading={this.state.loading}
                  onEditExchange={this.onEditExchange}
                />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default ExchangeListPage;
