import React from 'react';

class TabButton extends React.Component{
  render(){
    return(
      <button class="tabButton" style={this.props.style}>{this.props.tabName}</button>
    );
  };
};

export default TabButton;
