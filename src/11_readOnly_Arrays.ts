const xss=[1,2,3]
const ys:readonly string[]=['a','b']
const yss : ReadonlyArray<number> =[1,2,3]
xss.push(2)

function sum(num :readonly number[]):number{
    let  total=0
    for (const n of num){
        total+=n
    }
    return total
}

sum(yss)
console.log(sum(yss))

yss.map((n)=>n*2)