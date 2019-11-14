const fs = require('fs');

module.exports = function (directoryName) {
    return new Promise((resolve) => {
        if (!fs.existsSync(directoryName)) {
            fs.mkdirSync(directoryName);
        }
        console.log('Directory created');
        resolve(directoryName);
    })
}
