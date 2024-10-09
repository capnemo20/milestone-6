const products = [
    {id:1 , name: "dell", price: 40000},
    {id:2 , name: "lenovo", price: 45000},
    {id:3 , name: "hp", price: 60000},
    {id:4 , name: "mac", price: 140000},
];


class Product{
    country = "Bangladesh";
    constructor(name){
        this.name = name;
    }
    speak(talk){
        console.log(`talking about ${talk}`);
    }
}

// const lenovo = new Product();
 const lenovo = new Product("le le lenovo");
console.log(lenovo);
lenovo.speak("oba kita kau");

class Teacher{
    constructor(name, subject){
        this.name = name;
        this.subject = subject;
    }
    lecture(){
        console.log("sir is teaching math");
    }
}

const tapon = new Teacher("Tapon Sir", "Physics");
const rashid = new Teacher("Rashid Sir", "Physics");
console.log(tapon);
console.log(rashid);