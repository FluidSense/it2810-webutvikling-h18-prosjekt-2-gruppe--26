import React from 'react';
import TabButton from './TabButton';

const style = {
  backgroundColor: "#e3e3e3",
  overflow: "hidden",
  border: "1px",
  borderColor: "#a3a3a3",
};

class TabSection extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      selectedTab: null,
    }
  }

  tabTexts = [1];

  handleClick(e) {
    let id = parseInt(e.target.id,10);
    this.setState({
      selectedTab: id,
    });
  }

  handleAddTab() {
    this.tabTexts.push(this.tabTexts.length+1);
    this.forceUpdate();
  }

  createTabs () {
    let tabs = []
    for(const textNum in this.tabTexts) {
        let thisId = this.tabTexts[textNum];
        tabs.push(
          <TabButton
            id={thisId}
            key={thisId}
            tabName={"Tab " + this.tabTexts[textNum]}
            selected={this.state.selectedTab === thisId}
            clickFunction={this.handleClick.bind(this)}
          />
        );
    }
    tabs.push(<TabButton tabName="+" id="addTab" clickFunction={this.handleAddTab.bind(this)}/>)

    return tabs;
  }

  render(){
    return(
      <div style={style}>
        {this.createTabs()}
      </div>
    );
  };
};

export default TabSection;
