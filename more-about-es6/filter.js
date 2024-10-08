const numbers = [12,34,82,95,73, 88, 46];
// const selected = numbers.filter(n=>n>70)
const selected = numbers.filter(n=>n%2===1)
// console.log(selected);
const friends = ["Tom", "John", "Michael", "Oliver"];
const oddFriends = friends.filter(f=> f.length>4);
console.log(oddFriends);