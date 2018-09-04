import React from 'react';

const defaultStyle = {
    minWidth: '30px',
    minHeight: '30px',
}


export default class Checkbox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: false,
        };
    }


    clickFunction = () => {
        this.setState(prevState => ({
            value: !prevState.value,
        }))
    };

    render() {
        let chosenStyle = this.props.style || defaultStyle;
        return (
            <button style={chosenStyle} onClick={this.clickFunction}>
                {this.state.value ? '✔': ''}
            </button>
        );
    }
}
