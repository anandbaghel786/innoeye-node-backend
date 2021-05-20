exports.sqlSchema = function (sequelize, DataTypes) {
    return User = sequelize.define("users", {
        user_id: {
            type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true
        },
        name: DataTypes.STRING,
        age: DataTypes.INTEGER,
        gender: DataTypes.STRING,
        email: DataTypes.STRING,
        createdAt: {
            type: DataTypes.DATE(3),
            defaultValue: DataTypes.NOW,
            field: 'createdAt',
        },
        updatedAt: {
            type: DataTypes.DATE(3),
            defaultValue: DataTypes.NOW,
            field: 'updatedAt',
        }
    })
}

const mongoose = require("mongoose");

const Schema = mongoose.Schema;



exports.mongoSchema = mongoose.model('users', new Schema({
    name: String,
    age: Number,
    gender: String,
    email: String
  }) )