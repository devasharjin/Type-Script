import { useState } from "react";

export function Counter(){
    const [count,setCount]= useState(0)
    setCount(1)

    return(
        <div>{count}</div>
    )
}

//unions

type statustype =| {status : 'idle' } | 
                {status : 'loading'} |
                {status : 'success' ; data : string} |
                {status : 'error ' ; message : string}


type user ={
    name : string
}


export function heavyDefault () : number {
    return 110
}


export function samplefun(){

    const [state,setState ] = useState<statustype>({status :'idle'} )
    const [value,setValue] = useState(()=>heavyDefault())
    const [user,setUser] = useState<user | null>(null)

    async function fetchData() {
        
        //loading

        setState({status : 'loading'})

        //success

        setState({status : 'success', data : ''})

        //error

        setState({status : 'error ', message : 'something went wrong'})


        //sample
        setValue(12)
        setUser(user)
    }
    fetchData()
    return(

        <>
        {state}
        {value}
        {user}
        </>
        
       
    )
}

