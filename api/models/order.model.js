'use strict';
module.exports = function (sequelize, DataTypes) {
    // const customers = require("./customer.model")
    const order = sequelize.define("orders", {
        orderId: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        products: DataTypes.STRING,
        custId: {
            type: DataTypes.INTEGER,
            // references: {
            //     model: customers,
            //     key: 'custId'
            // }
        },
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

    // order.hasMany(customers, { as: "photo", foreignKey: 'custId' })

    order.associate = function (models) {
        models.customers.hasMany(models.order, {
            onDelete: "CASCADE",
            foreignKey: {
                allowNull: false
            }
        });
    };
    // order.sync().then(() => {
    //     console.log('New table created');
    // }).finally(() => {
    //     sequelize.close();
    // })

    return order;
}