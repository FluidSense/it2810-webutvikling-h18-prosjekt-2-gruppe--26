import React from 'react';

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
      </div>
    );
  };
};

export default TabSection;
