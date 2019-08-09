const Sequelize = require('sequelize');
const db = require('../db');

const Student = db.define("student", {
  firstName: {
    type: Sequelize.STRING,
    allowNull: false
    },

  lastName: {
    type: Sequelize.STRING,
    allowNull: false
    },

  email: {
    type: Sequelize.STRING,
    allowNull: true
  },

  imageUrl: {
    type: Sequelize.STRING,
    allowNull: true
  },
  gpa: {
    type: Sequelize.FLOAT,
    allowNull: true
  }
});

module.exports = Student;