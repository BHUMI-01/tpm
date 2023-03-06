const mongoose = require("mongoose");

const stdDocumentSchema = new mongoose.Schema({
  marksheet: {Id:{type:String}, dataImage:{type:String}}
});

const ImageDetailsScehma = new mongoose.Schema(
  {
    stdupload: {type:Array},
  }
);

module.exports = mongoose.model("ImageDetails", ImageDetailsScehma)