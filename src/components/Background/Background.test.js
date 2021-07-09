import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr, checkProps } from "../test/testUtils.js";
import Background from "./Background";

const defaultProps = { large: "../images/home_full_1920.jpg" };

/**
 * Factory function to create a ShallowWrapper for the Background component.
 * @function setup
 * @param {object} props - Component props specific to this setup.
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
    const setupProps = { ...defaultProps, ...props };
    return shallow(<Background {...setupProps} />);
};

describe("background", () => {
    it("renders image-placeholder", () => {
        const wrapper = setup();
        const el = findByTestAttr(wrapper, "image-placeholder");
        expect(el.length).toBe(1);
    });
    it("renders bg-image", () => {
        const wrapper = setup();
        const el = findByTestAttr(wrapper, "bg-image");
        expect(el.length).toBe(1);
    });
    test("does not throw warning with expected props", () => {
        checkProps(Background, defaultProps);
    });
});
