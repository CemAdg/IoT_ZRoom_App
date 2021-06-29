import React, { Component, useState } from "react";
import Reactions from "./components/reactions";
import "./App.css";
import logo from "./ZRoom_Logo.png";

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

  componentDidUpdate(prevProps, prevState) {
    this.sleep(5000).then(r => {
      for (var i = 0; i < this.state.reactions.length; i++) {
        if (this.state.reactions[i].value == "Befehl wird gesendet ...") {
          this.setState({
            reactions: [
              { id: 1, value: "Frage ?" },
              { id: 2, value: "Daumen Hoch" },
              { id: 3, value: "Problem !" },
            ],
          })
        }
      }
    })
  }

  handleClick = (reaction) => {
    const reactions = [...this.state.reactions];
    const index = reactions.indexOf(reaction);
    reactions[index] = { ...reaction };

    reactions[index].value = "Befehl wird gesendet ...";
    for (var i = 0; i < reactions.length; i++) {
      reactions[i].value = index === i ? "Befehl wird gesendet ..." : "Warten ...";
    }

    const requestURL = "http://0.0.0.0:5000/lamp/" + reactions[index].id + "/activate"
    fetch(requestURL)
    this.setState({ reactions });
  };

  render() {
    console.log("App - Rendered");
    return (
      <React.Fragment>
        <main className="container">
          <img src={logo} alt="ZRoom Logo" className="rounded mx-auto d-block m-5" />
          <Reactions
            reactions={this.state.reactions}
            onClick={this.handleClick}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
