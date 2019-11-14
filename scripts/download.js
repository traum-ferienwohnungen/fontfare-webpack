const fs = require('fs');
const axios = require('axios');

function getLatestRelease(releasesUrl) {
    return new Promise((resolve, reject) => {
        const githubResponse = axios.get(releasesUrl, {
            headers: {
                'Accept': 'application/vnd.github.v3+json',
                'User-Agent': 'axios-nodejs'
            }
        }).then(({data: githubResponse}) => {
            const releaseURL = githubResponse[0].zipball_url || reject();
            axios.get(releaseURL, {
                headers: {
                    'User-Agent': 'axios-nodejs'
                },
                responseType: 'arraybuffer'
            }).then((res) => {
                console.log('Buffer received');
                resolve(res.data);
            })
        });
    });
}

module.exports = getLatestRelease;
