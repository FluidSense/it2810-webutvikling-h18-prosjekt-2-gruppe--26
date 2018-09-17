import React from 'react';
import MediaPicker from './MediaPicker';

const selection1 = {
    title: 'Image',
    categoryOptions: [
        'img1',
        'img2',
        'img3',
    ],
}

const selection2 = {
    title: 'Text',
    categoryOptions: [
        'txt1',
        'txt2',
        'txt3',
    ],
}

const selection3 = {
    title: 'Audio',
    categoryOptions: [
        'aud1',
        'aud2',
        'aud3',
    ],
}

export default class MediaPickSidebar extends React.Component {
    parts = [selection1, selection2, selection3];

    createSidebar() {
        let mediaPickers = []
        for(const typeNr in this.parts) {
            let type = this.parts[typeNr];

            mediaPickers.push(
                <MediaPicker
                    key={typeNr}
                    title={type.title}
                    categoryOptions={type.categoryOptions}
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
