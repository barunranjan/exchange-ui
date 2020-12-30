import { checkProps, findByTestAttr } from "../../../../../../utils/testUtils";

import ExchangeListTable from "../../../../../views/Exchange/exchangeList/exchangeTable/ExchangeListTable";
import React from "react";
import { fetchDummyData } from "./../../../../../views/Exchange/store/exchangeCrud";
import { shallow } from "enzyme";

const setUpTest = (props = {}) => shallow(<ExchangeListTable props={props} />);

const initialState = {
  apiConfigs: fetchDummyData(1, 10),
  loading: false,
  queryParams: {
    totalSize: 10,
    sizePerPage: 10,
    page: 1,
  },
  onEditExchange() {},
  fetchData() {},
};
describe("ExchangeListTable Render", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setUpTest(initialState);
  });
  it("Should render Component", () => {
    const exchangeListTableComponent = findByTestAttr(
      wrapper,
      "test-ExchangeListTable"
    );
    expect(exchangeListTableComponent.length).toBe(1);
  });
});

describe("ExchangeListTable Check Props", () => {
  let wrapper;
  let instance;
  beforeEach(() => {
    wrapper = setUpTest(initialState);
    instance = wrapper.instance();
  });

  it("Should Not Throw a Warning", () => {
    const expectedProps = {...initialState};
    const propsError = checkProps(ExchangeListTable, expectedProps);
    expect(propsError).toBeUndefined();
  });

  //   test("has called to `handlePageChange` method", () => {
  //     jest.spyOn(instance, "handlePageChange");
  //     instance.handlePageChange();
  //     expect(instance.handlePageChange).toHaveBeenCalled();
  //   });
});
