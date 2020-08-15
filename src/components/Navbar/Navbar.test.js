import React from "react";
import { shallow } from "enzyme";
import Navbar from "./Navbar";

describe("<Navbar />", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Navbar />);
    console.log(wrapper.debug());
  });

  it("should contain 1 <Link /> if admin = true", () => {
    // wrapper.setProps({ admin: true });
    // expect(wrapper.contains('[data-test="admin-nav-link"]')).toEqual(true);
  });

  // it("should contain 0 <Link /> if admin = false", () => {
  //   wrapper.setProps({ admin: false });
  //   expect(wrapper.contains('[data-test="admin-nav-link"]')).toEqual(false);
  // });
});
