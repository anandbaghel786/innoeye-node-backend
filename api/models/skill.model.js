const mongoose = require("mongoose");

const Schema = mongoose.Schema;

exports.mongoSchema = mongoose.model('skills', new Schema({
    userId: { type: Schema.Types.ObjectId, ref: 'users' },
    skill: String,
    exp: Number
  }))