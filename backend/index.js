
const express = require("express");
const app = express();
const cors = require("cors");
require("./db/config");
const Student = require("./models/Student");
// const userRoutes = require("./routes/users");
// const authRoutes = require("./routes/auth");


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

app.listen(5000)