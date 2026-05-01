

class sample{
    public owner : string;
    private balance : number = 0;
    #otp = 12345

    constructor(owner : string){
        this.owner = owner
    }

    deposit(amount : number){
        this.balance-=amount
    }
    getBalnce(){
        return this.balance
    }
    getCode(){
       return this.#otp
    }
}

const sampleClass = new sample('deva')
sampleClass.deposit(20)
console.log(sampleClass.getBalnce());
console.log(sampleClass.getCode());
console.log(sampleClass.owner);


