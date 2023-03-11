const mongoose = require("mongoose");

const ImageDetailsScehma = new mongoose.Schema(
  {
    stdupload: {type:Array},
  }
);

module.exports = mongoose.model("ImageDetails", ImageDetailsScehma)