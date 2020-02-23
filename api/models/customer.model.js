'use strict';
module.exports = function (sequelize, DataTypes) {
    const order = require("./order.model")
    const customer = sequelize.define("customers", {
        custId: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        custName: DataTypes.STRING,
        gender: DataTypes.STRING,
        age: DataTypes.INTEGER,
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

    // customer.sync().then(() => {
    //     console.log('New table created');
    // }).finally(() => {
    //     sequelize.close();
    // })

    customer.associate = function (models) {
        console.log(models);
        models.customers.hasMany(models.order);
    };

    return customer;
}