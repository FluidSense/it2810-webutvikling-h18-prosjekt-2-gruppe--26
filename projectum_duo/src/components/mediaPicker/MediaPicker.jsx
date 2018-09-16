import React from 'react';
import MediaPickOption from './MediaPickOption';

const mediaPickerStyle = {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'left',
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
    }

    createMediaPickOptions(){
        let mediaPickOptions = [];
        for(let option in this.props.options){
            let thisId = this.props.options[option] + option;
            mediaPickOptions.push(
                <MediaPickOption 
                    id={thisId}
                    key={option} 
                    title={this.props.options[option]}
                    clickFunction={this.handleClick.bind(this)}
                    active={this.state.activeID === thisId}
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