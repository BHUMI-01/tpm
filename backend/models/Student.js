const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
	firstName:  { type: String, required: true },
	middleName:  { type: String, required: false },
	lastName:  { type: String, required: true },
	status: {type: String, required: true},
	email: { type: String, required: true },
	password:  { type: String, required: true },
});


module.exports = mongoose.model("students", studentSchema);
