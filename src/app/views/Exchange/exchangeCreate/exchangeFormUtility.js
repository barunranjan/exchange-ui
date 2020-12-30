export const exchangeValidate = (values) => {
  const errors = {};

  if (!values.name) {
    errors.name = "Name is required";
  }

  if (!values.description) {
    errors.description = "Description is required";
  }

  // if (values.inputTypes && values.inputTypes.length === 0) {
  //   errors.inputTypes = "Select atleast one input type";
  // }
  // if (values.outputTypes && values.outputTypes.length === 0) {
  //   errors.outputTypes = "Select atleast one output type";
  // }
  return errors;
};

export const submitValues = (values, handleSubmit) => {
  if (values) {
    values.inputTypes = values.inputTypes.map((type) => ({
      ...type,
      paramType: type.paramType.value,
    }));
    values.outputTypes = values.outputTypes.map((type) => ({
      ...type,
      paramType: type.paramType.value,
    }));

    return values;
  }
};

export const getDummyData = () => {
  let inputTypes = ["plaintext", "uppercase"];
  let outputTypes = ["reverseString", "plaintext", "uppercase"];
  return {
    id: 1,
    name: "dummyName",
    description: "dummy descprition",
    inputTypes: inputTypes.map((ex) => ({
      // ...ex,
      paramName: ex,
      paramType: {
        label: ex,
        value: ex,
      },
    })),
    outputTypes: outputTypes.map((ex) => ({
      // ...ex,
      paramName: ex,
      paramType: {
        label: ex,
        value: ex,
      },
    })),
  };
};
