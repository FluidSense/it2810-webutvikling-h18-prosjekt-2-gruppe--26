import React, { Component } from 'react';
import './App.css';
import Gallery from './components/Gallery.jsx'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Gallery />
        </header>
      </div>
    );
  }
}

export default App;
