const x = 10;
console.log("Block 1:", x);
{
    const x = 20;
    console.log("Block 2:", x);
}
console.log("Block 1 after Block2:", x);