import React from "react";
import { shallow } from "enzyme";
import Workshop from "./Workshop";

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
});
