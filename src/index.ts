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

function firstfunction( anotherfunction: ()=>void){// this void represent that the function returning notheing , but if it is rurterning something thren you have to explecetly says Number insted of void 
  setTimeout(anotherfunction,3000)
}
function anotherfunction(){
  console.log("hey there i am ankit")
}

firstfunction(anotherfunction)