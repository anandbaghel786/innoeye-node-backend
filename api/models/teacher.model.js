module.exports = function (sequelize, DataTypes) {
    const teacher = sequelize.define("teachers", {
        teacher_id: { type: DataTypes.INTEGER, primaryKey: true },
        name: DataTypes.STRING,
        age: DataTypes.INTEGER,
        salary: DataTypes.FLOAT,
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