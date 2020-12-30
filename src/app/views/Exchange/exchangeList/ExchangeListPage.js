import { Card, CardBody, CardTitle, Col, Row } from "reactstrap";
import React, { Component } from "react";

import AppLoader from "../../../../components/AppLoader";
import ExchangeListTable from "./exchangeTable/ExchangeListTable";
import { Link } from "react-router-dom";
import Toast from "../../../../utils/Toast";
import { fetchExchangeApiList } from "../store/exchangeCrud";

class ExchangeListPage extends Component {
  state = {
    apiConfigs: [],
    loading: false,
    queryParams: {
      totalSize: 10,
      sizePerPage: 10,
      page: 1,
    },
  };
  componentDidMount() {
    this.fetchData(1, 10);
  }

  fetchData = async (page, sizePerPage) => {
      console.log("FETCHING FROM API", page, sizePerPage);
    //  this.setState({
    //     dummyData: fetchDummyData(page, sizePerPage),
    //     queryParams: { ...this.state.queryParams, page, sizePerPage },
    //   });
    try {
      this.setState({ loading: true });
      const apiConfigs = await fetchExchangeApiList(page, sizePerPage);
      console.log("apiConfigs", apiConfigs);
      this.setState({
        apiConfigs: apiConfigs.content,
        queryParams: {
          totalSize: apiConfigs.totalPages,
          sizePerPage: apiConfigs.size,
          page: apiConfigs.number + 1,
        },
      });
    } catch (err) {
      console.error(err);
      Toast.errorMsg("something went wrong");
    } finally {
      this.setState({ loading: false });
    }
  };

  onEditExchange = (id) => {
    this.props.history.push(`/exchange/edit/${id}`);
  };
  render() {
    return (
      <div>
        {this.state.loading && <AppLoader />}
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
                  apiConfigs={this.state.apiConfigs}
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
