'use strict'

class TC {
    // constructor() {
    //     this.speed = 0;
    //     this.color = 'black';
    //     this.weight = 1000;
    //     this.materials = ['iron', 'wood'];
    // }
    constructor(speed, color, weight, materials) {
        this.speed = speed;
        this.color = color;
        this.weight = weight;
        this.materials = materials;
    }
    stop() {
        this.speed = 0;
    }
    speedUp() {
        this.speed += 10;
    }
    speedDown() {
        if (this.speed >= 10) {
            this.speed -= 10;
        }
    }
}
// let car = new TC();
let newCar = new TC(50, 'white', 2000, ['nikel']);
class Airplane extends TC {
    constructor(speed, color, weight, materials, brand, flaps) {
        super(speed, color, weight, materials);

        this.brand = brand;
        this.flaps = flaps;
    };
    speedUp() {
        this.speed += 100;
    }
    speedDown() {
        if (this.speed >= 100) {
            this.speed -= 100;
        }
    }
    toggleFlaps() {
        if (this.flaps === true) {
            this.flaps = false;
        }
        else {
            this.flaps = true;
        }
    }
}
let plane = new Airplane(500, 'red', 100000, ['carbon'], 'airbus', true);

class Motorcycle extends TC {
    constructor(speed, color, weight, materials, brand, capacity) {
        super(speed, color, weight, materials, brand);
        this.capacity = capacity;
    };
    speedUp() {
        this.speed += 5;
    }
    speedDown() {
        if (this.speed >= 5) {
            this.speed -= 5;
        }
    }
    increaseCapacity() {
        if (this.capacity === 1) {
            this.capacity = 2;
        }
    }
}
let motor = new Motorcycle(25, 'blue', 120, ['Plumbum'], 'kawasaki', 1);

class MotorcycleWithPram extends Motorcycle {
    constructor(speed, color, weight, materials, brand) {
        super(speed, color, weight, materials, brand, 2);
    };
}
let pramsMotorcycle = new MotorcycleWithPram(45, 'green', 150, ['Silver'], 'kawasaki');