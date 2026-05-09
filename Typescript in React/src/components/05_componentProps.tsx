import type { ComponentProps, CSSProperties } from "react";


type buttonBaseProps = ComponentProps<'button'>
type buttonProps = buttonBaseProps & {variant ? : 'primary' | 'secondary'}

export function Button({variant='primary' , style , ...rest }: buttonProps){
    const base : CSSProperties ={
        padding : 10
    }

return <button style={{...base,...style}}{...rest} />
}