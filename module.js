const package = require('./package.json');

module.exports = function fontfareNuxt() {
    this.options.css.push(package.name + '/fonts/main.css')
};

module.exports.meta = package;
