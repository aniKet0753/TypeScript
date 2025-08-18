// function greeting(names:string){
//   console.log(" hey Good morning Mr "+ names)
// }
// greeting("ankit")

//sum of two number 

// function Sum(a:number,b:number){
//   let result : number=  a+  b;
//   console.log(result)
// }
// Sum(1,3)

//function insie fun 

// function firstfunction( anotherfunction: ()=>void){// this void represent that the function returning notheing , but if it is rurterning something thren you have to explecetly says Number insted of void 
//   setTimeout(anotherfunction,3000)
// }
// function anotherfunction(){
//   console.log("hey there i am ankit")
// }

// firstfunction(anotherfunction)

//printing an object as an arrgument
// function greeting(user: {
//   name:string,
//   age:number
// }){
//   console.log("hello " + user.name)
// }
// greeting({
//   name:"ankit",
//   age:12
// })

interface usertype{
  firstname:string,
  lastname:string,
  age:number
}
function greeting(user: usertype){
  console.log(user.firstname+"how are you today sir")
}
let user1 ={
  firstname:"ankit",
  lastname:"kumar",
  
  age:24
}
greeting(user1)