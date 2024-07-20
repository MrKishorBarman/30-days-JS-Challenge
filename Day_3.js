//! Task 1

const n = prompt("Enter a number ");

if (n > 0){
    console.log("The number is positive");
} else if (n < 0) {
    console.log("The number is negative");
} else {
    console.log("The number is zero");
}



//! Task 2

const age = prompt("Enter your age here ");

if (age >= 18) {
    console.log("You are eligible to vote");
} else {
    console.log("You are not eligible to vote");
}



//! Task 3

const a = Number(prompt("Type your first number"))
const b = Number(prompt("Type your second number"))
const c = Number(prompt("Type your third number"))

function findLargest(a, b, c) {
    let largest;
    if (a >= b) {
        if (a >= c) {
            largest = a;
        } else {
            largest = c;
        }
    } else {
        if (b >= c) {
            largest = b;
        } else {
            largest = c;
        }
    }
    return largest;
}

const largestNumber = findLargest(a, b, c);
console.log("The largest number is: " + largestNumber);



//! Task 4

let day;
switch (new Date().getDay() + 1){
    case 1:
        day = 'Sunday';
        break
    case 2:
        day = 'Monday';
        break
    case 3:
        day = 'Tuesday';
        break
    case 4:
        day = 'Wednesday';
        break
    case 5:
        day = 'Thursday';
        break
    case 6:
        day = 'Friday';
        break
    case 7:
        day = 'Saturday';
}
console.log(`Today is ${day}`)



//! Task 5

const score = Number(prompt("Type your score here"))

function setGrade(score) {
    if (score >= 90) return 'A'
    if (score >= 70) return 'B'
    if (score >= 50) return 'C'
    if (score >= 30) return 'D'
    if (score < 30) return 'F'
}

switch (setGrade(score)) {
    case 'A':
        console.log("You are assigned grade 'A'")
        break
    case 'B':
        console.log("You are assigned grade 'B'")
        break
    case 'C':
        console.log("You are assigned grade 'C'")
        break
    case 'D':
        console.log("You are assigned grade 'D'")
        break
    case 'F':
        console.log("You are assigned grade 'F'")
}



//! Task 6

const evenOdd = Number(prompt("Enter a number"))
evenOdd % 2 === 0 ? console.log("The number is even") : console.log("The number is odd");



//! Task 7

const year = Number(prompt("Enter the year"))

if (year % 4 === 0) {
    console.log(`The year ${year} is a leap year`);
} else if (year % 400 === 0 && year % 100 === 0) {
    console.log(`The year ${year} is a leap year`);
} else {
    console.log(`The year ${year} is not a leap year`);
}