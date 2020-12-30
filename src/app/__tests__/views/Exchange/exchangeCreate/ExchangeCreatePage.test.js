import { shallow } from "enzyme";
import React from "react";
import ExchangeCreatePage from "../../../../views/Exchange/exchangeCreate/ExchangeCreatePage";
import { findByTestAttr } from '../../../../../utils/testUtils'

const setup = (props = {}) => shallow(<ExchangeCreatePage props={props} />)

describe("exchange create page", () => {
    test("render without error", () => {
        const wrapper = setup()
        const createExchangeComponent = findByTestAttr(wrapper, 'test-exchangeCreatePage')
        expect(createExchangeComponent.length).toBe(1)
    });
    test("render back button without error ", () => {
        const wrapper = setup()
        const buttonComponent = findByTestAttr(wrapper, 'test-button')
        expect(buttonComponent.length).toBe(1)
    });
    test("render button text", () => {
        const wrapper = setup()
        const buttonComponent = findByTestAttr(wrapper, 'test-button').text()
        expect(buttonComponent).toBe(" Back")
    });
    test("mocking goBack button", () => {
        const mockGoBack = jest.fn();   
        const initialProps = {
            history: {
                goBack: mockGoBack
            }
        };
        const wrapper = shallow(<ExchangeCreatePage  {...initialProps}/>)
        const button = findByTestAttr(wrapper, 'test-button')
        button.simulate('click')
        expect(mockGoBack).toHaveBeenCalled();
    });
    test("render exchange form", () => {
        const wrapper = setup()
        const buttonComponent = findByTestAttr(wrapper, 'test-form')
        expect(buttonComponent.length).toBe(1)
    });  
 
})
