import React from 'react'

class Soundplayer extends React.Component {
  render() {
    return (
      <div className="soundPlayer">
          <audio   autoPlay src={this.props.songpath}></audio>
      </div>
    );
  }
}

export default Soundplayer;
