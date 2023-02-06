let pack = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'd', null, 'e'];
let countEven = 0;
let countOdd = 0;
let countOther = 0;

for (let s = 0; s < pack.length; s++){
    if ((pack[s] === 0) || (typeof(pack[s]) != 'number')) {
        countOther++;
    } else {
        if (pack[s] % 2 === 0) {
            countEven++;
        } else {
            countOdd++;
        }
    }
}

console.log("Четное " + countEven);
console.log("Не четное " + countOdd);
console.log("Остальные " + countOther);