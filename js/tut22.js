// object literal
let car={

name:'Maruti 800',
topspeed:89,
run:function(){
    console.log("car is running");
}

}

// creating constructor

function generalCar(gname,gspeed){

    this.name=gname;
    this.topspeed=gspeed;
    this.run=function(){
        console.log(`${this.name} is running at speed ${this.topspeed}`);
    }

}

car1=new generalCar('Nissan',80);
console.log(car1.run());

