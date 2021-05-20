// var teacherObj = require("../models/teacher.model");
// const Joi = require('joi'); //used for validation
const db = require('../models');
module.exports.teacherLogin = async function (req, res) {
    console.log(req.body);
    // res.header("Access-Control-Allow-Origin", "*");
    res.send({ data: { name: "Anand" } });
    // teacherObj.create()
}

module.exports.saveCustomer = async function (req, res) {
    console.log(req.body);
    // res.header("Access-Control-Allow-Origin", "*");
    res.send({ data: { name: "Baghel" } });
    db.teacher.create(req.body)
}