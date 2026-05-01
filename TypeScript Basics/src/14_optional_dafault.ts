
//optional 

function getPersonOption(name?:string){
    const upperCase=name?.toUpperCase()
    return `hello ${upperCase}`
}

console.log(getPersonOption())
console.log(getPersonOption('deva'))


//default 

function user(id :number, uname :string='deva'){
    console.log(id)
    console.log(uname)
}

console.log(user(1,'deva'))