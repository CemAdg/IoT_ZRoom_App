import React, { Component, useState } from "react";
import Reactions from "./components/reactions";
import "./App.css";
import logo from "./ZRoom_Logo.png";

//import { render } from "@testing-library/react";

class App extends Component {
  state = {
    reactions: [
      { id: 1, value: "Frage ?" },
      { id: 2, value: "Daumen Hoch" },
      { id: 3, value: "Problem !" },
    ],
  };

  constructor() {
    super();
    console.log("App - Constructor");
  }

  componentDidMount() {
    console.log("App - Mounted");
  }

  sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
  }

  componentDidUpdate(previousProps, previousState) {
    this.sleep(5000).then(r => {
      if (previousState.reactions !== this.state.reactions) {
        this.state.reactions = previousState.reactions
        this.setState(this.state.reactions);
      }
    })
  }

  handleClick = (reaction) => {
    const reactions = [...this.state.reactions];
    const index = reactions.indexOf(reaction);
    reactions[index] = { ...reaction };

    reactions[index].value = "Befehl wird gesendet ...";
    // for (var i = 0; i < reactions.length; i++) {
    //   reactions[i].value = index === i ? "Befehl wird gesendet ..." : "Warten ...";
    // }

    const requestURL = "http://localhost:5000/lamp/" + reactions[index].id + "/activate"
    //alert(requestURL)
    fetch(requestURL)
    this.setState({ reactions });
  };

  handleReset = () => {
    const reactions = this.state.reactions.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ reactions });
  };

  handleDelete = (reactionId) => {
    const reactions = this.state.reactions.filter((c) => c.id !== reactionId);
    this.setState({ reactions });
  };

  render() {
    console.log("App - Rendered");
    return (
      <React.Fragment>
        <main className="container">
          <img src={logo} alt="ZRoom Logo" class="rounded mx-auto d-block m-5" />
          <Reactions
            reactions={this.state.reactions}
            onReset={this.handleReset}
            onClick={this.handleClick}
            onDelete={this.handleDelete}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
