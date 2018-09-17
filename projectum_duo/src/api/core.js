export const GetJSON = (object, url, stateName='apiResult') => {
    fetch(url)
    .then( (response) => {
        if (response.status !== 200) {
            console.warn('API Call failed. Status code ' + response.status);
            return;
        }
        else {
            return response.json();
        }
    })
    .then(
        response => object.setState({[stateName]: response})
    );
}

export const GetRaw = (object, url, stateName='apiResult') => {
    fetch(url)
    .then( response => response.status === 200 ? response.text() : console.warn('API Call failed. Status code ' + response.status))
    .then( response => object.setState({[stateName]: response}));
}

export const APIResultInState = (object, stateName='apiResult') => {
    return object.state && object.state.hasOwnProperty(stateName) && typeof object.state[stateName] !== 'undefined';
}