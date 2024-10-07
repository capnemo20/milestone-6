const getAge = (person)=> person.age;
const student = {name: "ananta", age: 44};
const age = getAge(student);
console.log(age);

const getThird = numbers => numbers[2];
const third = getThird([21,55,29,74,56]);
console.log(third);

//no parameters
const getPI = ()=>Math.PI.toFixed(4);
console.log(getPI());

//large arrow function
const doMath = (x, y, z) => {
    const sum = x+y+z;
    const mult = x*y*z;
    const result = sum + mult;
    return result;
}

const largeArrow = doMath(23,62,9);
console.log(largeArrow);