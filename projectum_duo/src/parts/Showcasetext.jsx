import React, {Component} from 'react'

class Showcasetext extends Component {
  render(){
    return (
      <div className="showcaseText">
        <h1>Ode to {this.props.name}</h1>
        <p>{this.props.text}</p>
      </div>
    )
  }
}

export default Showcasetext;
