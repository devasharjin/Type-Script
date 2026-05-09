

const values =['user','admin','faculty','hod'] as const
type role =(typeof values)[number]

const d : role = 'admin'
console.log(d);


type BadgeProps ={
    label : string,
    variant ?: role
}

export function badge ({label,variant='admin'}: BadgeProps){
    return(
        <>
            {label}
            {variant}
        </>
    )
}