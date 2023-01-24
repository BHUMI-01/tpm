const mongoose = require('mongoose');

const studentAddressSchema = new mongoose.Schema({
	studentId:  { type: String, required: true },
    type: { type: String, required: true },
    mobNo: { type: String, required: true },
	flatNo:  { type: String, required: true },
    area:  { type: String, required: true },
	landmark: { type: String, required: true },
	locality:  { type: String, required: true },
    city:  { type: String, required: true },
    postalCode:  { type: String, required: true },
    country:  { type: String, required: true },
    province:  { type: String, required: true }
});


module.exports = mongoose.model("student_address", studentAddressSchema);