import React from 'react';
import MediaPickOption from './MediaPickOption';

const mediaPickerStyle = {
    display: 'flex',
    flexDirection: 'column',
    marginRight: '20px',
}

export default class MediaPicker extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            activeID: null,
        }
    }

    // Pass down to checkbox to ensure that only one checkbox is active.
    handleClick(e){
        const id = e.target.id;
        this.setState({
            activeID: id
        });
        this.props.reportActiveId(this.props.title,id);
    }

    createMediaPickOptions(){
        let mediaPickOptions = [];
        console.log(this.props);
        for(let option in this.props.options){
            let thisId =/* this.props.title + "_" + */this.props.options[option];
            mediaPickOptions.push(
                <MediaPickOption
                    id={this.props.options[option]}
                    key={option}
                    title={this.props.options[option]}
                    clickFunction={this.handleClick.bind(this)}
                    active={
                        this.props.selections ?
                            this.props.selections === thisId
                            : false
                        }
                />);
        }
        return mediaPickOptions;
    }

    render(){
        return (
          <div style={mediaPickerStyle}>
              <h3>{this.props.title}</h3>
              {this.createMediaPickOptions()}
          </div>
        );
    }
}
