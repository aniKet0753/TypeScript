let users: User2 = {
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
  adress: Adress;
}
interface User2 {
  firstname: string;
  lastname: string;
  age: number;
  adress?: Adress; // this is optional property
  // if you want to make the property optional then you can use the ? after the property
}

function userdisplay(users: User2): boolean {
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
interface Adress {
  city?: string;
  pincode?: number;
  country?: string;
}