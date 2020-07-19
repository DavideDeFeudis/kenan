import React from "react";
import { shallow } from "enzyme";
import Workshop from "./Workshop";
// import Button from "./Button";

const workshop = {
  _id: "81b0b3681cf6",
  title: "Flow Acrobatics - Dresden",
  address: "Bautzner Straße 107",
  info: "For all levels",
  startDate: "2020-06-20",
  endDate: "2020-06-21",
  priceLabel1: "One day: €",
  priceLabel2: "Both days: €",
  price1: 60,
  price2: 95,
};

describe("<Workshop />", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Workshop workshop />);
  });

  it("should render 2 <Button /> if admin = true", () => {
    // console.log(wrapper.debug());
    // wrapper.setProps({ admin: true });
    // expect(wrapper.find('[data-test="admin-button"]')).toHaveLength(2);
  });

  // it("should render 1 <Button /> if user = true", () => {
  //   wrapper.setProps({ user: true });
  //   expect(wrapper.find('[data-test="user-button"]')).toHaveLength(1);
  // });

  // it("should render 0 <Button /> if preview = true", () => {
  //   wrapper.setProps({ preview: true });
  //   expect(wrapper.find('[type="button"]')).toHaveLength(0);
  // });
});
