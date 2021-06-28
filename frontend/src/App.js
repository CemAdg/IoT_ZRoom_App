import React, { Component } from "react";
import Reactions from "./components/reactions";
import "./App.css";
import logo from "./ZRoom_Logo.png";

//import { render } from "@testing-library/react";

class App extends Component {
  state = {
    reactions: [
      { id: 1, value: "Frage?" },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
    ],
  };
  constructor() {
    super();
    console.log("App - Constructor");
  }

  componentDidMount() {
    console.log("App - Mounted");
  }

  handleIncrement = (reaction) => {
    const reactions = [...this.state.reactions];
    const index = reactions.indexOf(reaction);
    reactions[index] = { ...reaction };
    reactions[index].value++;
    const requestURL = "http://localhost:5000/lamp/" + reactions[index].id + "/activate"
    alert(requestURL)
    //fetch(requestURL)
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
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
