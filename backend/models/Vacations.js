const { sequelize } = require("../config/database");
const { DataTypes } = require("sequelize");
const Employee = require("./Employee");

const Vacations = sequelize.define(
    "vacations",
    {
        id: {type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true},
        dateStart: { type: DataTypes.DATE, allowNull: false},
        dateEnd: { type: DataTypes.DATE, allowNull: false},
        state: { type: DataTypes.STRING, allowNull: true}
    }
    );

Vacations.employee = Vacations.belongsTo(Employee)

module.exports = Vacations