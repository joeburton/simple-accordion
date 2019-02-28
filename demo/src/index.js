import React from "react";
import { render } from "react-dom";

// pull in the published component
import Accordion from "simple-accordion";

class Wrapper extends React.Component {
  render() {
    const item = {
      header: "Simple Accordion Header",
      content:
        "Simple Accordion Content -- Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    };
    return (
      <section className="main-container">
        <Accordion item={item} />
      </section>
    );
  }
}

render(<Wrapper />, document.querySelector("#root"));
