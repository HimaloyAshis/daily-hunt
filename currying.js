const add = (a)=>{
    return (b)=>{
        return (c) =>{
            return a * (b + c)

        }
    }
}

const level = add(5)
const result = level(2)(3)

console.log(result)
