

function makeRange(...args :[ start:number, end : number ,step? : number]): number[] {
    const [start,end,step=1] = args
    const out : number[]=[]
    for (let n=start; n<=end;n+=step){
      out.push(n)
    }
    return out
}

console.log(makeRange(1,5,2))