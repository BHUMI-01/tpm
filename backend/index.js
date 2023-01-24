
const express = require("express");
const app = express();
const cors = require("cors");
require("./db/config");
const Student = require("./models/Student");
const Student_prof = require("./models/Student_profile");
const Student_Address = require("./models/Student_Address");

// middlewares
app.use(express.json());
app.use(cors());

app.post("/register",async (req, resp)=> {
    let student = new Student(req.body);
    let result = await student.save();
    result = result.toObject();
    delete result.password
    resp.send(result); 
})

app.post("/login",async (req, resp)=> {
    if(req.body.password && req.body.email)
    {
        let student = await Student.findOne(req.body).select("-password");
        if(student)
        {
            resp.send(student)
        }
        else{
            resp.send({result:"No User Found"})
        }
    }
    else
    {
        resp.send({result:"No User Found"})
    }
})

app.post("/add-student-prof",async (req, resp)=> {
    let student_prof = new Student_prof(req.body);
    let result = await student_prof.save();
    resp.send(result);
})

app.get("/profiles/:id", async(req, resp)=> {
         const data = await Student_prof.find({studentId:req.params.id});
        if(data)
        {
            resp.send(data)
        }
        else{
            resp.send({result:"No User Found"})
        }

})

app.post("/add-address",async (req, resp)=> {
    let student_address = new Student_Address(req.body);
    let result = await student_address.save();
    resp.send(result);
})

app.get("/addresses/:id", async(req, resp)=> {
    const data = await Student_Address.find({studentId:req.params.id});
   if(data)
   {
       resp.send(data)
   }
   else{
       resp.send({result:"No User Found"})
   }

})

app.listen(5000)