class ElectricalAppliance {
    constructor(type, model, power) {
        this.type = type;
        this.model = model;
        this.power = power;
        this.isOffOn = false;
    }

    on() {
        console.log(`The ${this.type} ${this.model} is on`);
        this.isOffOn = true;
    }

    off() {
        console.log(`The ${this.type} ${this.model} is off`);
        this.isOffOn = false;
    }

    totalPower() {
        if (this.isOffOn) return this.power;
        else return 0;
    }
}

const microwaveOven = new ElectricalAppliance('Microwave oven', 'LG', 1000);
const toaster = new ElectricalAppliance('Toaster', 'Bosch', 980);
const kettle = new ElectricalAppliance('Kettle', 'Redmond', 2100);

microwaveOven.on();
toaster.on();
kettle.off();

console.log(`Total power = ${microwaveOven.totalPower() + toaster.totalPower() + kettle.totalPower()} watt`);