import React, { Component } from 'react';
import Soundplayer from './Soundplayer.jsx';


const centeredBox = {
  margin: '20px',
  border: '5px solid black',
  width: '500px',
};

class Showcasebox extends Component {
  render() {
    if(this.props.img) {
      return (<div className="usedImage" style={centeredBox} className="showcaseBox" dangerouslySetInnerHTML={{__html:this.props.img}}/>);
    }
    return (
      <div style={centeredBox} className="showcaseBox">
        <img className="mainImage" src="/horse.png" alt="horse"/>
      </div>
    );
  }
}

export default Showcasebox;
