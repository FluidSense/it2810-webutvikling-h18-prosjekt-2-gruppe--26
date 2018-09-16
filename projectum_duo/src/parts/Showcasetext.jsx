import React, {Component} from 'react'

class Showcasetext extends Component {
  render(){
    return (
      <div className="showcaseText">
        <h1>Ode to {this.props.name}</h1>
        <p> {this.props.text}Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
In Excepteur qui tempor dolore irure ea mollit officia minim commodo est magna dolore fugiat do aute qui sed</p>
      </div>
    )
  }
}

export default Showcasetext;
