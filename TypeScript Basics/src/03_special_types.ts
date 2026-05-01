
//function with no returns

function add(a:string) :void{
    console.log(a);
    console.log(a);
    console.log(a);
    console.log(a);
    
}

//function that never returrns

function log(msg:string) : never{
    throw new Error(msg)
}
