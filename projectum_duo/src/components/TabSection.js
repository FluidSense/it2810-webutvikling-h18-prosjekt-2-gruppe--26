import React from 'react';
import TabButton from './TabButton';

const style = {
  backgroundColor: "#e3e3e3",
  overflow: "hidden",
  border: "1px",
  borderColor: "#a3a3a3",
};

class TabSection extends React.Component{
  render(){
    return(
      <div style={style}>
        {this.props.tabs}
        <TabButton tabName="+"></TabButton>
      </div>
    );
  };
};

export default TabSection;
