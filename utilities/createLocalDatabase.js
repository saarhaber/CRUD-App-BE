const pgtools = require('pgtools');

// An object with user, host, port, and password properties;
const config = {
    user: 'postgres',
    host: 'localhost',
    port: 3000,
    password: process.env.LOCAL_DATABASE_PASSWORD
};

// Name of the database that will be created
const databaseName = require('./databaseName');

// A callback that takes an error argument;
// If cb is omitted the function will return a Promise;
const cb = (err, res) => {
    console.log(`Attempting to create the database: ${databaseName}!`);
    if (err) {
        console.log("uh oh");
        console.error(err);
        process.exit(-1);
    }

    console.log(res);
    console.log(`Successfully created the database: ${databaseName}!`);
}

const createLocalDatabase = () => pgtools.createdb(config, databaseName, cb);

module.exports = createLocalDatabase;