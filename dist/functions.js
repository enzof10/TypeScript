"use strict";
function great(name) {
    return `Hello ${name.toUpperCase()}`;
}
console.log(great("enzo"));
function getNumber(aleatoryNumber) {
    return Math.floor(aleatoryNumber * 100);
}
console.log(getNumber(Math.random()));
function printPosition(position) {
    console.log(position);
}
printPosition({
    lat: 2323,
    long: "233"
});
