// Task_1

for (let i = 1; i<11; i++) {
console.log(i)
}



// Task_2

let num = 5
for (let i=1; i<11; i++) {
console.log(num*i)
}



// Task_3

let sum = 0;
let i = 1; 
while ( i <= 10) {
    sum += i;
    i++
}
console.log(sum)



// Task_4

let x = 10;
while ( x > 0 ) {
    console.log(x);
    --x;
}



// Task_5

let y = 1
do{
    console.log(y)
    ++y
} while (y < 6)



// Task_6

let z = Number(prompt("Type a number to get its factorial value"))
let factorial = 1
if (z == 0 || z == 1) {
    console.log(1)
} else {
    do {
    factorial *= z
        z--
    } while(z > 1)
}
console.log(factorial)



// Task_7
for (let i = 1; i <= 5; i++){
    let row = '';
    for (let j = 1; j <= i; j++){
        row += '* '
    }
    console.log(row)
}  


// Task 8
for (let m=1; m<=10; m++){
    if (m == 5) continue
    console.log(m)
}



// Task 9
for (let n=1; n<=10; n++){
    if (n==7) break
    console.log(n)
}