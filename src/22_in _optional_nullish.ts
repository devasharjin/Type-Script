

type user = {role : 'user',name : 'deva'}
type admin = {role : 'admin',createdAt : 'today'}

type userAdmin =user | admin

function check (u : userAdmin){
    if ('name' in u){
        console.log(u.role);
        
    }
    if('createdAt' in u){
        console.log(u.createdAt);
        
    }

}

type u1 = {
    id ?: string,
    name : string
}

const ans : u1 = {name : 'deva'}

// ?? uses the right hand default only when the left is null or undefined 
// || uses the default when the left is any falsy falue (''),0,null,undefined

const count : number | null = 0
const label : string | undefined = ""

const an = count ?? 100 //keep the 0
const bn =label || 100  //keep 100
