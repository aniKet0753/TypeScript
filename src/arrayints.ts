

// interface adress {
//   city: string;
//   state: string;
// }
// interface user {
//   name: string;
//   age: number;
//   adress: adress[];
// }
// let user: user={
//   name: "Ankit",
//   age: 24,
//   adress: [
//     {
//       city: "Khagaria",
//       state: "Bihar"
//     },
//     {
//       city: "Patna",
//       state: "Bihar"
//     }
//   ]
// };
// console.log(user.name);
// console.log(user.age);
// //adress could be an empty array → adress[0] might be undefined.
// //If it’s undefined, accessing .city will throw an error.

// console.log(user.adress[0]?.city);

interface User {
  firstname : string;
  lastname : string;
  age : number;
}

function  ligal( user : User[] ){
  user.forEach((user) => {
    if (user.age >= 18) {
      console.log(`${user.firstname} ${user.lastname} is an adult.`);
    } else {
      console.log(`${user.firstname} ${user.lastname} is a minor.`);
    }
  });
}
let users: User[] = [
  { firstname: "Ankit", lastname: "Kumar", age: 24 },
  { firstname: "Preeti", lastname: "Kumari", age: 17 }
];
console.log(users);
ligal(users);
