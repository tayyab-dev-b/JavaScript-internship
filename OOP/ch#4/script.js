// function Car(make, speed) {
//   this.make = make;
//   this.speed = speed;
// }

// function EV(make, speed, charge) {
//   Car.call(this, make, speed);
//   this.charge = charge;
// }

// EV.prototype = Object.create(Car.prototype);
// EV.prototype.constructor = EV;

// EV.prototype.chargeBattery = function (chargeTo) {
//   this.charge = chargeTo;
// };

// EV.prototype.accelarate = function () {
//   this.speed += 20;
//   this.charge--;
//   console.log(
//     `${this.make} going at ${this.speed} km/h, with a charge of ${this.charge}% `
//   );
// };

// EV.prototype.brake= function(){
//     this.speed -=5;
//     console.log(`${this.make} going at ${this.speed} km/h`)
// }



// const tesla= new EV('Tesla',120,23);
// tesla.accelarate();
// tesla.brake();
// tesla.chargeBattery(90);


class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
    return this; 
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
    return this; 
  }
}


class EVCls extends CarCl{
    #charge
    constructor(make,speed,charge){
        super(make,speed)
        this.#charge = charge;
        
    }

    chargeBattery(chargeTo){
        this.#charge =chargeTo;
        return this;

    }
     accelarate(){
        this.speed +=20;
        this.#charge --;
        console.log(`${this.make} going at ${this.speed} km/h,with a charge of ${this.#charge}%`)
        return this;

    }

}

const rivian = new EVCls ('Rivian',120,23);
rivian.accelarate().accelarate().brake().chargeBattery(90).accelarate();
