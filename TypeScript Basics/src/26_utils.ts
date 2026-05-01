

//<partial>

type data = {
    id: string,
    name: string,
    rollNo: number
}


type partial1 = Partial<data>

const partialEg: partial1 = {
    id: '123'
}

// required

type requiredType = Required<data>

const requiredEg: requiredType = {
    id: '12',
    name: "deva",
    rollNo: 12
}

//readOnly

type readOnlyType = Readonly<data>
const requiredEg2: requiredType = {
    id: '12',
    name: "deva",
    rollNo: 12
}

//pick

type picktype = Pick<data, 'id'>
const pickeg: picktype = {
    id: '12'
}



//omit

type omittype = Omit<data, 'id' | 'rollNo'>
const omiteg: omittype = {
    name: 'deva'
}

