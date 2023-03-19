const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const Jwt = require("jsonwebtoken");
const jwtKey = "i am lovish";
require("./db/config");
const Student = require("./models/students/Student");
const Recruiter = require("./models/recruiters/Recruiter");
const Admin = require("./models/Admin/Admin");
const Student_Data = require("./models/students/Student_Data");
const { valid } = require("joi");

const Images = require("./models/students/imageupload");
// const Student_File_Uplod = require('./models/students/Student_File_Upload');

// middlewares
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use(express.json());
app.use(cors());

//student register and login - register
app.post("/register", async (req, resp) => {
  try {
    if (req.body.password && req.body.email) {
      let student = await Student.findOne(req.body);

      if (student) {
        resp.send({ result: "user already enrolled" });
      } else {
        let student = new Student(req.body);
        let result = await student.save();
        result = result.toObject();
        delete result.password;
        Jwt.sign({ result }, jwtKey, { expiresIn: "7h" }, (err, token) => {
          if (err) {
            resp.send({ result: "Something is wrong!" });
          }
          resp.send({ result, auth: token });
        });
      }
    } else {
      let student = new Student(req.body);
      let result = await student.save();
      result = result.toObject();
      delete result.password;
      Jwt.sign({ result }, jwtKey, { expiresIn: "7h" }, (err, token) => {
        if (err) {
          resp.send({ result: "Something is wrong!" });
        }
        resp.send({ result, auth: token });
      });
    }
  } catch (err) {
    console.log(err);
    resp.send({ result: "Something is wrong!" });
  }
});

// student register and login - login
app.post("/login", async (req, resp) => {
  if (req.body.password && req.body.email) {
    let student = await Student.findOne(req.body).select("-password");
    if (student) {
      Jwt.sign({ student }, jwtKey, { expiresIn: "7h" }, (err, token) => {
        if (err) {
          resp.send({ result: "Something is wrong!" });
        }
        resp.send({ student, auth: token });
      });
    } else {
      resp.send({ result: "No User Found" });
    }
  } else {
    resp.send({ result: "No User Found" });
  }
});

//company register and login - register
app.post("/comp-register", async (req, resp) => {
  if (req.body.password && req.body.email) {
    let comp = await Admin.findOne(req.body);

    if (comp) {
      resp.send({ result: "user already enrolled" });
    } else {
      let comp = new Admin(req.body);
      let result = await comp.save();
      result = result.toObject();
      delete result.password;
      Jwt.sign({ result }, jwtKey, { expiresIn: "7h" }, (err, token) => {
        if (err) {
          resp.send({ result: "Something is wrong!" });
        }
        resp.send({ result, auth: token });
      });
    }
  } else {
    let comp = new Admin(req.body);
    let result = await comp.save();
    result = result.toObject();
    delete result.password;
    Jwt.sign({ result }, jwtKey, { expiresIn: "7h" }, (err, token) => {
      if (err) {
        resp.send({ result: "Something is wrong!" });
      }
      resp.send({ result, auth: token });
    });
  }
});

//company register and login - login
app.post("/comp-login", async (req, resp) => {
  if (req.body.password && req.body.email) {
    let recruiter = await Admin.findOne(req.body).select("-password");
    if (recruiter) {
      Jwt.sign({ recruiter }, jwtKey, { expiresIn: "7h" }, (err, token) => {
        if (err) {
          resp.send({ result: "Something is wrong!" });
        }
        resp.send({ recruiter, auth: token });
      });
    } else {
      resp.send({ result: "No User Found" });
    }
  } else {
    resp.send({ result: "No User Found" });
  }
});

//Experimental nested scheme
app.post("/add-data", verifyToken, async (req, resp) => {
  let student = new Student_Data(req.body);
  let result = await student.save();
  resp.send(result);
});

app.get("/add-data/:id", verifyToken, async (req, resp) => {
  const data = await Student_Data.findOne({ studentId: req.params.id });
  if (data) {
    resp.send(data);
  } else {
    resp.send({ result: "No User Found" });
  }
});

app.put("/update-data/:id", verifyToken, async (req, resp) => {
  const result = await Student_Data.updateOne(
    { studentId: req.params.id },
    {
      $set: req.body,
    }
  );
  resp.send(result);
});

app.get("/add-data-qualify/:id", verifyToken, async (req, resp) => {
  const data = await Student_Data.find({ "stdeducat._id": req.params.id });
  console.log(data);
  if (data) {
    resp.send(data);
  } else {
    resp.send({ result: "No User Found" });
  }
});

function verifyToken(req, resp, next) {
  let token = req.headers["authorization"];
  if (token) {
    Jwt.verify(token, jwtKey, (err, valid) => {
      if (err) {
        resp.status(401).send({ result: "Please enter a valid token!" });
      } else {
        next();
      }
    });
  } else {
    resp.status(403).send({ result: "Please enter a token!" });
  }
}

app.post("/upload-image", verifyToken, async (req, res) => {
  const { studentId, stdupload } = req.body;
  try {
    await Images.create({ studentId, stdupload });
    res.send({ Status: "ok" });
  } catch (error) {
    res.send({ Status: "error", data: error });
  }
});

app.get("/get-image/:id", verifyToken, async (req, resp) => {
  const data = await Images.findOne({ studentId: req.params.id });
  if (data) {
    resp.send(data)
  }
  else {
    resp.send({ result: "No User Found" })
  }
});
app.put("/update-image/:id", verifyToken, async (req, resp) => {

  let result = await Images.updateOne(
    { studentId: req.params.id },
    {
      $set: req.body
    }
  )
  resp.send(result);
});

app.get("/get-admins", verifyToken, async (req, resp) => {
  const data = await Admin.find({role: "admin"});
  if (data) {
    resp.send(data)
  }
  else {
    resp.send({ result: "No User Found" })
  }
});

app.get("/get-recruit", verifyToken, async (req, resp) => {
  const data = await Admin.find({role: "recruiter"});
  if (data) {
    resp.send(data)
  }
  else {
    resp.send({ result: "No User Found" })
  }
});

app.get("/get-student", verifyToken, async (req, resp) => {
  const data = await Student.find();
  if (data) {
    resp.send(data)
  }
  else {
    resp.send({ result: "No User Found" })
  }
});

app.listen(5000);
