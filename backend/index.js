
const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
require("./db/config");
const Student = require("./models/students/Student");
const Recruiter = require('./models/recruiters/Recruiter');
const Student_Data = require('./models/students/Student_Data');
// const Student_File_Uplod = require('./models/students/Student_File_Upload');
s
// middlewares
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(express.json());
app.use(cors());

//student register and login - register
app.post("/register", async (req, resp) => {
    if (req.body.password && req.body.email) {
        let student = await Student.findOne(req.body);

        if (student) {
            resp.send({result :"user already enrolled"})
        }
        else {
            let student = new Student(req.body);
            let result = await student.save();
            result = result.toObject();
            delete result.password
            resp.send(result);
        }
    }
    else {
        let student = new Student(req.body);
        let result = await student.save();
        result = result.toObject();
        delete result.password
        resp.send(result);
    }
})

// student register and login - login
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

//company register and login - register
app.post("/comp-register", async (req, resp) => {
    if (req.body.password && req.body.email) {
        let comp = await Recruiter.findOne(req.body);

        if (comp) {
            resp.send("user already enrolled")
        }
        else {
            let comp = new Recruiter(req.body);
            let result = await comp.save();
            result = result.toObject();
            delete result.password
            resp.send(result);
        }
    }
    else {
        let student = new Recruiter(req.body);
        let result = await student.save();
        result = result.toObject();
        delete result.password
        resp.send(result);
    }
})

//company register and login - login
app.post("/comp-login", async (req, resp) => {
    if (req.body.password && req.body.email) {
        let student = await Recruiter.findOne(req.body).select("-password");
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


//Experimental nested scheme
app.post("/add-data", async (req, resp) => {
    let student = new Student_Data(req.body);
    let result = await student.save();
    resp.send(result);
})

app.get("/add-data/:id", async (req, resp) => {
    const data = await Student_Data.findOne({ studentId: req.params.id });
    if (data) {
        resp.send(data)
    }
    else {
        resp.send({ result: "No User Found" })
    }
})

app.put("/update-data/:id", async (req, resp) => {
    const result = await Student_Data.updateOne(
        { studentId: req.params.id },
        {
            $set: req.body
        }
        );
    resp.send(result);
})

app.get("/add-data-qualify/:id", async (req, resp) => {
const data = await Student_Data.find({"stdeducat._id":req.params.id});
console.log(data);
if (data) {
    resp.send(data);
}
else {
    resp.send({ result: "No User Found" })
}
})

app.listen(5000)