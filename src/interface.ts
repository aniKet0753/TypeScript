let users: User = {
  firstname: "ankit",
  lastname: "kumar",
  age: 17,
  adress: {
    city: "khagaria",
    pincode: 851205,
    country: "India",
  },
};
// creatring the interface of the data
interface User {
  firstname: string;
  lastname: string;
  age: number;
  adress?: {
    // here the ? represents the optional property
    // if you want to make the property optional then you can use ? after the property name
    city: string;
    pincode?: number; //INTRNALLY MAKE IT OPTIONAL
    // if you want to make the property optional then you can use ? after the property name
    country: string;
  };
}

function userdisplay(users: User): boolean {
  if (users.age > 18) {
    return true;
  } else {
    return false;
  }
}
const ligal = userdisplay(users);
if (ligal) {
  console.log("user is ligal");
} else {
  console.log("user is not ligal");
}
// here we are using the interface to define the structure of the object
//definig same adress somewhere else in another interface
//in this case interface can hvae interface  inside interface
// this is called nested interface
// interface Adress {
//   city: string;
//   pincode: number;
//   country: string;
// }