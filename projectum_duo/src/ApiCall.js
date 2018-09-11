import React, { Component } from 'react';

class ApiCall extends Component{
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      content: []
    };
  }

  componentDidMount(props) {
    if(this.props && this.props.apiUrl){
      fetch("../resources/" + this.props.apiUrl)
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              content: result.poems
            });
          },

          // Handle errors
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )
      }
    else{
      console.log("Props were not loaded properly");
    }
  }

  render(){
    const { error, isLoaded, content } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {

      return (
          <div className="PoemContent">
            <ul>
              {content.map(item => (
                <div>
                  <label>{item.name}</label>
                  <p key={item.id}>
                    {item.lineone} <br/> {item.linetwo} <br/> {item.linethree}
                  </p>
                </div>
              ))}
            </ul>
          </div>
      );
    }
  }
}

export default ApiCall;
