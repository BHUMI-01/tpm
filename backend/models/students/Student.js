const mongoose = require("mongoose");
const validator = require("validator");
var uniqueValidator = require("mongoose-unique-validator");
const bcrypt = require('bcryptjs')

const studentSchema = new mongoose.Schema({
  firstName: { type: String, required: [true, "Please tell your First Name"] },
  middleName: { type: String, required: false },
  lastName: { type: String, required: [true, "Please tell your Last Name"] },
  email: {
    type: String,
    required: [true, "Please tell your Email"],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, "Please Provide correct email"],
  },
  password: {
    type: String,
    required: [true, "Please tell password"],
  },
  passwordConfirm: {
    type: String,
    required: [false, "Please tell password"],
    validate: {
      validator: function (el) {
        return el === this.password;
      },
    },
  },
});

studentSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  // this.password = await bcrypt.hash(this.password, 12);
  this.passwordConfirm = undefined;
  next();
})

module.exports = mongoose.model("students", studentSchema);
