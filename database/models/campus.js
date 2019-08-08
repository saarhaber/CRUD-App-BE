const Sequelize = require('sequelize');
const db = require('../db');

const Campus = db.define("campus", {

  id: {
    type: Sequelize.INTEGER,
    allowNull: false
  },

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
  cstudents: {
    type: Sequelize.ARRAY,
    allowNull: true
  }


});

module.exports = Campus;