import React from 'react';
import Checkbox from '../../Parts/Checkbox.jsx';

export default class MediaPickOption extends React.Component {

    render() {
        return (
            <React.Fragment>
                <Checkbox/>
                <p style={{display:'inline'}}>{this.props.title}</p>
            </React.Fragment>
        );
    }
}