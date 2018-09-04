import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Tab from './components/Tab';
import TabButton from './components/TabButton';

class App extends Component {
  tabs = [
    <TabButton tabName="Poop"></TabButton>,
    <TabButton tabName="Schnoop"></TabButton>
  ]

  render() {
    return (
      <div className="App">
        <Tab tabs={this.tabs}></Tab>
      </div>
    );
  }
}

export default App;
