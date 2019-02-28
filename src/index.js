import React from "react";
import PropTypes from "prop-types";

import "./accordion.css";

class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false
    };
    this.toggleOpen = this.toggleOpen.bind(this);
  }
  toggleOpen() {
    this.setState({
      active: this.state.active ? false : true
    });
  }
  render() {
    return (
      <div className="accordion">
        <span className="title" onClick={this.toggleOpen}>
          {this.props.item.header}
        </span>
        <span className={`content ${this.state.active ? "open" : "hidden"}`}>
          {this.props.item.content}
        </span>
      </div>
    );
  }
}

Accordion.propTypes = {
  item: PropTypes.object
};

export default Accordion;
