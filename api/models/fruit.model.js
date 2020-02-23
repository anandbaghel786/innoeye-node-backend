module.exports = function (sequelize, DataTypes) {
    const fruit = sequelize.define("fruits", {
        fruit_id: { type: DataTypes.INTEGER, primaryKey: true },
        name: DataTypes.STRING,
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
    return fruit;
}