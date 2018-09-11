import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ApiCall from './ApiCall.js';

import TabSection from './components/TabSection';
import TabButton from './components/TabButton';

class App extends Component {



  render() {
      return (
          <div className="App">
            <TabSection tabs={this.tabs} />
            <ApiCall apiUrl="poems.json"/>
          </div>
      );
    }
}

export default App;
