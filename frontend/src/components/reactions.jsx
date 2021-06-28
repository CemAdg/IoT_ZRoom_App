import React, { Component } from "react";
import Reaction from "./reaction";

class Reactions extends Component {
  render() {
    console.log("Reactions - Rendered");
    const { onReset, reactions, onDelete, onClick } = this.props;
    return (
      <div>
        <button onClick={onReset} className="btn btn-primary btn-sm m-2">
          Reset
        </button>
        {reactions.map((reaction) => (
          <Reaction
            key={reaction.id}
            onDelete={onDelete}
            onClick={onClick}
            reaction={reaction}
          />
        ))}
      </div>
    );
  }
}

export default Reactions;
<div></div>;
