import React, { Component } from "react";

class Reaction extends Component {
  getBadgeClasses() {
    let classes = "badge m-2 bg-";
    classes += this.props.reaction.value === 0 ? "warning text-dark" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.reaction;
    return value === 0 ? "Zero" : value;
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("prevProps", prevProps);
    console.log("prevState", prevState);
    if (prevProps.reaction.value !== this.props.reaction.value) {
      // Ajax call and get new data from the server
    }
  }

  componentWillUnmount() {
    console.log("Reaction - Unmount");
  }
  render() {
    console.log("Reaction - Rendered");
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.reaction)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.reaction.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }
}

export default Reaction;
