const raw = "{name:'deva',age:20}"

const riskyUser=JSON.parse(raw) as {name:string,age:number}


type user={name:string,age:number}

function isUser(v:unknown):v is user{
    return(v!=null )
    
}