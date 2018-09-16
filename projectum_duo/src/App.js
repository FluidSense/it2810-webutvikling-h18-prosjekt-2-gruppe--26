import React, { Component } from 'react';
import './App.css';
import Gallery from './components/Gallery.jsx'

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
        <header className="App-header">
          <TabSection tabs={this.tabs}></TabSection>
          <Gallery />
        </header>
      </div>
    );
  }
}

export default App;
