
type sample = string | number

const data : sample = 'deva'

type user = {
    id :string,
    name : string
}

const user22 : user = {
    id : '123',
    name : 'deva'
}

type admin = { permissions : string }

type userAdmin = user & admin

const adminUser : userAdmin = {
    id :'123',
    name : 'deva',
    permissions :'manager'
    }