const array = [23, 22, 14, 15, 13, 79];
push = array.push();
console.log(array);
pop = array.pop();
console.log(array);
for (var i = 1; i < array.length; i++)
    for (var j = 0; j < i; j++)
        if (array[i] < array[j]) {
            let x = array[i];
            array[i] = array[j];
            array[j] = x;

        }
console.log(array);
array.sort();








