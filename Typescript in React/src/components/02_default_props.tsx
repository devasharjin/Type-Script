import type { ReactNode } from "react"


type userDetailProps = {
    name ? : string,
    desciption ? : ReactNode
}

export function UserDetails ({name='guest', desciption=<h2>welcome</h2>} : userDetailProps){
    return(
        <>
            {name}
            {desciption}
        </>
    )
}