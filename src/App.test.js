import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import App from "./App";
configure({ adapter: new Adapter() });

describe("<App />", () => {
  it("renders without errors", () => {
    const wrapper = shallow(<App />);
    const appComponent = wrapper.find('[data-test="app"]');
    expect(appComponent.length).toBe(1)
  });
});
