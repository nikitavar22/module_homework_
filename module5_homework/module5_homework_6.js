let pack = ['7', '6', '5', '4', '3', '2', '1', '0'];

let rip = true;
for (let s = 0; s < pack.length - s; s++){
    for (let b = s + 1; b < pack.length; b++){
        if (typeof(pack[s]) !== typeof(pack[b])){
            rip = false;
        }
    }
}
if (rip) {
    console.log("массив одинаковый");
} else {
    console.log("массив другой");
}