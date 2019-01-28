import { LOCAL_IP } from '../private/Localhost';

export function getGCCApiDatas(category) {
    const URL = LOCAL_IP + '/games/'+category+'/all';

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

export function getGCCApiData(gameId, category) {
    const URL = LOCAL_IP + '/games/'+category;

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

    return fetch(URL, HEADERS)
        //.then((resp) => console.log(resp._bodyText))
        .then((resp) => resp.json())
        //.then((res) => console.log(res))
        .catch((err) => console.error(err))
}

export function getGccApiAllSuccesses() {
    const URL = LOCAL_IP + '/success/all';

    const HEADERS = {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
        },
    };

    return fetch(URL, HEADERS)
        //.then((resp) => console.log(resp._bodyText))
        .then((resp) => resp.json())
        //.then((res) => console.log(res))
        .catch((err) => console.error(err))
}

export function getGccApiUserSuccesses(user) {
    const URL = LOCAL_IP + '/success/user';

    const HEADERS = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "userId": 1
        }),
    };

    return fetch(URL, HEADERS)
        //.then((resp) => console.log(resp._bodyText))
        .then((resp) => resp.json())
        //.then((res) => console.log(res))
        .catch((err) => console.error(err))
}

export function setToGccApiUserSuccess(user, successId) {
    const URL = LOCAL_IP + '/success/add';

    const HEADERS = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "successId": successId,
            "userId": 1
        }),
    };

    fetch(URL, HEADERS)
        //.then((resp) => console.log(resp._bodyText))
        .then((res) => res.json())
        .then((data) => console.log(data))
        .catch((err) => console.log(err))
}

export function setToGCCApi(gameId, category) {
    const URL = LOCAL_IP + '/games/'+category+'/add';

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

export function removeToGCCApi(gameId, category) {
    const URL = LOCAL_IP + '/games/'+category+'/remove';

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