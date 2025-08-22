import express from "express"
import {string, z} from 'zod';

const app= express()

const zodschema= z.object({
  name: z.string().min(1, {message:"name cannot be empty"}),
  email: z.string().email({message:"invalid email; fomate"}),
  age: z.number().min(18,{message:"you must be atlest 18 years old"}).optional()

});

type finalschrma = z.infer<typeof zodschema>
// this type deffinning thing u can fully ignore and ir can be handle by zod libreary 
//the method is also called as type inffer inside xod vilafdiation 
// so in future if type is chande of zod viladiactin by stiring to number we don't need to spoecify the type again
type schema ={
  name:string,
  email:string,
  age?: number;
}

// app.put('/user',(req,res)=>{
//   const {sucess}= zodschema.safeParse(req.body);
//   const userbody: finalschrma = req.body;
//   if(!sucess){
//     res.status(411).json({});
//     return
//   }
// })