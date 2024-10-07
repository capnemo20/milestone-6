const glass = { name: "glass", color: "golden", price: 12, isCleaned: true };
// console.log(glass);
const keys = Object.keys(glass);
// console.log(keys);
//[ 'name', 'color', 'price', 'isCleaned' ]
const pair = Object.entries(glass);
console.log(pair);
//array of array
// [
//   [ 'name', 'glass' ],
//   [ 'color', 'golden' ],
//   [ 'price', 12 ],
//   [ 'isCleaned', true ]
// ]

//delete property
delete glass.isCleaned;
console.log(glass);

//bhejailla way to delete properties
const {isCleaned, ...shortGlass} = glass;
console.log(glass);

//freeze
Object.freeze(glass);
glass.source = "Bangladesh";
console.log(glass);

//seal