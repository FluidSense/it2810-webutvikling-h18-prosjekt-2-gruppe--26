import React, { Component } from 'react';

const centeredBox = {
  margin: '20px',
  border: '5px solid black',
};

class Showcasebox extends Component {
  render() {
    return (
      <div style={centeredBox} className="showcaseBox">
        <img className="mainImage" src="/horse.png" alt="horse"/>
      </div>
    );
  }
}

export default Showcasebox;
