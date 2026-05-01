

function typeFunction(v : unknown){
  if( typeof v === 'string'){
    return 'string'
  }
  if (typeof v === 'number'){
    return 'number'
  }
  if(typeof v === 'boolean'){
    return 'boolean'
  }
}

console.log(typeFunction('hi'));
console.log(typeFunction(12));
console.log(typeFunction(true));
console.log(typeFunction('hi'));


function typeinference(v :unknown){
 if(Array.isArray(v)){
    return 'array'
 }
 if(v instanceof Date){
    return 'errror'
 }
}

console.log(typeinference([10,20,30]))
console.log(typeinference(new Date()));
