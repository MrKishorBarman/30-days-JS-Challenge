// Task_1
function numChecker(n){
    if (n%2 == 0){
        console.log("The number is even")
    }else{
        console.log("The number is odd")
    }
}
numChecker(6)
numChecker(5)



// Task_2
function calculateSquare(n){
    return n*n
}
console.log(calculateSquare(99))



// Task_3
const maxNum = function(n1, n2){
    console.log(Math.max(n1, n2))
}
maxNum(23, 34)



// Task_4
let concatenation = function(str1, str2){
    return str1.concat(str2)
}
console.log(concatenation("Chai", "Code"))



// Task_5
let sum = (num1, num2) => {
    return (num1+num2)
}
console.log(sum(23, 33))



// Task_6
let checkChar = (character) => {
    let str = "Javascript Program"
    if (str.includes(character)) return true
    else return false
}
console.log(checkChar('e'))
console.log(checkChar('m'))



// Task_7
function productOfNum(n1, n2=3){
    return n1*n2
}
console.log(productOfNum(6))



// Task_8
function greet(name, age=20){
    return `Hey ${name}, welcome to age of ${age}! Wishing you a year of full of joy and adventures!`
}
console.log(greet("Kishor Barman"))



// Task_9
function repeatFunction(func, times){
    if (typeof times !== "number" || times <= 0){
        console.error("The 'times' parameter must be a number.");
        return;
    }
    for (let i=1; i<=times; i++){
        func()
    }
}
function func(){
    console.log("I love Chai Aur Code :)")
}
repeatFunction(func, 9)



// Task_10

function mainFunc(func1, func2, val){
    let res1 = func1(val)
    let finalRes = func2(res1)
    console.log(`The final result is ${finalRes}`)
};
function add(num){
    return 3 + num
};
function square(num){
    return num ** 2
};
mainFunc(add, square, 6)