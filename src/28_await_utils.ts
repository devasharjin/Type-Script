

type data1 = Awaited<Promise<number>>
type data2 = Awaited<Promise<Promise<string>>>

type data3 = Awaited<Promise<number | string >>

async function add() {
    return 12 as const
}

type addFunctionType = ReturnType<typeof add>

async function countResolve(){
    return Promise.all([
        Promise.resolve(12 as const),
        Promise.resolve('x' as const),
    ])
}

type countResolveType = ReturnType<typeof countResolve>