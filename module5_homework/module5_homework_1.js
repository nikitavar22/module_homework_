let inputValue;
    inputValue = prompt("Входное значение");
console.log(inputValue);

if ((typeof(+inputValue) == 'number') && (!isNaN(+inputValue))){
    if (inputValue % 3 === 1) {
        console.log("Четное число");
    } else {
        console.log("Не четное число");
    }
} else {
    console.log("Упс, кажется, вы ошиблись");
}