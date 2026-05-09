import type { ReactNode } from "react";


interface userProps {
    id : number,
    name ?: string,
    subTitle ? : ReactNode
}


export function User({id,name,subTitle}: userProps){
    return(
        <>
        <h3>{id}</h3>
        <h5>{name}</h5>
        {subTitle}
        </>
    )
}

