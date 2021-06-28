import React, { Component } from "react";

class Reaction extends Component {
  getBadgeClasses() {
    let classes = "badge mx-auto d-block m-5 bg-";
    classes += this.props.reaction.value === "Frage ?" ? "primary" : "";
    classes += this.props.reaction.value === "Daumen Hoch" ? "success" : "";
    classes += this.props.reaction.value === "Problem !" ? "danger" : "";
    classes += this.props.reaction.value === "Befehl wird gesendet ..." ? "info" : "";
    classes += this.props.reaction.value === "Warten ..." ? "secondary" : "";
    return classes;
  }

  getValue() {
    const { value } = this.props.reaction;
    return value
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
        {/* <span className={this.getBadgeClasses()}>{this.getValue()}</span> */}
        <button
          onClick={() => this.props.onClick(this.props.reaction)}
          className={this.getBadgeClasses()}
        >
          {this.getValue()}
        </button>
        {/* <button
          onClick={() => this.props.onDelete(this.props.reaction.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button> */}
      </div>
    );
  }
}

export default Reaction;
