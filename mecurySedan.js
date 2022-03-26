//this includes the vehicle class as a module
const VehicleModule = require("./vehicle")

//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mecury", "Sedan", "1965", "color", "mileage");
console.log(v.make)

class Car extends VehicleModule {
    constructor(make, model, year, color, mileage){
        super(make, model, year, color, mileage)
        this.maximumPassengers = 5;
        this.passenger = 0;
        this.numberOfWheels = 4;
        this.maximumSpeed = 160;
        this.fuel = 10;
        this.scheduleService = false;
    }
    loadPassenger(num){
        if (num + this.passenger < this.maximumPassengers){
            availableRoom = true
            return this.passenger
        }
    }
    start(){
        if(this.fuel > 0){
            return start = true
        } else
    }
    scheduleService(){
        if(this.mileage > 30000){
            return this.scheduleService = true
        }
    }


}