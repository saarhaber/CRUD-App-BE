const Sequelize = require('sequelize');
const db = require('../db');

const Campus = db.define("campus", {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },

  imageUrl: {
    type: Sequelize.STRING,
    allowNull: true
  },

  address: {
    type: Sequelize.STRING,
    allowNull: true
  },
});

module.exports = Campus;