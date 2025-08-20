//creating customers and admin interfaces  and greetnf them welsome with name 

interface customers {
  name: string;
  age:number
}

interface admin {
  name:string
  expewrience: number
}

type users = customers | admin;

function greeting ( user : users ){
  if ( 'age' in user ) {
    console.log(`Welcome ${user.name}, you are ${user.age} years old.`);
  } else {      
    console.log(`Welcome ${user.name}, you have ${user.expewrience} years of experience.`);
  }
  return user.name;
}
greeting({name:"Ankit", expewrience: 5})