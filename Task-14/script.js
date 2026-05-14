// Sum of first n numbers where n is a variable

let n = 10;
let sum1 = 0;

for (i = 0; i <= n; i++) {
    sum1 += i;
}

console.log(`sum of first ${n} numbers is ${sum1}.`);


// Print table of n where n is a variable



for (i = 1; i <= 10; i++) {
    m = n * i;
    console.log(`${n}*${i} = ${m}`)
}


// check if the number is prime or not


let isPrime = true;
if (n <= 1) {
    isPrime = false
} else {
    for (let i = 2; i < n; i++) {
        if (n % i == 0) {
            isPrime = false;
            break;
        }
    }

}


if (isPrime) {
    console.log(`${n} is a prime number`)
} else {
    console.log(`${n} is not a prime number`)
}



// Print all factors of n where n is variable


for(let i=1;i<=n;i++){
    if(n%i===0){
        console.log(`Factors of ${n} is ${i}`)
    }
}





// Print sum of all digits of A where A is a variable

let num= 123;
let sum =0;
let temp = num;

while(temp>0){
    let digit = temp%10;
    sum += digit;
    temp = Math.floor(temp/10)
}

console.log("sum of digits:", sum);




// Check the given number is armstrong number or not


let A=153;
let Sum=0;
let Temp = A;
let numbers = A.toString().length;

while(Temp>0){
    let Number = Temp%10;
    Sum += Math.pow(Number, numbers);
    Temp = Math.floor(Temp / 10);


}

if(Sum==A){
    console.log(A, "is armstrong number");
}else{
    console.log(A, "is not armstrong number");
}