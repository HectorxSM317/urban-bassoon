const { sequelize } = require("../config/database");
const { DataTypes } = require("sequelize");

const Employee = sequelize.define(
  "employees",
  {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    firstName: { type: DataTypes.STRING, allowNull: false },
    lastName: { type: DataTypes.STRING, allowNull: false },
    rut: { type: DataTypes.STRING, allowNull: false },
    dateBirth: { type: DataTypes.DATE, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false },
    phone: { type: DataTypes.STRING, allowNull: false },
    sex: { type: DataTypes.STRING, allowNull: false },
    position: { type: DataTypes.STRING, allowNull: false },
  },
  {
    timestamps: false,
  }
);

module.exports = Employee
