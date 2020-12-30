import { Col, Row } from "reactstrap";
import React, { useEffect, useState } from "react";

import AppLoader from "../../../../components/AppLoader";
import ExchangeForm from "../exchangeForm/ExchangeForm";
import Toast from "../../../../utils/Toast";
import { fetchExchangeById } from "./../store/exchangeCrud";

const ExchangeEdit = (props) => {
  const [exchange, setExchange] = useState(null);
  const [loading, setLoading] = useState(false);
  const [exchangeId] = useState(props.match && props.match.params.id);

  const getExchangeById = async (exchangeId) => {
    setLoading(true);
    try {
      const dummyData = await fetchExchangeById(exchangeId);
      setExchange({
        ...dummyData,
        inputEventTypes: dummyData.inputEventTypes.map((type) => ({
          ...type,
          eventType: {
            label: type.eventType,
            value: type.eventType,
          },
        })),
        outputEventTypes: dummyData.outputEventTypes.map((type) => ({
          ...type,
          eventType: {
            label: type.eventType,
            value: type.eventType,
          },
        })),
      });
    } catch (error) {
      console.log(error);
      Toast.errorMsg("something went wrong");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setLoading(true);
    // getExchangeById(exchangeId).then((response) => {
    //   setExchange(response.data);

    getExchangeById(exchangeId);
    setLoading(false);
  }, [exchangeId]);

  console.log(exchange);

  const updateExchange = (data, id) => {
    console.log("data", data);
    // createExchange(data)
    //   .then((response) => {
    //     console.log("response", response);
    //     Toast.successMsg("Api saved successfully");
    //   })
    //   .catch((err) => {
    //     console.error(err);
    //     Toast.errorMsg("something went wrong");
    //   });
  };

  const goBack = () => {
    props.history.goBack();
  };

  return (
    <>
      {loading && <AppLoader />}
      <div data-test="test-exchangeEditPage">
        <div className="row mb-1">
          <div className="col-lg-12 text-right">
            <button
              data-test="test-button"
              color="danger"
              className="btn btn-primary"
              onClick={goBack}
            >
              <i className="ti ti-arrow-left"></i> Back
            </button>
          </div>
        </div>
        <Row data-test="test-form">
          <Col sm={12}>
            {exchange && (
              <ExchangeForm
                data-test="test-form"
                handleSubmit={updateExchange}
                initialValues={exchange}
              />
            )}
          </Col>
        </Row>
      </div>
    </>
  );
};

export default ExchangeEdit;
