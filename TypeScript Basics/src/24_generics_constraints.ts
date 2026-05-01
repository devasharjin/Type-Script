

function sample <T extends {length : number}>(val : T) : number{
    return val.length
}

console.log(sample('hi'));
console.log(sample([1,2,3]));



type obj = {
    id :number,
    name : string,
    age ?: number
}

function sample2 <T, K extends keyof T>(array : T[], key :K){
    return array.map((item)=>item[key])
}


const objdet : obj[]=[
    {
     id :1,
    name : 'deva',
    age : 20

},{
     id :2,
    name : 'abi',
    age : 26

}
]

console.log(sample2(objdet,'id'))