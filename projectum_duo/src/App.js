import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import TabSection from './components/TabSection';
import TabButton from './components/TabButton';

class App extends Component {
  tabs = [
    <TabButton tabName="Poop"></TabButton>,
    <TabButton tabName="Schnoop"></TabButton>
  ]

  render() {
    return (
      <div className="App">
        <TabSection tabs={this.tabs}></TabSection>
      </div>
    );
  }
}

export default App;
