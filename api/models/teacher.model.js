module.exports = function (sequelize, conn) {
    const teacher = conn.define("teachers", {
        teacher_id: { type: sequelize.INTEGER, primaryKey: true },
        name: sequelize.STRING,
        age: sequelize.INTEGER,
        salary: sequelize.FLOAT,
        createdAt: {
            type: sequelize.DATE(3),
            defaultValue: sequelize.NOW,
            field: 'createdAt',
        },
        updatedAt: {
            type: sequelize.DATE(3),
            defaultValue: sequelize.NOW,
            field: 'updatedAt',
        }
    })
    return teacher;
}




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