let pack = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'd', null, 'e'];


function countEvenOdd (arr){
    let countEven = 0;
    let countOdd = 0;
    let countOther = 0;

    for (let s = 0; s < arr.length; s++){
        if ((arr[s] === 0) || (typeof(arr[s]) != 'number')) {
            countOther++;
        } else {
            if (arr[s] % 2 === 0) {
                countEven++;
            } else {
                countOdd++;
            }
        }
    }

    return [countEven, countOdd, countOther];
}

let rez = countEvenOdd(pack);

console.log("Четное " + rez[0]);
console.log("Не четное " + rez[1]);
console.log("Остальные " + rez[2]);