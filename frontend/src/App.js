import React, { Component } from "react";
import Counters from "./components/counters";
import "./App.css";
import logo from "./ZRoom_Logo.png";

//import { render } from "@testing-library/react";

class App extends Component {
  state = {
    counters: [
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

  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    const requestURL = "http://localhost:5000/lamp/" + counters[index].id + "/activate"
    fetch(requestURL)
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  handleDelete = (counterId) => {
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters });
  };

  render() {
    console.log("App - Rendered");
    return (
      <React.Fragment>
        <main className="container">
          <img src={logo} alt="ZRoom Logo" class="rounded mx-auto d-block m-5" />
          <Counters
            counters={this.state.counters}
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
