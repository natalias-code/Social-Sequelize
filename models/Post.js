const { DataTypes, Sequelize } = require('sequelize');
const sequelize = require('../db/connection');

const Post = sequelize.define('Post', {
  title: {
    type: Sequelize.STRING,
  },
  body: {
    type: Sequelize.STRING,
  },
  createdAt: {
    type: Sequelize.STRING,
  },
});

module.exports = {
    Post,
}