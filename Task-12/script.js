/* Interst calculator */

// where p= principle amount
//       r= rate of intrest/100
//       n=Number of times interest is compounded per year
//       t= time in years

let p= 5000; 
let r=0.02;
let n= 12;
let t= 3;

let a= p*Math.pow(1+(r/n),(n*t))

console.log("The compound intrest after 3 year is:",a);
