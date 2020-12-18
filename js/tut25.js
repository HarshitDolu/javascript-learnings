class emp{

    // constructor
    constructor(nam,exp,div){
        this.name=nam;
        this.exp=exp;
        this.div=div;
    }
// functions obj ka prototype mai aajata hai
    slogan(){
        return `I am ${this.name} and comapny is the best`;

    }
joiningYear(){
    return 2020-this.exp;
}

static add(a,b){
    return a+b;
}

}
class prog extends emp{
    constructor(nam,exp,div,lang){
        super(nam,exp,div);
        this.lang=lang;

    }

 fav(){
        if(this.lang==='python')
        return 'Python';
        else{
            return 'Javascript';
        }
    }


    static mul(a,b){
        return a*b;
    }

}

jain=new prog("Jain",3,"Lays","Go");




//harshit=new emp("Harshit",4,"IT analyst");
console.log(jain.joiningYear());