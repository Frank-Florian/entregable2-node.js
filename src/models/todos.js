const db = require('../utils/database');
const { DataTypes } = require('sequelize');

const Todos = db.define('todos', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  title:{
    type: DataTypes.STRING(255),
    allowNull:true
  },
  description:{
    type: DataTypes.STRING(255),
    allowNull: true
  },
  completed:{
    type: DataTypes.BOOLEAN,
    allowNull: true
  }
});

module.exports = Todos;