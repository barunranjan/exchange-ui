export const exchangeValidate = (values) => {
  const errors = {};

  if (!values.apiDefinitionName) {
    errors.apiDefinitionName = "Name is required";
  }

  if (!values.apiDefinitionDescription) {
    errors.apiDefinitionDescription = "Description is required";
  }

  if (values.inputEventTypes && values.inputEventTypes.length === 0) {
    errors.inputEventTypes = "Select atleast one input type";
  }
  
  if (values.outputEventTypes && values.outputEventTypes.length === 0) {
    errors.outputEventTypes = "Select atleast one output type";
  }
  return errors;
};

export const submitValues = (values, handleSubmit) => {
  if (values) {
    values.inputEventTypes = values.inputEventTypes.map((type) => ({
      ...type,
      eventType: type.eventType.value,
    }));
    values.outputEventTypes = values.outputEventTypes.map((type) => ({
      ...type,
      eventType: type.eventType.value,
    }));

    return values;
  }
};

export const getDummyData = () => {
  return {
    id: 103,
    apiDefinitionName: "My API Name",
    apiDefinitionDescription: "Some Description",
    inputEventTypes: [
      {
        eventName: "my_param",
        eventType: "event-type-1",
      },
    ],
    outputEventTypes: [
      {
        eventName: "my_resp-1",
        eventType: "event-type-2",
      },
    ],
  };
};
