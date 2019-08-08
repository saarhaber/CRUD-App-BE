const pkg = require('../package.json');
const databaseName = pkg.name.toLowerCase();

module.exports = databaseName;


//THIS IS WHERE YOU NEED TO FIX IF THE DATABASE NAME MESSES UP