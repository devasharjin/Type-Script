

type obj = {
    id :number,
    name : string,
    age ?: number
}

const objdet : obj ={
    
     id :1,
    name : 'deva',
    age : 20


}

function sample <T, K extends keyof T>(obj : T, key :K, newValue : T[K]){
    return obj[key]=newValue
}

console.log(sample(objdet,'id',1))