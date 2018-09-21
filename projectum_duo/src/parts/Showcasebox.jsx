import React, { Component } from 'react';

const centeredBox = {
  margin: '20px',
  marginRight: '70px',
  width: '200px',
};

class Showcasebox extends Component {
  render() {
    if(this.props.img) {
      return (<div style={centeredBox} className="showcaseBox" dangerouslySetInnerHTML={{__html:this.props.img}}/>);
    }
    return (
      <div style={centeredBox} className="showcaseBox"></div>
    );
  }
}

export default Showcasebox;
