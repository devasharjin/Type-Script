import type { ReactNode } from "react"


type panelParams = {
    title : string,
    children ?: ReactNode
}

export function Panel ({title,children}: panelParams){
    return(
        <>
            <h3>{title}</h3>
            <h2>{children ?? <h2>'hello deva'</h2>}</h2>
        </>
    )
}