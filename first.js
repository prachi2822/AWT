const fs = require('fs');
fs.writeFile('input.txt', '', (err) => {
    if (err) {
        console.error(err);
    } else {
        console.log('File created successfully!');
    }
});