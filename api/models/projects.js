const mongoose = require("mongoose");

const MODELNAME = "project";

const Schema = new mongoose.Schema({
  title: { type: String, unique: true },
  description: { type: String },
  url: { type: String },
});

const OBJ = mongoose.model(MODELNAME, Schema);
module.exports = OBJ;