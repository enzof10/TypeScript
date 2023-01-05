function great(name: string
) {
    return `Hello ${name.toUpperCase()}`
}
console.log(great("enzo"));

function getNumber(aleatoryNumber:number): number {
    return Math.floor(aleatoryNumber *100)
}

console.log(getNumber(Math.random()));

function printPosition(position:{lat: number, long?: number | string}) :void {
    console.log(position);
}

printPosition({
    lat: 2323,
    long: "233"
})