function getSum (number1) {
    return function (number2) {
        return number1 + number2;
    }
}

console.log(getSum(1)(5));