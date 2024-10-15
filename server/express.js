import express from 'express';
import cors from 'cors'
import mongoose from 'mongoose';
import EmployeeModel from './models/Employee.js';


const app = express();
app.use(express.json())
app.use(cors());

mongoose.connect("mongodb://localhost:27017/registration")

app.post("/register", (req, resp)=>{
    EmployeeModel.create(req.body)
    .then(employees=>{resp.json(employees)})
    .catch(err=>resp.json(err))
})

app.post("/login", (req, resp)=>{
    const {email, password} = req.body;
    EmployeeModel.findOne({email:email})
    .then(user=>{
        if(user){
            if(user.password===password){
                resp.json("Success")
            }
            else{
                resp.json("Invalid Passowrd")
            }
        }
        else{
            resp.json("User Does Not Exist")
        }
    })
})

app.listen(3001, ()=>{
    console.log("Server is running on port 3001");
})