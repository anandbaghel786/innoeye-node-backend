
const skillsService = require('../services/skills.service');
const mongoose = require("mongoose");

exports.saveSkills = async (skills, flag) => {
    let data = [];
    let result = "";
    skills.forEach(async (item) => {
        if (!item._id)
            result = await skillsService.save(item);
        else
            result = await skillsService.update(item);

        data.push(result);
    });
    return result;
}