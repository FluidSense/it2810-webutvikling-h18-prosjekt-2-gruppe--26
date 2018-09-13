export const GetJSON = (object, url) => {
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
        response => object.setState({apiResult: response})
    );
}

export const GetRaw = (object, url) => {
    fetch(url)
    .then( response => response.status === 200 ? response.text() : console.warn('API Call failed. Status code ' + response.status))
    .then( response => object.setState({apiResult: response}));
}

export const APIResultInState = (object) => {
    return object.state && object.state.hasOwnProperty("apiResult");
}