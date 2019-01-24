import { LOCAL_IP } from '../private/Localhost';

export function getGCCApiDatas() {
    const URL = LOCAL_IP + '/games/possess/all';

    const HEADERS = {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
        },
    };

    return fetch(URL, HEADERS)
        //.then((resp) => console.log(resp._bodyText))
        .then((resp) => resp.json())
        .catch((err) => console.error(err))
}

export function getGCCApiData(gameId) {
    const URL = LOCAL_IP + '/games/possess';

    const HEADERS = {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
        },
        body: JSON.stringify({
            "game": gameId,
            "userId": 1
        }),
    };

    return fetch(URL, HEADERS)
        //.then((resp) => console.log(resp._bodyText))
        .then((resp) => resp.json())
        .catch((err) => console.error(err))
}

export function setToGCCApi(gameId) {
    const URL = LOCAL_IP + '/games/possess/add';

    const HEADERS = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "game": gameId,
            "userId": 1
        }),
    };

    fetch(URL, HEADERS)
        //.then((resp) => console.log(resp._bodyText))
        .then((res) => res.json())
        .then((data) => console.log(data))
        .catch((err) => console.log(err))
}

export function removeToGCCApi(gameId) {
    const URL = LOCAL_IP + '/games/possess/remove';

    const HEADERS = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "game": gameId,
            "userId": 1
        }),
    };

    fetch(URL, HEADERS)
        //.then((resp) => console.log(resp._bodyText))
        .then((res) => res.json())
        .then((data) => console.log(data))
        .catch((err) => console.log(err))
}