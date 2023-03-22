function countInOrderEverySecond(number1, number2) {
    let progress = number1;

    let intervalId = setInterval(function () {
        if (progress <= number2) {
            console.log(progress);
            progress++;
        }
        else clearInterval(intervalId);
    }, 1000);
}

countInOrderEverySecond(1, 10);