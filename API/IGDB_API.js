import {IGDB_API_KEY} from '../private/ApiKeys'
export function getIgdbNameSearchData(search, fields='*') {
    const URL='https://api-v3.igdb.com/games/?fields='+fields+'&search='+search+'&limit=50';

    const HEADERS = {
        methods: 'POST',
        headers: {
            'Accept': 'application/json',
            'user-key': IGDB_API_KEY
        },
    };
    
    return fetch(URL, HEADERS)
    .then((resp) => resp.json())
    .catch((err) =>console.error(err))
}

export function getIgdbIdSearchData(ids, fields='*') {
    const URL='https://api-v3.igdb.com/games/'+ids+'?fields='+fields;

    const HEADERS = {
        methods: 'POST',
        headers: {
            'Accept': 'application/json',
            'user-key': IGDB_API_KEY
        },
    };
    
    return fetch(URL, HEADERS)
    .then((resp) => resp.json())
    .catch((err) =>console.error(err))
}

