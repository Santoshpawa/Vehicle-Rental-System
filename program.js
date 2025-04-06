class Vehicle {
    constructor(model,type,fuelType = "Diesel",rentedBy = "none",isRented = false){
        this.model = model
        this.type = type
        this.fuelType = fuelType
        this.rentedBy = rentedBy
        this.isRented = isRented
    }
    
    rent(name){
        if(!this.isRented){
            this.isRented = true
            this.rentedBy = name
            rentedVehicles.push(this)
            console.log(`${this.model} has been rented by ${name}`)
        }else{
            console.log("The vehicle is not Available")
        }
        
    }
    returnVehicle(){
        this.isRented = false
        this.rentedBy = "None"
        let x= rentedVehicles.indexOf(this)
        rentedVehicles.splice(x,1);
        console.log(`${this.model} has been returned`)
    }
    
}

class Car extends Vehicle{
    constructor(model,type,fuelType,isRented){
        super(model,type,fuelType,isRented)
    }
}

class Bike extends Vehicle{
    constructor(model,type,fuelType,isRented){
        super(model,type,fuelType,isRented)
    }
}

class Truck extends Vehicle{
    constructor(model,type,fuelType,isRented){
        super(model,type,fuelType,isRented)
    }
}

var rentedVehicles = [];
function getRentedVehicles(){
    console.log(JSON.stringify(rentedVehicles))
}

const car1 = new Car("Honda Civic", "Sedan", "Petrol");
const bike1 = new Bike("Yamaha R15", "Sports","Petrol");
const truck1 = new Truck("Tata Ace", "Mini Truck");

car1.rent("Customer001");
car1.returnVehicle();
bike1.rent("Customer007");
getRentedVehicles();



