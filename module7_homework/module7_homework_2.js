function strInObj(str, obj){
    if (str in obj) return true;
    else return false
}

const obj = {
    name: 'Tony',
    power: 70,
    intelligence: 90
}

const str = 'name';

console.log(strInObj(str, obj));