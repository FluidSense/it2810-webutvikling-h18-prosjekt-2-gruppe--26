import React, {Component} from 'react'

class Showcasetext extends Component {
  render(){
    if(this.props.txt) {
      return (
        <div className="showcaseText">
          <h1>{this.props.txt.title}</h1>
          <p>{this.props.txt.text}</p>
          <p>by {this.props.txt.author}</p>
        </div>
      )
    }
    return (
      <div className="showcaseText">
        <h1>Welcome</h1>
        <p>To start using this tab, select any of the media on the right</p>
      </div>
    );
  }
}

export default Showcasetext;
