
 
console.log("_________________ Ex 1, classes ____________________________");

class Person{
    constructor(name, age){
        this.name=name;
        this.age=age;
    }
describe(){
    console.log(`her name is ${this.name} & she is ${this.age} years old.`);
}
}//we ll get her name is Maria & she is  34 years old.
let herName = new Person("Maria",34);
herName.describe();
 
console.log("_________________ Ex 2, classes ____________________________");

/* vol = area *height;
   area = pi r**2
*/
function volOfCylinder(radius, height){
    let volume = (3.14* radius**2)*height;
    console.log(volume,"cm cube");
}
volOfCylinder(3,5);//it ll give us 141.3 cm cube

console.log("_________________ Ex 3, classes ____________________________");

function Clock({ template }) {
    let timer;
    function render() {
      let date = new Date();
      let hours = date.getHours();
      if (hours < 10) hours = '0' + hours;
      let mins = date.getMinutes();
      if (mins < 10) mins = '0' + mins;
      let secs = date.getSeconds();
      if (secs < 10) secs = '0' + secs;
  
      let output = template
        .replace('h', hours)
        .replace('m', mins)
        .replace('s', secs);
      console.log(output);
    }
    this.stop = function() {
      clearInterval(timer);
    };
    this.start = function() {
      render();
      timer = setInterval(render, 600000);
    };
  }
  let clock = new Clock({template: 'h:m:s'});
  clock.start();

  console.log("_________________ Ex 4, classes ____________________________");

class Tv {
    constructor(brand, channel, /* volume, */ volumeInc, volumeDec) {
        this.brand=brand;
        this.channel=channel;
        //this.volume=volume;
        this.volumeInc=volumeInc;//this.volumeInc=volumeInc;
        this.volumeDec=volumeDec;
    }
increase(){
    console.log(`the volume has increased and it is now ${this.volumeInc}`);
    if(this.volumeInc>85){
        console.log(`${this.volumeInc} is too noisy, you ve to decrease the voice`);
}
}
decrease(){
    console.log(`the volume has decreased & it is now ${this.volumeDec}`)
    if(this.volumeDec<=10){
        console.log(`${this.volumeDec} is too low, you ve to increase the sound`);
}
}
channels(){
    console.log(`you are now on channel ${this.channel}`);
    if(this.channel>50){
    console.log(`our programs are shown only up to channel 50`);
}
}
}

let status = new Tv("Sony",51,95,10);
console.log(status);
status.increase();
status.channels();//you are now on channel 51
                  //our programs are only up to channel 50

console.log("_________________ Ex 5, classes ____________________________");

class AreaCircle{
    constructor(pi, rad){
        this.pi=pi;
        this.rad=rad;
    }
getArea(){return (this.pi*this.rad)**2}

}
let result = new AreaCircle(3,5);
result.getArea();//??