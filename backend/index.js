
const express = require("express");
const app = express();
const cors = require("cors");
require("./db/config");
const Student = require("./models/Student");
const Student_prof = require("./models/Student_profile");
const Student_Per_Address = require("./models/Student_Per_Address");
const Student_Temp_Address = require("./models/Student_Temp_Address");
const Student_quali= require('./models/Student_qualify');

// middlewares
app.use(express.json());
app.use(cors());

//register
app.post("/register",async (req, resp)=> { 
    if (req.body.password && req.body.email) {
        let student = await Student.findOne(req.body);
        
        if (student) {
            resp.send("user already enrolled")
        }
        else {
            let student = new Student(req.body);
            let result = await student.save();
            result = result.toObject();
            delete result.password
            resp.send(result);
        }
    }
    else 
    {
        let student = new Student(req.body);
            let result = await student.save();
            result = result.toObject();
            delete result.password
            resp.send(result);
    }
})
 
//login
app.post("/login", async (req, resp) => {
    if (req.body.password && req.body.email) {
        let student = await Student.findOne(req.body).select("-password");
        if (student) {
            resp.send(student)
        }
        else {
            resp.send({ result: "No User Found" })
        }
    }
    else {
        resp.send({ result: "No User Found" })
    }
})

//ADD AND UPDATE PROFILE
app.post("/add-prof", async (req, resp) => {
        let student_prof = new Student_prof(req.body);
        let result = await student_prof.save();
        resp.send(result);   
 
})

app.put("/add-student-prof/:id", async (req, resp) => {
        let result = await Student_prof.updateOne(
            {studentId:req.params.id},
            {
                $set:req.body
            }
        )
        resp.send(result);  
})
app.get("/profiles/:id", async(req, resp)=> {
        const data = await Student_prof.findOne({studentId:req.params.id});
        if(data)
        {
            resp.send(data)
        }
        else{
            resp.send({result:"No User Found"})
        }
})

//add and update permanent address
app.post("/add-stdper-address",async (req, resp)=> {
    let student_address = new Student_Per_Address(req.body);
    let result = await student_address.save();
    resp.send(result);
})
app.put("/add-per-address/:id",async (req, resp)=> {
    let result = await Student_Per_Address.updateOne(
        {studentId:req.params.id},
        {
            $set:req.body
        }
    )
    resp.send(result);  
})

app.get("/peraddresses/:id", async(req, resp)=> {
    const data = await Student_Per_Address.findOne({studentId:req.params.id});
   if(data)
   {
       resp.send(data)
   }
   else{
       resp.send({result:"No User Found"})
   }

})

//add and update temporary address
app.get("/tempaddresses/:id", async(req, resp)=> {
    const data = await Student_Temp_Address.findOne({studentId:req.params.id});
   if(data)
   {
       resp.send(data)
   }
   else{
       resp.send({result:"No User Found"})
   }

})

app.post("/add-temp-address",async (req, resp)=> {
    let student_address = new Student_Temp_Address(req.body);
    let result = await student_address.save();
    resp.send(result);
})
app.put("/add-temp-address/:id",async (req, resp)=> {
    let result = await Student_Temp_Address.updateOne(
        {studentId:req.params.id},
        {
            $set:req.body
        }
    )
    resp.send(result); 
})

//add and update qualification 

app.get("/qualify/:id",async (req, resp)=> {
    const data = await Student_quali.findOne({studentId:req.params.id});
        if(data)
        {
            resp.send(data)
        }
        else{
            resp.send({result:"No User Found"})
        }
})

app.put("/add-student-qualify/:id",async (req, resp)=> {
    let result = await Student_quali.updateOne(
        {studentId:req.params.id},
        {
            $set:req.body
        }
    )
    resp.send(result); 
})

app.post("/add-qualify",async (req, resp)=> {
    let student_qualify = new Student_quali(req.body);
    let result = await student_qualify.save();
    resp.send(result);
})
app.listen(5000)