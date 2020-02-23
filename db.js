

module.exports = function () {
    var mysql = require('mysql2');
    var Sequelize = require('sequelize');
    const fruit = require("./api/models/fruit.model")
    const customer = require("./api/models/customer.model")
    const order = require("./api/models/order.model")
    var conn = new Sequelize('emp', 'root', 'root', {
        host: '127.0.0.1',
        dialect: 'mysql',
        pool: {
            max: 5,
            min: 0,
            idle: 10000
        }
    });
    // customer.hasOne(order);
    conn.authenticate()
        .then(function (err) {
            console.log('Connection has been established successfully.');
        })
        .catch(function (err) {
            console.log('Unable to connect to the database:', err);
        });

    conn.sync({ logging: console.log, force: false })

    // fruit(Sequelize, conn)
    // customer(Sequelize, conn)
    // order(Sequelize, conn)
}
