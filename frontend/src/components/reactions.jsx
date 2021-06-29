import React, { Component } from "react";
import Reaction from "./reaction";

class Reactions extends Component {
  render() {
    console.log("Reactions - Rendered");
    const { reactions, onClick } = this.props;
    return (
      <div>
        {reactions.map((reaction) => (
          <Reaction
            key={reaction.id}
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
