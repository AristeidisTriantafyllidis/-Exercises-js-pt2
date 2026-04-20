console.log ("Exercise 1: Uppercase Names");
console.log("- - - - - - - - - - - - - -");

let constusers= [
  { name:"alex" },
  { name:"maria" },
  { name:"john" }
];




for(let i = 0; i <constusers.length;i++){
constusers[i].name=constusers[i].name.toUpperCase();
console.log(constusers[i]);
 }
// const mapConstusers= new Map(constusers.map((o)=>[o.name,o]));
// console.log(mapConstusers);
//https://www.geeksforgeeks.org/javascript/how-to-convert-an-array-of-objects-to-a-map-in-javascript/



console.log ("Exercise 2: Add Greeting");
console.log("- - - - - - - - - - - - - -");


for (let i = 0;i<constusers.length; i++){
console.log("hello  " + constusers[i].name);

}


console.log ("Exercise 3: Name Lengths");
console.log("- - - - - - - - - - - - - -");