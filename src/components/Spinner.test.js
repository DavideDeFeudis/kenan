import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr, checkProps } from "../test/testUtils.js";
import Spinner from "./Spinner";

const defaultProps = { loading: false, fullScreen: false };

/**
 * Factory function to create a ShallowWrapper for the Spinner component.
 * @function setup
 * @param {object} props - Component props specific to this setup.
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<Spinner {...setupProps} />);
};

describe("Spinner", () => {
  it("renders spinner-wrapper if loading === true", () => {
    const wrapper = setup({ loading: true });
    const el = findByTestAttr(wrapper, "spinner-wrapper");
    expect(el.length).toBe(1);
  });
  it("renders spinner-img if loading === true", () => {
    const wrapper = setup({ loading: true });
    const el = findByTestAttr(wrapper, "spinner-img");
    expect(el.length).toBe(1);
  });
  it("does not render spinner-wrapper if loading === false", () => {
    const wrapper = setup({ loading: false });
    const el = findByTestAttr(wrapper, "spinner-wrapper");
    expect(el.length).toBe(0);
  });
  test("does not throw warning with expected props", () => {
    checkProps(Spinner, defaultProps);
  });
});
