console.log ("Exercise 1: Uppercase Names");
console.log("- - - - - - - - - - - - - -");

let constusers= [
  { name:"alex" },
  { name:"Christopher" },
  { name:"john" }
];




for(let i = 0; i <constusers.length;i++){
constusers[i].name=constusers[i].name.toUpperCase();
console.log(constusers[i]);
 }

 const userUpper = constusers.map(user=>user.name.toUpperCase());
 console.log(userUpper);


console.log ("Exercise 2: Add Greeting");
console.log("- - - - - - - - - - - - - -");


for (let i = 0;i<constusers.length; i++){
console.log("hello  " + constusers[i].name);

}

const userGreeting = constusers.map(user=> "Hi " +user.name);
console.log (userGreeting);

console.log ("Exercise 3: Name Lengths");
console.log("- - - - - - - - - - - - - -");

const userLength = constusers.map(user=>user.name.length);
console.log(userLength);
let userLength2=[];
for(let i = 0; i<constusers.length; i ++){
userLength2[i] = constusers[i].name.length

}
console.log(userLength2);

