class Vehicle {
    // this contructor takes 3 arguments that we assign to local vars
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    // this method prints to console 
    information() {
        console.log(`Make: ${this.make}.`);
        console.log(`Model: ${this.model}.`);
        console.log(`Year: ${this.year}.`);
    }
}
// new object created passed through 3 values 
let myVehicle = new Vehicle('Audi', 'A3', 2010);
myVehicle.information();


// class cars inherits make model and year from parent 
class Cars extends Vehicle {
// constructor  takes 4 arguments 
    constructor(make, model, year, doors) {
        // keyword super invokes the constructor from the parent class
        super(make, model, year);
        this.doors = doors;
    }
    // super invokes the method from the parent class and prints doors after 
    information() {
        super.information();
        console.log(`Doors: ${this.doors}.`);
    }
}

// new object created passed through 4 values 
let myCar = new Cars('Audi', 'A6', 2020, 5);
myCar.information();



