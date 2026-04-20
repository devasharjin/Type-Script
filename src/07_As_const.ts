const Roles=['admin','user','owner'] as const

type role=(typeof Roles)[number]

const Role:role='admin'

console.log(Role)