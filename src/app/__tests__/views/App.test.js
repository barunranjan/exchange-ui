import App from "./../../App";
import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr } from '../../../utils/testUtils'

const setup = () => shallow(<App />)

describe("App ", () => {
  test("render without error", () => {
    const wrapper = setup()
    const appComponent = findByTestAttr(wrapper,'test-app')
    expect(appComponent.length).toBe(1)
  });
  test("should suspend rendering while they load data from a cache", () => {
    const wrapper = setup()
    const appComponent =findByTestAttr(wrapper,'test-cache-loading')
    expect(appComponent.length).toBe(1)
  });
  test("should load data from routes", () => {
    const wrapper = setup()
    const appComponent = findByTestAttr(wrapper,'test-routes')
    expect(appComponent.length).toBe(1)
  });
});
