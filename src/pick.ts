interface User{
  id:string,
  name: string,
  age: number,
  email:string,
  password:String
}

type userpick= Pick<User,"name" | "age" | "email">//picking the perticular data from user defined

type updateoptional= Partial<userpick>//making the picked up data as an optional

const display =(user:updateoptional)=>{
  console.log(`Name:${user.name} and email ${user.email}`)
}
 