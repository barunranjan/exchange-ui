import ExchangeListPage from "../../../../views/Exchange/exchangeList/ExchangeListPage";
import ExchangeListTable from "../../../../views/Exchange/exchangeList/exchangeTable/ExchangeListTable";
import React from "react";
import { findByTestAttr } from "../../../../../utils/testUtils";
import { shallow } from "enzyme";

const setUpTest = (props = {}) => shallow(<ExchangeListPage props={props} />);

describe("ExchangeListPage Render", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setUpTest({});
  });
  it("Should render Component", () => {
    const createExchangeComponent = findByTestAttr(
      wrapper,
      "test-ExchangeListPage"
    );
    expect(createExchangeComponent.length).toBe(1);
  });

  it("Should render Add Button", () => {
    const addExchangeButton = findByTestAttr(wrapper, "test-AddButton");
    expect(addExchangeButton.length).toBe(1);
  });

  it("Should render ExchangeListTable component", () => {
    const ExchangeListTableElement = wrapper.containsMatchingElement(
      <ExchangeListTable />
    );
    expect(ExchangeListTableElement).toEqual(true);
  });

  it("Should render AppLoader for loading true", () => {
    wrapper.setState({ loading: true });
    const appLoaderComponent = findByTestAttr(wrapper, "test-AppLoader");
    expect(appLoaderComponent.length).toBe(1);
  });
});

describe("ExchangeListPage Methods", () => {
    let wrapper;
    let instance;
    beforeEach(() => {
      wrapper = setUpTest({});
      instance = wrapper.instance();
    });
  
    test("has called to `fetchData` method", () => {
      jest.spyOn(instance, "fetchData");
      instance.fetchData();
      expect(instance.fetchData).toHaveBeenCalled();
    });  

    test("`fetchData` runs on App mount", () => {
        jest.spyOn(instance, "fetchData");
        // run lifecycle method
        instance.componentDidMount();      
        // check to see if mock ran
        expect(instance.fetchData).toHaveBeenCalled();
    });
});
