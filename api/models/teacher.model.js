module.exports = function (sequelize, DataTypes) {
    return Teacher = sequelize.define("teachers", {
        teacher_id: {
            type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true
        },
        name: DataTypes.STRING,
        gender: DataTypes.STRING,
        age: DataTypes.INTEGER,
        designation: DataTypes.STRING,
        salary: DataTypes.FLOAT,
        phone: DataTypes.INTEGER,
        email: DataTypes.STRING,
        password: DataTypes.INTEGER,
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