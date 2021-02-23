import React from 'react';
import './App.css';

function handleClick() {
  console.log('Clicou no botão!');
}

function handleClick2() {
  console.log('Clicou no botão dois!');
}

class App extends React.Component {

  handleClick() {
    console.log('Cliquei no botão!');
  }
  render() {
    return <button onClick={this.handleClick}>My Button</button>;
  }
}

export default App;
