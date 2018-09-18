import React from 'react';
import MediaPicker from './MediaPicker';

const selection1 = {
    title: 'Image',
    options: [
        'Meme',
        'Nation',
        'Animal',
    ],
}

const selection2 = {
    title: 'Sound',
    options: [
        'Meme',
        'Nation',
        'Animal',
    ],
}

const selection3 = {
    title: 'Text',
    options: [
        'Meme',
        'Nation',
        'Animal',
    ],
}

export default class MediaPickSidebar extends React.Component {
    parts = [selection1, selection2, selection3];

    createSidebar() {
        let mediaPickers = []
        for(const objectNr in this.parts) {
            let object = this.parts[objectNr];
            mediaPickers.push(
                <MediaPicker
                    key={objectNr}
                    title={object.title}
                    options={object.options}
                    reportActiveId={this.props.reportActiveId}
                />
            );
        }
        return mediaPickers;
    }

    render(){
        return (
            <React.Fragment>
                {this.createSidebar()}
            </React.Fragment>
        );
    }

}
