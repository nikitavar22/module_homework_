const myCar = new Map();
myCar.set("Mercedes Benz", "John");
myCar.set("BMW", "Doe");
myCar.set("age", 23);

for (let car of myCar.keys()){
    console.log(car + " is " + myCar.get(car));
}