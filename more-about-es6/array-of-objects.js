const products = [
    {id:1 , name: "dell", price: 40000},
    {id:2 , name: "lenovo", price: 45000},
    {id:3 , name: "hp", price: 60000},
    {id:4 , name: "mac", price: 140000},
];

//map
const names = products.map(product=>product.name);
console.log(names);

//forEach
products.forEach(product=>console.log(product.id));

//filter
// const expensive = 

//reduce
const total = products.reduce((acum, current)=>acum*current.price ,1);
console.log(total);