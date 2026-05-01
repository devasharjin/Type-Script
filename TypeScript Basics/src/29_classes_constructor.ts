

class sample{
    name : string;
    constructor(uname : string){
        this.name = uname
    }
    greet(){
        return `hello ${this.name}`
    }
}

const sampleClass = new sample('deva')
console.log(sampleClass.greet());

