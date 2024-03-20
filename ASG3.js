const fs = require('fs');
const inputfile = 'input.txt';
const outputfile = 'output.txt';

fs.writeFile('input.txt', '2,3,4,5', function (err) {
    if (err) throw err;
    console.log('File created Successfully!');
});


fs.readFile(inputfile, 'utf8', (err, data) => {
    if (err) {
        console.error("error in reading file");
        return;
    }
    const numbers = data.split(',').map(Number);
    const cubedNumbers = numbers.map(num => Math.pow(num, 3));
    const outputText = cubedNumbers.join(',');
    fs.writeFile(outputfile, outputText, (err) => {
        if (err) {
            console.error("error in writing output file");
            return;
        }
        console.log("Numbers cubed and written to output file successfully!");
    });
});
