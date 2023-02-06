    let x =12;
        console.log(x);
    if ((typeof(x) == 'number')&&(!isNaN(x))) {  //тип number
        console.log("тип number");
    } else {
        console.log("Тип x не определён");
}   if ((x/2) >= 4){  //тип boolean
        console.log("Верно, 12/2 больше 4");
    } else {
        console.log("Тип x не определён");
}
    let b = 'Hello';
        console.log(b);
    if (b.length <= x){  //тип string
        console.log("Верно, в тексте \"Hello\" 5 букв, это меньше 12");
    } else {
        console.log("Тип x не определён");
}
