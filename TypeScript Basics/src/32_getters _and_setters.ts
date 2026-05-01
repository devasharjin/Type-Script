class Sample {
    #name!: string

    constructor(cname: string) {
        this.cname = cname
    }

    get cname(): string {
        return this.#name
    }

    set cname(value: string) {
        this.#name = value
    }
}

const user = new Sample("Deva")

console.log(user.cname) // Deva

user.cname = "Sharjin"

console.log(user.cname) // Sharjin