const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users = require("./user.model.js")(sequelize, Sequelize);
db.groups = require("./group.model.js")(sequelize, Sequelize);

db.groups.hasMany(db.users, { 
    as: "users",
    onDelete: 'cascade'
 });
db.users.belongsTo(db.groups, {
    foreignKey: "groupId",
    as: "group",
  });

module.exports = db;