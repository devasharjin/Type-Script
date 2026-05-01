
type inter1={id:number}
type inter2={name:string}

const user22 : inter1 &inter2 = {id:2,name:'deva'}

type productId = {id:number}
type prodDescription = {title:string,price:number}
type product=productId & prodDescription

const prod : product ={id:1,title:'book',price:200}
