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

        for(let categoryOption in this.props.categoryOptions){
            let categoryId =/* this.props.title + "_" + */this.props.categoryOptions[categoryOption];

            mediaPickOptions.push(
                <MediaPickOption
                    id={categoryId}
                    key={categoryOption}
                    title={categoryId}
                    clickFunction={this.handleClick.bind(this)}
                    active={this.state.activeID === categoryId}
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
