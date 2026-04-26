
//index signature

type Dictionary = {[k : string] : number}

const data1 : Dictionary = { likes : 1, shares : 2 , view : 4}

//record 

type dict2 = Record < string, number >

const data2 : dict2 ={
    id : 1,
    rollno : 2
}

//map

const data3 = new Map<string,number>()
data3.set('id',1)
data3.set('views', 3)