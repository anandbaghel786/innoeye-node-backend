'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const customers = require("./customer.model")
const order = require("./order.model")
const fruit = require("./fruit.model")
const teacher = require("./teacher.model")
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = sequelize['import'](path.join(__dirname, file));
    db[model.name] = model;
  });


db.customers = customers(sequelize, Sequelize)
db.order = order(sequelize, Sequelize)
db.teacher = teacher(sequelize, Sequelize)
db.fruit = fruit(sequelize, Sequelize)
db.customers.hasMany(db.order);
// db.order.belongsTo(db.customers, { foreignKey: 'fk_cust' });
Object.keys(db).forEach(modelName => {
  console.log(modelName);
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;
async function createTables() {

  await db.customers.sync();
  await db.order.sync();
  db.order.belongsTo(db.customers, { foreignKey: 'fk_company' });
  console.log('done');
  // sequelize.close();
}

createTables();
sequelize.authenticate()
  .then(function (err) {
    console.log('Colly.');
  })
  .catch(function (err) {
    console.log('Unable to connect to the database:', err);
  });
module.exports = db;
