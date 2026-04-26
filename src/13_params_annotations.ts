

function sum(a:number,b:number) : number{
    return (a+b)
}

sum(1,2)


type Point = {x:number,y:number}

function distantfronOrgin(p:Point): number{
    return Math.hypot(p.x,p.y)
}

console.log(distantfronOrgin({x:1,y:2}));
