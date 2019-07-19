const apiKey= "MBJaNGZyrH0IGR_2oe_xgkfilnTgtpOvoPl6esVC7vo1s-Tj4xtM5cky8JEDlzajPNPjIhO91tTg7CnfGMXtNtZXIp3cl6OrHxpoujgqHKBS-iiJS6OKw1izb7UxXXYx"

$(() => {
    function formatQueryParams(params) {
        const queryItems = Object.keys(params)
            .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
        return queryItems.join('&');
    }

    function getRatings(query, maxResults = 50) {
        const params = {
            //by_state: query,
            term: 'Gordon Biersch Brewery',
            location: 'rockville',
            //sort: 'type,name',
        };
        const queryString = formatQueryParams(params)
        const proxyUrl = 'https://cors-anywhere.herokuapp.com/'
        const reqEndPoint = 'https://api.yelp.com/v3/businesses/search'+'?'+ formatQueryParams(params)
        const url = proxyUrl + reqEndPoint


        fetch(url, {headers: {Authorization: `Bearer ${apiKey}`}})
            .then(response => response.json())
            .then(results => {
                console.log(results)
                $('#results').append(JSON.stringify(results))
            })
            .catch(err => {
                console.log(err)
            });
    }

    $('button').click(getRatings)
    

})
