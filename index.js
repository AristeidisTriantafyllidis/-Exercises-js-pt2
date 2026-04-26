console.log("Exercise 1: Uppercase Names");
console.log("- - - - - - - - - - - - - -");

let constusers = [
  { name: "alex" },
  { name: "Christopher" },
  { name: "john" }
];




for (let i = 0; i < constusers.length; i++) {
  constusers[i].name = constusers[i].name.toUpperCase();
  console.log(constusers[i]);
}

const userUpper = constusers.map(user => user.name.toUpperCase());
console.log(userUpper);


console.log("Exercise 2: Add Greeting");
console.log("- - - - - - - - - - - - - -");


for (let i = 0; i < constusers.length; i++) {
  console.log("hello  " + constusers[i].name);

}

const userGreeting = constusers.map(user => "Hi " + user.name);
console.log(userGreeting);

console.log("Exercise 3: Name Lengths");
console.log("- - - - - - - - - - - - - -");

const userLength = constusers.map(user => user.name.length);
console.log(userLength);
let userLength2 = [];
for (let i = 0; i < constusers.length; i++) {
  userLength2[i] = constusers[i].name.length

}
console.log(userLength2);


console.log("Exercise 4: Add Full Name");
console.log("- - - - - - - - - - - - - -");

const ex4 = [
  { first: "John", last: "Doe" },
  { first: "Maria", last: "Smith" }
];

for (let i = 0; i < ex4.length; i++) {
  ex4[i].fullName = ex4[i].first + " " + ex4[i].last;
}
console.log(ex4);

//const ex4map=ex4.map(person=>{perosn.fullname : ex4.first +" "+ex4.last})
//console.log(ex4map);




console.log("Exercise 5: Format Prices");
console.log("- - - - - - - - - - - - - -");

const constproducts = [
  { name: "Laptop", price: 1200 },
  { name: "Mouse", price: 25 }
];

constproductsString = [];

for (let i = 0; i < constproducts.length; i++) {
  constproductsString[i] = constproducts[i].name + `€${constproducts[i].price}`
}

console.log(constproductsString);

//const stringproducts = constproducts.map(price => `price.${price.price`)


console.log("Exercise 6: Boolean Label");
console.log("- - - - - - - - - - - - - -");

constusers= [
  { name:"Alex", active:true },
  { name:"Maria", active:false }
];

for(let i = 0; i < constusers.length; i++){
  constusers[i].status=constusers[i].active;
    delete constusers[i].active
   if (constusers[i].status===true){
   
    constusers[i].status="Active"
  }
  else
    constusers[i].status="Inactive"
}

console.log(constusers);