const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize({
  // connection data will go here
});

const User = sequelize.define('User', {
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
  },
});
