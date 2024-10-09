const person = {
    name: "kodom ali",
    job: "badam khai",
    3: "threew",
    "ad-dress": "kochukhet"
}
const prop = "job"
console.log(person.job);
console.log(person["job"]);
console.log(person[prop]);
// console.log(person.3);[not possible]

console.log(person["3"]);
console.log(person["ad-dress"]);
