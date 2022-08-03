const req = require('request');

module.exports = (fileName) => req(fileName, (err, response, body) => {
    if (err) {
        throw err;
    } else {
        process.stdout.write(body);
        process.stdout.write('\nprompt > ');
    }
})


// type in terminal:
// nodemon bash.js
// curl http://www.google.com