const JSZip = require('adm-zip');
const fs = require('fs');

const FontFareRegex = /(FontFare\.)(eot|svg|ttf|woff\d?)/;

function replaceCSS(cssFile) {
    const css = fs.readFileSync(cssFile, {
        encoding: 'utf8'
    });
    const result = css.replace(/\.\.\/fonts\/FontFare/g, './FontFare');
    fs.writeFileSync(cssFile, result, {encoding: 'utf8'});
}

function extractFiles(zipBuffer, targetDir) {
    const zip = new JSZip(zipBuffer);
    const zipEntries = zip.getEntries();
    zipEntries.forEach((zipEntry) => {
        if (FontFareRegex.test(zipEntry.entryName)) {
            zip.extractEntryTo(zipEntry.entryName, targetDir, false, true);
        } else if (zipEntry.entryName.includes('main.css')) {
            zip.extractEntryTo(zipEntry.entryName, targetDir, false, true);
            replaceCSS('fonts/main.css')
        }
    });
    console.log('Files created');
}

module.exports = extractFiles;
