export function getApiDatas(search, fields='*') {
    const API_TOKEN = '2b76c4dac0be6e2aeeda55b1165afff8';
    const URL='https://api-v3.igdb.com/games/?fields='+fields+'&search='+search+'&limit=50';

    const HEADERS = {
        methods: 'POST',
        headers: {
            'Accept': 'application/json',
            'user-key': API_TOKEN
        },
    };
    
    return fetch(URL, HEADERS)
    //.then((resp) => console.log(resp))
    .then((resp) => resp.json())
    .catch((err) =>console.error(err))
}

