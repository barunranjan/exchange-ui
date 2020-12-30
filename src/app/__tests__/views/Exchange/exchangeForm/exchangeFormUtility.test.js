import {
  exchangeValidate,
  getDummyData,
  submitValues,
} from "../../../../views/Exchange/exchangeForm/exchangeFormUtility";

describe("ender without error", () => {
  test("throw error when empty value is submited", () => {
    expect(exchangeValidate({})).toEqual({
      description: "Description is required",
      name: "Name is required",
    });
  });
  test("throw error when description is empty", () => {
    expect(exchangeValidate({ name: "exchange" })).toEqual({
      description: "Description is required",
    });
  });
  test("throw error when name is empty", () => {
    expect(exchangeValidate({ description: "dummy desc" })).toEqual({
      name: "Name is required",
    });
  });
  test("throw no error when all field is provided", () => {
    expect(
      exchangeValidate({ name: "exchange", description: "dummy desc" })
    ).toEqual({});
  });
});

test('paramType should take only "value" from label and value', () => {
  const values = {
    name: "dummyName",
    description: "dummy descp",
    inputTypes: [
      {
        paramName: "ss",
        paramType: { label: "inputParamLabel", value: "inputParamValue" },
      },
    ],
    outputTypes: [
      {
        paramName: "ss",
        paramType: { label: "outputParamLabel", value: "outputParamValue" },
      },
    ],
  };
  const upDatedValue = {
    description: "dummy descp",
    inputTypes: [{ paramName: "ss", paramType: "inputParamValue" }],
    name: "dummyName",
    outputTypes: [{ paramName: "ss", paramType: "outputParamValue" }],
  };
  expect(submitValues(values)).toEqual(upDatedValue);
});

test("testing edit field with dummyData", () => {
  const dummyData = {
    description: "dummy descprition",
    id: 1,
    inputTypes: [
      {
        paramName: "plaintext",
        paramType: {
          label: "plaintext",
          value: "plaintext",
        },
      },
      {
        paramName: "uppercase",
        paramType: {
          label: "uppercase",
          value: "uppercase",
        },
      },
    ],
    name: "dummyName",
    outputTypes: [
      {
        paramName: "reverseString",
        paramType: {
          label: "reverseString",
          value: "reverseString",
        },
      },
      {
        paramName: "plaintext",
        paramType: {
          label: "plaintext",
          value: "plaintext",
        },
      },
      {
        paramName: "uppercase",
        paramType: {
          label: "uppercase",
          value: "uppercase",
        },
      },
    ],
  };
  expect(getDummyData()).toEqual(dummyData);
});
