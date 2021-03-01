import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.handleClick2 = this.handleClick2.bind(this);
    this.state = {
      numberClicks: 0
    }
    // só seta state no constructor
  }

  handleClick2() {
    this.setState((estadoAnterior, _props) => ({
      numberClicks: estadoAnterior.numberClicks + 1
    }));
  }

  render() {
    console.log(this);
    return (
      <button onClick={this.handleClick2}>{this.state.numberClicks}</button>
    );
  }
}

export default App;
