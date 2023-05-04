const { DataTypes } = require('sequelize');
const sequelize = require('../db/connection');

const User = sequelize.define('User', {
  username: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING,
  },
});

module.exports = {
    User,
}

