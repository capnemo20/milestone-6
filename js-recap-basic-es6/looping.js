//array or string looping use for of

const numbers = [4, 7, 2, 15];
for (const num of numbers) {
  // console.log(num);
}

const nobab = "Siraj Ud Doula";
for (const char of nobab) {
  // console.log(char);
}


//for object looping use for in
const glass = {
    name: "glass",
    color: "golden",
    price: 12,
    isCleaned: true 
};

for (const key in glass){
    const value = glass[key];
    console.log(key, value);
}

//optional
const keys = Object.keys(glass);
console.log(keys);

for (const key of keys){
    
    const value = glass[key]
    console.log(key, value);
}