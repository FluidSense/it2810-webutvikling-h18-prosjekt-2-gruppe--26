import React, { Component } from 'react';
import './App.css';
import Gallery from './components/Gallery.jsx';
import TabSection from './components/TabSection';
import TabButton from './components/TabButton';
import MediaPickSideBar from './components/mediaPicker/MediaPickSidebar';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab:1,
      mediaSelections: {},
    }
  }
  tabs = [
    <TabButton tabName="Poop"></TabButton>,
    <TabButton tabName="Schnoop"></TabButton>
  ]

  handleClick(e) {
    let id = parseInt(e.target.id,10);
    this.setState({
      selectedTab: id,
    });
  }

  trackAllActiveSelections = (title, id) => {
    const newMediaSelections = Object.assign(this.state.mediaSelections);
    const activeTab = this.state.selectedTab;
    activeTab in newMediaSelections ? newMediaSelections[activeTab][title] = id : newMediaSelections[activeTab] = {[title]:id};
    this.setState({mediaSelections:newMediaSelections});
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <TabSection selectedTab={this.state.selectedTab} tabs={this.tabs} handleClick={this.handleClick.bind(this)} />
          <MediaPickSideBar reportActiveId={this.trackAllActiveSelections} />
          <Gallery tab={this.state.selectedTab} selectedItems={{img:'img1',txt:'txt1'}}/>
        </header>
      </div>
    );
  }
}

export default App;
