"use strict";

class RangeValidator{
    #from=0;
    #to=0;

    constructor(from,to){
        this.#exceptionGenerator(from);
        this.#exceptionGenerator(to);
        this.#from=from;
        this.#to=to;
    }

    get from(){
        return this.#from;
    }

    set from(_from){
        this.#exceptionGenerator(_from);
        this.#from=_from;
    }

    get to(){
        return this.#to;
    }

    set to(_to){
        this.#exceptionGenerator(_to);
        this.#to=_to;
    }

    get range(){
        return new Array(this.#from,this.#to);
    }

    validate(num){
        return (this.#from<=num && this.#to>=num);
    }

    #exceptionGenerator = function(num){
            if(isNaN(num)){
                throw new Error("incoming number is NaN");
            }  
    }
}

function main(){
    const from = 10;
    const to = 20.2;
    const num = 40;
    const validator = new RangeValidator(from,to);
    
    console.log(`Range: ${validator.range}`);
    console.log(`From:${validator.from}`);
    console.log(`To:${validator.to}`);

    validator.from=10;
    validator.to=35;
    console.log(`Range: ${validator.range}`);
    console.log(`From:${validator.from}`);
    console.log(`To:${validator.to}`);
    console.log(`Number ${num} exist in ${validator.range} = ${validator.validate(num)}`);
}

try{
    main();
}
catch(e){
    console.log(e.name,":",e.message);
}
