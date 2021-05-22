import React from "react";
import Foo from "./component-2";
import Sinon from "sinon";
import { mount } from "enzyme";

describe("<Foo/>", () => {
  const origConsole = console.error;
  beforeEach(() => {
    console.error = () => {};
  });
  afterEach(() => {
    console.error = origConsole;
  });
  it("allows us to set props", () => {
    const wrapper = mount(<Foo bar="baz" />);
    expect(wrapper.props().bar).toEqual("baz");
    wrapper.setProps({ bar: "foo" });
    expect(wrapper.props().bar).toEqual("foo");
  });

  it("simulate click events", () => {
    const onClickButton = Sinon.spy();
    const wrapper = mount(<Foo onClick={onClickButton} />);
    wrapper.find("button").simulate("click");
    expect(onClickButton).toHaveProperty("callCount", 1);
  });
});
