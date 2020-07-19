import React from "react";
import { configure, shallow } from "enzyme";
import { findByTestAttr } from "../test/testUtils.js";
import Adapter from "enzyme-adapter-react-16";
import About from "./About";
configure({ adapter: new Adapter() });

const setup = () => shallow(<About />);

describe("about", () => {
  it("renders about", () => {
    const wrapper = setup();
    const el = findByTestAttr(wrapper, 'about');
    expect(el.length).toBe(1);
  });
  it("renders navbar", () => {
    const wrapper = setup();
    const el = findByTestAttr(wrapper, 'navbar');
    expect(el.length).toBe(1);
  });
  it("renders background", () => {
    const wrapper = setup();
    const el = findByTestAttr(wrapper, 'background');
    expect(el.length).toBe(1);
  });
  it("renders profile-container", () => {
    const wrapper = setup();
    const el = findByTestAttr(wrapper, 'profile-container');
    expect(el.length).toBe(1);
  });
  it("renders profile-pic", () => {
    const wrapper = setup();
    const el = findByTestAttr(wrapper, 'profile-pic');
    expect(el.length).toBe(1);
  });
  it("renders about-text", () => {
    const wrapper = setup();
    const el = findByTestAttr(wrapper, 'about-text');
    expect(el.length).toBe(1);
  });
  it("renders footer", () => {
    const wrapper = setup();
    const el = findByTestAttr(wrapper, 'footer');
    expect(el.length).toBe(1);
  });
});
