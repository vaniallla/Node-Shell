// Output a prompt
process.stdout.write('prompt > ');

// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', (data) => {
    const cmd = data.toString().trim(); //remove the newline
    let catCheck = cmd.split(' ');
    const fileName = catCheck[1];

    if (cmd === 'pwd') {
        const pwd = require('./pwd');
        pwd();
    } else if (cmd === 'ls') {
        const ls = require('./ls');
        ls();
    } else if (catCheck[0] === 'cat') {
        const cat = require('./cat');
        cat(fileName);
    } else {
        process.stdout.write('You typed: ' + cmd);
        process.stdout.write('\nprompt > ');
    }

});