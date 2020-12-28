import React, { useEffect, useState } from "react";
import { Col, Row } from "reactstrap";
// import { getExchangeById } from "../store/exchangeCrud";
import ExchangeForm from "../exchangeCreate/ExchangeForm";

const ExchangeEdit = (props) => {
  const [exchange, setExchange] = useState(null);
  const [loading, setLoading] = useState(false);
  const [exchangeId] = useState(props.match && props.match.params.id);

  useEffect(() => {
    setLoading(true);
    // getExchangeById(exchangeId).then((response) => {
    //   setExchange(response.data);
    setExchange({
      id: 1,
      name: "dummyName",
      description: "dummy descprition",
      inputType: ["plaintext", "uppercase"],
      outputType: ["reverseString", "plaintext", "uppercase"],
    });
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
  return (
    <>
      <div>
        <Row>
          <Col sm={12}>
            {exchange && (
              <ExchangeForm handleSubmit={updateExchange} exchange={exchange} />
            )}
          </Col>
        </Row>
      </div>
    </>
  );
};

export default ExchangeEdit;
