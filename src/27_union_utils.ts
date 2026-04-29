

//exclude

type data1 = 'likes' | 'commands' | 'shares' | 'views' | 'hype'

type excludeddata = Exclude<data1 ,'hype'>

const excludeEg : excludeddata = 'shares'

//extract

type extractData = Extract<data1,'likes' | 'commands'>

const extractEg :extractData ='commands'

//nonnullable

type data2 = number | null | undefined

function add(a:NonNullable<data2>){
    return a+2
}

console.log(add(0));

