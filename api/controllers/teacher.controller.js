var teacherObj = require("../models/teacher.model");
// const Joi = require('joi'); //used for validation

module.exports.teacherLogin = async function (req, res) {
    console.log(req.body);
    // res.header("Access-Control-Allow-Origin", "*");
    res.send({ data: { name: "Anand" } });
    // teacherObj.create()
}

module.exports.saveCustomer = async function (req, res) {
    console.log(req.body);
    // res.header("Access-Control-Allow-Origin", "*");
    res.send({ data: { name: "Alka" } });
    // teacherObj.create()
}