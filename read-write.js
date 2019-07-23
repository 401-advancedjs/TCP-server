'use strict';

const fs = require('fs');
const util = require('util');

const readFile = (file) => {
    return util.promisify(fs.readFile)(file)
        .then(data => data)
        .catch(error => console.error(error));
};

const upperCase = (data) => {
    return data.toString().toUpperCase();
};

const writeFile = (file, data) => {
    return util.promisify(fs.writeFile)(file, data)
        .then( () => 'SAVED:saved message')
        .catch(error => console.error(error))
};

module.exports = {readFile, upperCase, writeFile};

