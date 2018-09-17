import React from 'react';

const defaultStyle = {
    minWidth: '31px',
    minHeight: '31px',
}


export default class Checkbox extends React.Component {

    render() {
        let chosenStyle = this.props.style || defaultStyle;
        return (
            <button className="checkmark"id={this.props.id} style={chosenStyle} onClick={this.props.clickFunction}>
                {this.props.active ? '✔': ''}
            </button>
        );
    }
}
