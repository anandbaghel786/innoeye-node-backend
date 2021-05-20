const db = require('../models/user.model');

module.exports = {
    save: async (req, res, skills) => {
        let data = await (new db.mongoSchema(req.body)).save();
        data.skills = skills;
        return data;
    },

    update: async (user, skills) => {
        try {
            let data = await (db.mongoSchema).findByIdAndUpdate(user._id, user);
                data.skills = skills;
                return data;
        } catch (error) {
            throw error;
        }
    },

    delete: async (userId) => {
        try {
            console.log(userId);
            let data = await (db.mongoSchema).findOneAndDelete({userId: userId}, {multi: true});
                return data;
        } catch (error) {
            throw error;
        }
    },

    getUsers: async (req, res) => {
        try {
            let users = await (db.mongoSchema).find().populate({ path: 'userId', select: 'skills' });
            console.log(users);
            return users && users.length > 0 ? users : [];
        } catch (error) {
            throw error;
        }
    }
}