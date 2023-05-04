const { DataTypes } = require('sequelize');
const sequelize = require('../db/connection.js');

let Comment = db.define("comment", {
    body: DataTypes.STRING,
    createdAt: DataTypes.STRING,
});


module.exports = Comment;
