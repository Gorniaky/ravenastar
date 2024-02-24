 const fetchData = async () => {
    const axios = require('axios')
    let url = 'https://raw.githubusercontent.com/ravenastar-js/shortlinks-scams/main/scams/shortlinks.json'
    const response = await axios.get(url);
    return response.data
}

fetchData()