

    var conn = null;
    const mongoose = require("mongoose")
module.exports = function (fullUrl) {
    if(fullUrl.includes('db/true')) {
        conn.close();
        mongoose.Promise = global.Promise;
        mongoose.connect("mongodb://localhost:27017/sample", {
            useNewUrlParser: "true", useUnifiedTopology: true
        })
        mongoose.connection.on("error", err => {
            console.log("err", err)
            process.exit(0);
        })
        mongoose.connection.on("connected", (err, res) => {
            console.log("mongoose is connected")
        })
    } else {
        mongoose.connection.close()
        const mysql = require('mysql2');
        // const fruit = require("./api/models/fruit.model")
        // const customer = require("./api/models/customer.model")
        // const order = require("./api/models/order.model")
        var Sequelize = require('sequelize');
        conn = new Sequelize('emp', 'root', 'root', {
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
    
}
