import React, { Component } from "react";
import NavBar from "./components/navbar";
import Counters from "./components/counters";
import "./App.css";
import Counter from "./components/counter";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 3 },
      { id: 2, value: 2 },
      { id: 3, value: 1 },
      { id: 4, value: 4 }
    ]
  };

  constructor() {
    super();
    console.log("App constructor");
  }

  componentDidMount() {
    //perfect place to make ajax calls to the server
    console.log("App mounted!");
  }

  handleDelete = counterId => {
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  handleCreate = () => {
    var curLength = this.state.counters.length;

    this.setState({
      counters: [...this.state.counters, { id: curLength + 2, value: 0 }]
    });
  };

  render() {
    console.log("App rendered");
    return (
      <React.Fragment>
        <NavBar
          totalCounters={this.state.counters.filter(c => c.value > 0).length}
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
            onCreate={this.handleCreate}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
