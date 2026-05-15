// Find the maximum number in the array

let arr = [2,4,6,5,8,20,9,10];
let arr2 = [1,3,5,12,11,34,10]

// let max = arr[0];
// function Maximum(){
//     for(let i=1; i<=arr.length; i++){
//         if(arr[i]>max)
//             max = arr[i]
//     }
//     return max;
// }

function Maximum(data){
    result = data.reduce((max,el)=>{
        if(el>max){
            return el;
        }else{
            return max;
        }
    }) 
    return result;
}

console.log(Maximum(arr2));
console.log(Maximum(arr));



// Calculate the sum of all elements

function sumOfElements (){
    let sum= arr.reduce((res,el)=>(res+el));
    return sum;
}

console.log(sumOfElements());


// find the number of odd numbers
function oddNumbers(data){
    let newArr = [];

    for(let i=0;i<data.length;i++){
        if(data[i]%2!=0){
            newArr.push(data[i])
        }
    }
    return newArr.length,newArr
}

console.log(oddNumbers(arr));
console.log(oddNumbers(arr2));


