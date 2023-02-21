const mongoose = require('mongoose');

const studentProfileSchema = new mongoose.Schema({
	studentId:  { type: String, required: true },
    fatherName: { type: String, required: true },
    motherName: { type: String, required: true },
	gender:  { type: String, required: true },
    dob:  { type: String, required: true },
	enrollNum: { type: String, required: true },
	mobNum:  { type: String, required: true },
    alternateNum:  { type: String, required: true },
    aadharNum:  { type: String, required: true },
    disability:  { type: String, required: true },
    bloodGroup:  { type: String, required: true },
    caste:  { type: String, required: true },
    religion:  { type: String, required: true },
    nationality:  { type: String, required: true },
    state:  { type: String, required: true },
    city:  { type: String, required: true },
});


module.exports = mongoose.model("student_profile", studentProfileSchema);
