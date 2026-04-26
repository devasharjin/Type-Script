

interface user {
    name: string,
    id: string
}

const user33 = (u: user) => {
    console.log(u)
}

console.log(user33({ name: 'deva', id: '123' }))

interface admin extends user {
    permission: {
        active: string
    }
}

const admin22 = (v: admin) => {
    console.log(v)
}

console.log(admin22({ name: 'deva', id: "1223", permission: { active: "manager" } }));


interface meta{
    meta:string
}

interface prod extends admin,meta{
    prod:string
}