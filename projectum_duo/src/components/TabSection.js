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

  handleAddTab() {
    this.tabTexts.push(this.tabTexts.length+1);
    this.forceUpdate();
  }

  createTabs () {
    const tabs = []
    const selectedTab = 'selectedTab' in this.props ? this.props.selectedTab : this.state.selectedTab;
    for(const textNum in this.tabTexts) {
        const thisId = this.tabTexts[textNum];
        tabs.push(
          <TabButton
            id={thisId}
            key={thisId}
            tabName={"Tab " + this.tabTexts[textNum]}
            selected={selectedTab === thisId}
            clickFunction={this.props.handleClick}
          />
        );
    }
    tabs.push(<TabButton key={this.tabTexts.length+1} tabName="+" id="addTab" clickFunction={this.handleAddTab.bind(this)}/>)

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
