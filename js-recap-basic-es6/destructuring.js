//destructure from object

const actor = {
    name: "Ananta",
    age: 30,
    phone: "01819325323",
    money: 3478628229
}

//if right side is an object left side will be object as well
//use property name as variable that contains the property value

const {phone, age:boyosh} = actor;
console.log(phone);
// console.log(age);
console.log(boyosh);


//destructure form array
const numbers = [12,43];
const [first, second] = numbers;
const [x,y] = [55,82];


function doubleThem(a,b ){
    return [a*2, b*2];
}
const [prothom, ditiyo] = doubleThem(5,7);
console.log(prothom, ditiyo);

//skipping in destructuring
const [n1,,, n2] = [12, 53, 78, 55,63,567]
console.log(n1, n2);