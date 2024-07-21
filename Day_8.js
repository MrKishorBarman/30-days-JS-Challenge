// Task_1
let name = 'Kishor Barman'
let age = 20
console.log(`The name of the person is ${name} and he ${age} years old`)

// Task_2
const multiLineString = `
This is a multiline string.
It can span multiple lines without needing special characters.
Variables or expressions can be included too in multi-line string, like this ${name, age}
`
console.log(multiLineString)

// Task_3
const numbers = [1, 2, 3]
const [a, b, c] = numbers
console.log(a, b)

// Task_4
const book = {
    title: "Some book",
    author: "Someone"
}
const {title, author} = book
console.log(title, author)

// Task_5
let existingArray = [1, 2, 3, 4, 5, 6]
let newArray = [...existingArray, 7, 8, 9, 10]
console.log(newArray)

// Task_6
let sum = (a, b, ...c) => {
    let cSum = c.reduce((e1, e2)=>e1+e2)
    console.log(a+b+cSum)
}
sum(1,2,3,4,5,6,7,8,9,10)

// Task_7
function func(param1, param2=1){
    console.log(param1*param2)
}
func(5, 7)
func(5)

// Task_8
let NAME = "Booke Title"
let AUTHOR = "author name"
let YEAR = 2024
const detailOfBook = {
    NAME,
    AUTHOR,
    YEAR,
    getSummary(){
        return `${this.NAME} was written by ${this.AUTHOR} in ${THIS.YEASR}`
    }
}
console.log(detailOfBook)

// Task_9
let prop1 = "school"
let prop2 = "grade"
let prop3 = "section"

let value1 = "ABC Higher Secondary School"
let value2 = 9
let value3 = 'a'

let data = {
    [prop1]: value1,
    [prop2]: value2,
    [prop3]: value3
}
console.log(data)