import React from 'react';
import MediaPickOption from './MediaPickOption';

export default class MediaPicker extends React.Component {

    createMediaPickOptions(){
        let mediaPickOptions = [];
        for(let option in this.props.options){
            mediaPickOptions.push(<MediaPickOption key={option} title={this.props.options[option]}/>);
        }
        return mediaPickOptions;
    }

    render(){
        return (
            <React.Fragment>
                <h3>{this.props.title}</h3>
                {this.createMediaPickOptions()}
            </React.Fragment>
        );
    }
}