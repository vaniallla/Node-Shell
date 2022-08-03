module.exports = function() {
    process.stdout.write(process.cwd());
    process.stdout.write('\nprompt > ');
}


// type in terminal:
// nodemon bash.js
// pwd