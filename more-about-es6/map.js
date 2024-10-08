//map loop through each element of array and do the operation that you passed in the callback functionand hold the result from each operation in an array and finally returns you the array


const numbers = [3,5,12,53,67];
function doubleIt(number){
    // console.log("number now", number);
    return number*2;
}

const double2 = n=>n*2;
const result = numbers.map(double2);
const output = numbers.map(n=>n*3);
console.log(output);
// console.log(result);

// const result = numbers.map(doubleIt);
// console.log(result);



// const doubled  = [];
// for (const num of numbers){
//     const double = num*2;
//     doubled.push(double);
// }

// console.log(doubled);

//map

