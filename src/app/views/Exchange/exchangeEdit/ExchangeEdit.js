import { Col, Row } from "reactstrap";
import React, { useEffect, useState } from "react";

import ExchangeForm from "../exchangeCreate/ExchangeForm";

// import { getExchangeById } from "../store/exchangeCrud";

const getDummyData = () => {
  let inputTypes = ["plaintext", "uppercase"];
  let outputTypes = ["reverseString", "plaintext", "uppercase"];
  return {
    id: 1,
    name: "dummyName",
    description: "dummy descprition",
    inputTypes: inputTypes.map((ex) => ({
      ...ex,
      paramName: ex,
      paramType: {
        label: ex,
        value: ex,
      },
    })),
    outputTypes: outputTypes.map((ex) => ({
      ...ex,
      paramName: ex,
      paramType: {
        label: ex,
        value: ex,
      },
    })),
  };
};

const ExchangeEdit = (props) => {
  const [exchange, setExchange] = useState(null);
  const [loading, setLoading] = useState(false);
  const [exchangeId] = useState(props.match && props.match.params.id);

  useEffect(() => {
    setLoading(true);
    // getExchangeById(exchangeId).then((response) => {
    //   setExchange(response.data);

    setExchange(getDummyData());

    setLoading(false);
  }, [exchangeId]);

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
      <div>
        <div className="row mb-1">
          <div className="col-lg-12 text-right">
            <button color="danger" className="btn btn-primary" onClick={goBack}>
              <i className="ti ti-arrow-left"></i> Back
            </button>
          </div>
        </div>
        <Row>
          <Col sm={12}>
            {exchange && (
              <ExchangeForm
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
