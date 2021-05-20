const userModel = require('../models/user.model');
const userService = require('../services/user.service');
const mongoose = require("mongoose");
const skillsController = require('./skills.controller');
const skillsService = require('../services/skills.service');

exports.teacherLogin = async function (req, res) {
    userModel.user.create()
}

exports.saveUser = async (req, res) => {
    let skills = [];
    if (!req.body._id) {
        delete req.body._id;
        try {
            let user = await userService.save(req, res, skills);
            req.body.skills.map(e => e.userId = user._id);
            if (req.body.skills && req.body.skills.length > 0) {
                try {
                    let results = await filterAndSendSkills(user._id, req.body.skills);
                    res.send({
                        status: true,
                        data: { user: user, skills: results.data }
                    })
                    delete req.body.skills;
                } catch (error) {
                    throw error;
                }
            }
        } catch (error) {
            throw error;
        }
    } else {
        // req.body._id = mongoose.Types.ObjectId(req.body._id);
        user = await userService.update(req.body, skills);
        if (req.body.skills && req.body.skills.length > 0) {
            skills = await filterAndSendSkills(user._id, req.body.skills);
        }
        res.send({
            status: true,
            data: user
        })
    }
}

exports.getUsers = async function (req, res) {
    var myusers = [];
    let users = await userService.getUsers();
    console.log(users);
    if(users.length>0) {
        users.forEach(element => {
            myusers.push(element.toObject());
        });
        myusers.forEach(async (e, i) => {
            let skills = await skillsService.findSkills(e._id);
            e.skills = skills.data;
            if (i + 1 == users.length) {
                res.send({
                    status: 200,
                    data: myusers
                })
            }
        });
    } else {
        res.send({
            status: 200,
            data: []
        })
    }
}

exports.deleteUser = async function (req, res) {
    var myusers = [];
    let user = await userService.delete(req.body._id);
    let skills = await skillsService.delete(req.body._id);
    res.send({
        status: 200,
        data: user
    })
    // users.forEach(element => {
    //     myusers.push(element.toObject());
    // });
    // myusers.forEach(async (e, i) => {
    //     let skills = await skillsService.findSkills(e._id);
    //     e.skills = skills.data;
    //     if (i + 1 == users.length) {
    //         res.send({
    //             status: 200,
    //             data: myusers
    //         })
    //     }
    // });
}

async function filterAndSendSkills(userId, skills) {
    try {
        skills.forEach(item => {
            item.userId = userId;
        });
        let result;
        if (!skills[0]._id)
            result = await skillsController.saveSkills(skills, "new");
        else
            result = await skillsController.saveSkills(skills, "update");
        return result;
    } catch (error) {
        throw error;
    }
}