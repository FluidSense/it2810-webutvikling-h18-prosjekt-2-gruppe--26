import React from 'react';
import MediaPicker from './MediaPicker';

const selection1 = {
    title: 'Image',
    options: [
        'Test1',
        'Test2',
        'Test3',
    ],
}

const selection2 = {
    title: 'Sound',
    options: [
        'Test4',
        'Test5',
        'Test6',
    ],
}

const selection3 = {
    title: 'Text',
    options: [
        'Test7',
        'Test8',
        'Test9',
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
