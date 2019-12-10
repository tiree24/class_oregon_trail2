
class Traveler {
    constructor(name) {
        this.name = name;
        this.food = 1;
        this.isHealthy = true;
    }
    hunt() {
        this.food = this.food + 2
    }

    eat() {
        if (this.food > 0) {
            this.food = this.food - 1
        }
        else {
            this.isHealthy = false
        }
    }
}

let testTraveler = new Traveler("tiree")
console.log(testTraveler)


class Wagon {
    constructor(capacity) {
        this.capacity = capacity
        this.passengers = []
    }

    getAvailableSeatCount() {
        return this.capacity - this.passengers.length
    }

    join(traveler) {

        if (this.getAvailableSeatCount() > 0) { this.passengers.push(traveler) }
    }
    shouldQuarantine() {
        for (let i = 0; i < this.passengers.length; i++) {
            if (this.passengers[i].isHealthy === false) {
                return true
            }

        }
        return false
    }
    totalFood() {
        let results = 0
        for (let i = 0; i < this.passengers.length; i++) {
            results = results + this.passengers[i].food
        }
        return results

    }
}
let testWagon = new Wagon(3)
console.log(testWagon)


testTraveler.hunt()
console.log(testTraveler)


testTraveler.eat()
testTraveler.eat()
testTraveler.eat()
testTraveler.eat()
console.log(testTraveler)


testWagon.getAvailableSeatCount()
console.log(testWagon.getAvailableSeatCount())


testWagon.join(testTraveler)
console.log(testWagon)


console.log(testWagon.shouldQuarantine())


console.log(testWagon.totalFood())


class Doctor extends Traveler {
    constructor(name) {
        super(name)
    }
    heal(traveler) {
        traveler.isHealthy = true
    }

}


let testDoctor = new Doctor("sasuke")
console.log(testDoctor.heal(testTraveler))
console.log(testTraveler)

class Hunter extends Traveler {
    constructor(name) {
        super(name)

        this.food = 2
    }
    hunt() {
        this.food = this.food + 5
    }
    eat() {
        if (this.food > 2) {
            this.food = this.food - 2
        }
        else {
            this.food = 0
            this.isHealthy = false
        }
    }
    giveFood  (traveler, numOfFoodUnits) {
        if (this.food >= numOfFoodUnits) {
            this.food = this.food - numOfFoodUnits
            traveler.food = traveler.food + numOfFoodUnits
        }
    }
}



let testHunter = new Hunter("naruto")
testHunter.hunt()
console.log(testHunter)


testHunter.eat()
testHunter.eat()
testHunter.eat()
testHunter.eat()
console.log(testHunter)



testHunter.giveFood(testTraveler, 1)

console.log(testHunter)

// Create a wagon that can hold 4 people
let wagon = new Wagon(4);
// Create five travelers
let henrietta = new Traveler('Henrietta');
let juan = new Traveler('Juan');
let drsmith = new Doctor('Dr. Smith');
let sarahunter = new Hunter('Sara');
let maude = new Traveler('Maude');
console.log(`#1: There should be 4 available seats. Actual: ${wagon.getAvailableSeatCount()}`);
wagon.join(henrietta);
console.log(`#2: There should be 3 available seats. Actual: ${wagon.getAvailableSeatCount()}`);
wagon.join(juan);
wagon.join(drsmith);
wagon.join(sarahunter);
wagon.join(maude); // There isn't room for her!
console.log(`#3: There should be 0 available seats. Actual: ${wagon.getAvailableSeatCount()}`);
console.log(`#4: There should be 5 total food. Actual: ${wagon.totalFood()}`);
sarahunter.hunt(); // gets 5 more food
drsmith.hunt();
console.log(`#5: There should be 12 total food. Actual: ${wagon.totalFood()}`);
henrietta.eat();
sarahunter.eat();
drsmith.eat();
juan.eat();
juan.eat(); // juan is now hungry (sick)
console.log(`#6: Quarantine should be true. Actual: ${wagon.shouldQuarantine()}`);
console.log(`#7: There should be 7 total food. Actual: ${wagon.totalFood()}`);
drsmith.heal(juan);
console.log(`#8: Quarantine should be false. Actual: ${wagon.shouldQuarantine()}`);
sarahunter.giveFood(juan, 4);
sarahunter.eat(); // She only has 1, so she eats it and is now sick
console.log(`#9: Quarantine should be true. Actual: ${wagon.shouldQuarantine()}`);
console.log(`#10: There should be 6 total food. Actual: ${wagon.totalFood()}`);