interface people {
  name: string;
  age: number;
}
//we can pass function as a property in interface
// this is called function type interface

// let user :people ={
//   name:"ankit",
//   age:24,
//   adress:()=>{
//     return "khagaria";
//   }
// }
//     let answer=( user.adress());
//     console.log(answer);

//class interface

// we can use interface to define the structure of the class
class Manager  implements people{
  name: string;
  age: number;
  constructor(name: string, age: number ){
    this .name = name;
    this.age = age;
  }
}
let users = new Manager("ankit", 24);
let user2 = new Manager("preeti",25)
console.log(users.name);
console.log(users.age);
console.log(user2.name);
console.log(user2.age);
