const fs = require('fs');

module.exports = (fileName) => fs.readFile(fileName, (err, data) => {
    if (err) {
        throw err
    } else {
        process.stdout.write(data)
        process.stdout.write('\nprompt > ');
    }
})
