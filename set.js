let colors = new Set(['Red', 'Purple', 'Violet', 'Yellow', 'Green', 'Red']);
console.log(colors);

let SetObject = new Set(colors);
SetObject.add("Black");
console.log(SetObject);

SetObject.delete("Yellow");
console.log(SetObject);

SetObject.entries("Red");
console.log(SetObject);