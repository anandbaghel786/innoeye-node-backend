const skillModel = require('../models/skill.model');
const mongoose = require("mongoose");
module.exports = {
    save: async (skills) => {
        try {
            console.log("Save here");
            console.log([skills]);
            let data = await (skillModel.mongoSchema).insertMany([skills]);
            return { data: data && data.length > 0 ? data : [] }
        } catch (error) {
            throw error;
        }
    },

    update: async (skill) => {
        skill._id = mongoose.Types.ObjectId(skill._id);
        skill.userId = mongoose.Types.ObjectId(skill.userId);
        try {
            console.log("Update here");
            let data = await (skillModel.mongoSchema).updateOne({ _id: skill._id }, skill);
            return { data: data && data.length > 0 ? data : [] };
        } catch (error) {
            throw error;
        }
    },

    delete: async (userId) => {
        try {
            let data = await (skillModel.mongoSchema).deleteMany(userId);
                return data;
        } catch (error) {
            throw error;
        }
    },

    findSkills: async (userId) => {
        try {
            let data = await (skillModel.mongoSchema).find({ userId: userId }).lean();
            return { data: data && data.length > 0 ? data : [] };
        } catch (error) {
            throw error;
        }
    }
}