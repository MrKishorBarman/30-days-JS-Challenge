// Task_1
const arr = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
// console.log(arr)

// Task_2
let firstElement = arr[0]
let lastElement = arr[arr.length - 1]
// console.log(firstElement, lastElement)

// Task_3
let usingPushMethod = arr.push(11)
// console.log(arr)

// Task_4
let usingPopMethod = arr.pop()
// console.log(arr)

// Task_5
let usingShiftMethod = arr.shift()
// console.log(arr)

// Task_6
let usingUnshiftMethod = arr.unshift(12)
// console.log(arr)

// Task_7
let usingMapMethod = arr.map(e => e * 2)
// console.log(usingMapMethod)

// Task_8
let usingFilterMethod = arr.filter(e => e % 2 == 0)
// console.log(usingFilterMethod)

// Task_9
let usingReduceMethod = arr.reduce((e1, e2) => {
    let sum = e1 + e2
    return sum
})
// console.log(usingReduceMethod)

// Task_10
for ( i of arr) {
    // console.log(i)
}

// Task_11
// arr.forEach(e => console.log(e))

// Task_12
let twoDimensionalArray = [[1,2,3], [4, 5, 6], [7, 8, 9, 10]]
// console.log(twoDimensionalArray)

// Task_12
console.log(twoDimensionalArray[1][0])