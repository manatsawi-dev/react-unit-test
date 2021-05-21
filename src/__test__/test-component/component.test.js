import React from "react";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";
import Sinon from "sinon";
import View from "./component";

describe("<View/>", () => {
  it("renders View correctly", () => {
    const tree = renderer.create(<View />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders View append child correctly", () => {
    const tree = renderer
      .create(
        <View>
          <p>Child</p>
        </View>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders <View/> empty child correctly", () => {
    const wrapper = shallow(<View />);
    expect(wrapper.find("p").length).toEqual(0);
  });

  it("renders <View/> call function onClick correctly", () => {
    const onClickView = Sinon.spy();
    const wrapper = shallow(<View onClick={onClickView} />);
    wrapper.find("div").simulate("click");
    expect(onClickView).toHaveProperty("callCount", 1);
  });

  it("renders <View/> append child call function onClick at child correctly", () => {
    const onClickButton = Sinon.spy();
    const wrapper = shallow(
      <View>
        <button onClick={onClickButton}>Button</button>)
      </View>
    );
    wrapper.find("button").simulate("click");
    expect(onClickButton).toHaveProperty("callCount", 1);
  });
});
