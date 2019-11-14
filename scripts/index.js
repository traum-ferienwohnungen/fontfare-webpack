const createDir = require('./createDir');
const getLatestRelease = require('./download');
const extractFiles = require('./extractFiles');

const fontDir = 'fonts';
createDir(fontDir)
    .then(() => {
        getLatestRelease('https://api.github.com/repos/traum-ferienwohnungen/fontfare/tags')
            .then((zipBuffer) => {
                extractFiles(zipBuffer, fontDir);
            })
    });
