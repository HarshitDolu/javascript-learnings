let obj={
name:"Harshit jain",
channel:"Hjain",
address:"Prem Niwas"

}

console.log(obj.name);

function fruits(name,color,price,qty){
    this.nam=name;
    this.col=color;
    this.pr=price;
    this.qty=qty;
    this.cal=function(){
        let ans=this.pr*this.qty;
        console.log(`Total cost of ${this.nam} is ${ans} `);
    }


}
fruits.prototype.name="orange";
fruits.prototype.getName=function(){
    return this.nam;
}
fruits.prototype.setName=function(newName){
    this.nam=newName;
}



let ram1=new fruits("ale","red",20,10);
console.log(ram1);
//Object.prototype nhi karna