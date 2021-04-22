let person = {
    name: "Val",
    age: 28,
    evaluations: [7, 10, 9]
};

// console.log(person.name);
// console.log(person.age);
// console.log(person["name"]);
// console.log(person["age"]);
// console.log(person.evaluations);


let colors = ['green', 'blue', 'red'];
const obj = { greetings: 'hi ik ben een object'};

colors.push('yellow');
colors.push(5);
colors.push(obj);

console.log(colors);
console.log(colors.length);
console.log(colors[0]);
console.log(colors[colors.length - 1]);
console.log(colors[5].greetings);