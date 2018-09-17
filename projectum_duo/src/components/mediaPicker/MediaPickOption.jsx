import React from 'react';
import Checkbox from '../../parts/Checkbox.jsx';

const pickOptionStyle = {
    display: 'flex',
    alignItems: 'center',
}

export default class MediaPickOption extends React.Component {

    render() {
        return (
            <div style={pickOptionStyle}>
                <Checkbox
                    active={this.props.active}
                    clickFunction={this.props.clickFunction}
                    id={this.props.id}
                />
                <p style={{display:'inline'}}>{this.props.title}</p>
            </div>
        );
    }
}
