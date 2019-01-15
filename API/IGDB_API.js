export function getApiDatas(search) {
    const API_TOKEN = '2b76c4dac0be6e2aeeda55b1165afff8';
    const FIELDS = 'name,platforms.name,popularity,rating,release_dates.m,release_dates.y,cover.url,slug,summary';
    const URL='https://api-v3.igdb.com/games/?search='+search+'&fields='+FIELDS;
    const HEADERS = {
        methods: 'POST',
        headers: {
            'Accept': 'application/json',
            'user-key': API_TOKEN
        },
    }
    
    return fetch(URL, HEADERS)
    .then((resp) => resp.json())
    .catch((err) =>console.error(err))
}

