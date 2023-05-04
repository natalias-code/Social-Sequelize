const { DataTypes } = require('sequelize');
const sequelize = require('../db/connection');

const Profile = sequelize.define('Profile', {
  bio: {
    type: DataTypes.STRING,
  },
  profilePicture: {
    type: DataTypes.STRING,
  },
  birthday: {
    type: DataTypes.STRING,
  },
});

module.exports = {
    Profile,
}