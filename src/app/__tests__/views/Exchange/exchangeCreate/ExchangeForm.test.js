import { shallow } from "enzyme";
import React from "react";
import ExchangeForm from "../../../../views/Exchange/exchangeCreate/ExchangeForm";
import { findByTestAttr } from '../../../../../utils/testUtils'


describe("exchange create page", () => {
    test("render without error", () => {
        const wrapper = shallow(<ExchangeForm/>)
        const createExchangeFormComponent = findByTestAttr(wrapper, 'test-exchange-form')
        expect(createExchangeFormComponent.length).toBe(1)
    });
    test("render main form", () => {
        const wrapper =shallow(<ExchangeForm/>)
        const formikComponent = findByTestAttr(wrapper, 'test-exchange-form').dive()
        const formComponet = findByTestAttr(formikComponent, 'test-form')
        expect(formComponet.length).toBe(1)
  
    });
    test("render main form", () => {
        const wrapper =shallow(<ExchangeForm/>)
        const formikComponent = findByTestAttr(wrapper, 'test-exchange-form').dive()
        const nameComponent = findByTestAttr(formikComponent, 'test-name')
        expect(nameComponent.length).toBe(1)
        

    });
    test("render main form", () => {
        const wrapper =shallow(<ExchangeForm/>)
        const formikComponent = findByTestAttr(wrapper, 'test-exchange-form').dive()
        const nameComponent = findByTestAttr(formikComponent, 'test-description')
        expect(nameComponent.length).toBe(1)
        

    });

})