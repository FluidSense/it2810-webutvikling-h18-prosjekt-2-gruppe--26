import React, { Component } from 'react';
import './App.css';
import Gallery from './components/Gallery.jsx';
import TabSection from './components/TabSection';
import MediaPickSideBar from './components/mediaPicker/MediaPickSidebar';
import { cloneObject } from './utils';

export const titleTranslations = {Image:'img',Text:'txt',Sound:'sound'};


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab:1,
      mediaSelections: {},
    }
  }


  handleClick(e) {
    let id = parseInt(e.target.id,10);
    this.setState({
      selectedTab: id,
    });
  }

  // Tracks all selections across tabs to give tabs a memory of what you selected when changing between tabs.
  trackAllActiveSelections = (title, id, int) => {
    const { mediaSelections } = this.state
    const newMediaSelections = cloneObject(mediaSelections);
    const activeTab = this.state.selectedTab;
    activeTab in newMediaSelections ? newMediaSelections[activeTab][titleTranslations[title]] = [id, int] : newMediaSelections[activeTab] = {[titleTranslations[title]]:[id, int]};
    this.setState({mediaSelections:newMediaSelections});
  }


  render() {
    return (
      <div className="App">
          <TabSection selectedTab={this.state.selectedTab} handleClick={this.handleClick.bind(this)} />
          <div className="wrapper2"><MediaPickSideBar reportActiveId={this.trackAllActiveSelections} tabCache={this.state.mediaSelections} activeTab={this.state.selectedTab}/></div>
          {/* Pass current tab and selected items to gallery for rendering */}
          <Gallery tab={this.state.selectedTab} selectedItems={this.state.mediaSelections[this.state.selectedTab]}/>
      </div>
    );
  }
}

export default App;
