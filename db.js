var mysql = require('mysql2');
var Sequelize = require('sequelize');
var conn = new Sequelize('emp', "root", "root", {
    dialect: 'mysql',
    host: '127.0.0.1'
})

// conn.sync({
//     logging: console.log,
//     force: true
// }).then(() => {
//     console.log("Database connected successfully!");
//     const port = process.env.PORT || 8080;
//     app.listen(port, () => console.log(`Listening on port ${port}..`));
// }).catch(err => {
//     console.log("Database not connected!!!: " + err);
// })

module.exports = conn
