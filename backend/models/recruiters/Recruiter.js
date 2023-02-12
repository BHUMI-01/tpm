const mongoose = require('mongoose');

const recruiterSchema = new mongoose.Schema({
	firstName:  { type: String, required: true },
	status: {type: String, required: false},
	email: { type: String, required: true },
	password:  { type: String, required: true },
});


module.exports = mongoose.model("recruiters", recruiterSchema);
