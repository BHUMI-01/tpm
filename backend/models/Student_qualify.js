const mongoose = require('mongoose');

const studentQualifySchema = new mongoose.Schema({
	studentId:  { type: String, required: true },
    qualifyLevel: { type: String, required: true },
    qualifyName: { type: String, required: true },
	board:  { type: String, required: true },
    rollNum:  { type: String, required: true },
	passYear: { type: String, required: true },
	resultStatus:  { type: String, required: true },
    gradeSys: { type: String, required: true },
	grade:  { type: String, required: true },
});


module.exports = mongoose.model("student_qualify", studentQualifySchema);