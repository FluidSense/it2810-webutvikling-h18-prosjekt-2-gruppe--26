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


  handleClick(e) {
    let id = parseInt(e.target.id,10);
    this.setState({
      selectedTab: id,
    });
  }

  trackAllActiveSelections = (title, id) => {
    const newMediaSelections = Object.assign(this.state.mediaSelections);
    const activeTab = this.state.selectedTab;
    const titleTranslations = {Image:'img',Text:'txt',Sound:'sound'};
    activeTab in newMediaSelections ? newMediaSelections[activeTab][titleTranslations[title]] = id : newMediaSelections[activeTab] = {[titleTranslations[title]]:id};
    this.setState({mediaSelections:newMediaSelections});
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <TabSection selectedTab={this.state.selectedTab} handleClick={this.handleClick.bind(this)} />
          <div className="wrapper2"><MediaPickSideBar reportActiveId={this.trackAllActiveSelections} /></div>
          {/* Pass current tab and selected items to gallery for rendering */}
          <Gallery tab={this.state.selectedTab} selectedItems={this.state.mediaSelections[this.state.selectedTab]}/>
        </header>
      </div>
    );
  }
}

export default App;
