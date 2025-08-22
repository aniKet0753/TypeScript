type User ={
  readonly name: string;//giving readonly means u strict the inner value to not be changed further 
  readonly age:number;
  readonly email:string;
}

type opyional = Partial<User>

const user: opyional={
  name:"bulbul",
  age:78,
  email:"kumar@gmail.com"
} 

//creating a key value pairs by map

type objecting ={
  name: string,
  email:string,
  age: number
}

const users = new Map<string, objecting>()
users.set("id",{name:"asnkit",email:"ankitrazz", age:43})// defining an object


//exclude 
type eventtype = 'click'| 'scroll' | 'moussemove';
type excludeevent = Exclude<eventtype , 'scroll'>;
function displayfun( display: excludeevent ){
  console.log(display);
}
displayfun("click")
