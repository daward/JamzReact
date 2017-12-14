import React, { Component } from 'react';
import './App.css';
import Welcome from './components/welcome'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Welcome message='Welcome to Jamz'/>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
