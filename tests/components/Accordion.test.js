// configure an adaptor
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

import React from "react";
import { shallow } from "enzyme";

// component to test
import Accordion from "../../src/index.js";

describe("Accordion", () => {
  let props;
  let wrapper;
  let spyOnToggleOpen;

  beforeEach(() => {
    props = {
      item: {
        header: "test accordion",
        content: "some content"
      }
    };
    spyOnToggleOpen = jest.spyOn(Accordion.prototype, "toggleOpen");
    wrapper = shallow(<Accordion {...props} />);
  });
  it("should render a <Accordion /> component", () => {
    // test component wrapper
    expect(wrapper.type()).toEqual("div");
    expect(wrapper.hasClass("accordion")).toBe(true);

    expect(wrapper.find(".title").text()).toEqual(props.item.header);
    expect(wrapper.find(".title").get(0).props.children).toEqual(
      "test accordion"
    );

    expect(wrapper.find(".content").text()).toEqual(props.item.content);
    expect(wrapper.find(".content").get(0).props.children).toEqual(
      "some content"
    );
  });

  it("should open and close the accordion when the header is clicked", () => {
    const button = wrapper.find(".title");

    button.simulate("click");
    expect(spyOnToggleOpen).toHaveBeenCalled();
    expect(spyOnToggleOpen).toHaveBeenCalledTimes(1);
    expect(wrapper.find(".content").hasClass("open")).toBe(true);
    expect(wrapper.state().active).toEqual(true);

    button.simulate("click");
    expect(wrapper.find(".content").hasClass("open")).toBe(false);
    expect(spyOnToggleOpen).toHaveBeenCalledTimes(2);
    expect(wrapper.state().active).toEqual(false);
  });

  it("should contain the correct state", () => {
    // console.log(wrapper.props());
    // console.log(wrapper.instance().props);
    expect(wrapper.state().active).toEqual(false);
  });
});
