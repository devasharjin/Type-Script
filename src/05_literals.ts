
type dictionary={id : number,age : number,readonly name?: string | undefined}

const user1:dictionary={id : 1,age : 20,name : 'deva'}

const user2 : dictionary = { id : 1,age : 20,}

// user2.name='rejjesh'

const user3:dictionary = { id : 3,age : 30, name : undefined}


type count = {[k : string] : number}

const result1 : count = {id : 1, age : 20}

type count1= Record<'likes' | 'views' | 'shares',number>

const result2:count1 ={likes : 10,views:20,shares:30}