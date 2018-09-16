import React from 'react';

class TabButton extends React.Component{
  render(){
    return(
      <button id={this.props.id} className={this.props.selected? "chosenTabButton" : "tabButton"} style={this.props.style} onClick={this.props.clickFunction}>{this.props.tabName}</button>
    );
  };
};

export default TabButton;
