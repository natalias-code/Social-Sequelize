const { Sequelize } = require('sequelize');

const db = new Sequelize({
  dialect: 'sqlite',
  storage: "./db/db.sqlite"
});

module.exports = {
    db,
}