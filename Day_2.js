// Task 1
let a = 1;
let b = 2;
let c = (a + b);
console.log(`The addition of a = ${a} and b = ${b} is ${c}`);

// Task 2
let x = 3;
let y = 1;
let z = (x - y);
console.log(`The subtraction of x = ${x} and y = ${y} is ${z}`);

// Task 3
let p = 2;
let q = 3;
let r = (p * q);
console.log(`The multiplication of p = ${p} and q = ${q} is ${r}`);

// Task 4
let num1 = 16;
let num2 = 8;
let divRes = (num1 / num2);
console.log(`The division of num1 = ${num1} by num2 = ${num2} is ${divRes}`);

// Task 5
let val1 = 7;
let val2 = 3;
let remVal = (val1 % val2);
console.log(`The remainder when val1 = ${val1} is divided by val2 = ${val2} is ${remVal}`)

// Task 6
let i = 0;
while (i <= 10) {
    i += 1
    console.log(`Resultant value after using += operator is ${i}`)
}

// Task 7
let j = 20;
while (j >= 10) {
    j -= 1
    console.log(`Resultant value after using -= operator is ${i}`)
}

// Task 8
let compNum1 = 234;
let compNum2 = 456;
if (compNum1 > compNum2) {
    console.log(`compNum1 = ${compNum1} is greater than compNum2 = ${compNum2}`);
} else if (compNum1 < compNum2){
    console.log(`compNum2 = ${compNum2} is greater than compNum1 = ${compNum1}`);
} else {
    console.log("Both numbers are equal")
}

// Task 9
let target = 420;
let compNum = 243;
if (compNum >= target){
    console.log(`compNum = ${compNum} is greater than equal to target = ${target}`)
} else if (compNum <= target){
    console.log(`compNum = ${compNum} is less than equal to target = ${target}`)
} else {
    console.log("Both numbers are equal")
}

// Task 10
let firstNum = 23;
let secondNum = "23";
if (firstNum == secondNum){
    console.log(`firstNum = ${firstNum} and secondNum = ${secondNum} are both equal by value but their type is different`);
} else if (firstNum === secondNum){
    console.log(`firstNum = ${firstNum} and secondNum = ${secondNum} both are equal by value and type`);
}

// Task 11
let logAndNum = '34';
if (logAndNum >= 34 && typeof logAndNum == 'string'){
    console.log('Successfully used && operator');
}

// Task 12
let logOrNum = 420;
if (logOrNum <= 34 || typeof logAndNum == 'string'){
    console.log('Successfully used || operator');
}

// Task 13
let negVal = "Kishor";
if (!(typeof negVal == 'number')){
    console.log('Successfully used ! operator to negate a condition.');
}

// Task 14
let ternaryNum = -43;
ternaryNum > 0 ? console.log("The chosen number is positive") : console.log("The chosen number is negative");