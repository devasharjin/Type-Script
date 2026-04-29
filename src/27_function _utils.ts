

//returntye
//parameters

function add (a : number, b : number){
    return a+b
}

type retutnType1 = ReturnType<typeof add>
type param1 = Parameters<typeof add>

const  paramdata : param1 = [1,2]
const ans : retutnType1 =add(...paramdata)

//instanceType
//constructorParams

class Add {
    public name : string =""
    constructor(name : string){
        this.name=name
    }
    greet() {
        return `hello ${this.name}`
    }
}

type addtype = InstanceType<typeof Add>
type constructorType = ConstructorParameters<typeof Add>

const sampleParams : constructorType =['deva']
const addclass : addtype= new Add(...sampleParams)
console.log(addclass.greet());
