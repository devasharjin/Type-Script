
type User = {
    name: string
    age: number
}

// ✅ valid JSON (double quotes)
const raw = '{"name":"deva","age":20}'


//risky user

const riskyUser=JSON.parse(raw) as {name:string,age:number}


// always parse as unknown
const parsed: unknown = JSON.parse(raw)

// ✅ safe type guard

function isUser(v: unknown): v is User {
    return (
        typeof v === "object" &&
        v !== null &&
        "name" in v &&
        "age" in v &&
        typeof (v as any).name === "string" &&
        typeof (v as any).age === "number"
    )
}

// ✅ usage
if (isUser(parsed)) {
    console.log("Name:", parsed.name)
    console.log("Age:", parsed.age)
} else {
    console.log("Invalid user data")
}