const { Sequelize } = require('sequelize');
const environments = require('./environments');

const sequelize = new Sequelize(`postgres://${environments.USER_DB}:${environments.PASSWORD_DB}@localhost:5433/${environments.DATABASE}`)


const initSequelize = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
        await sequelize.sync({ force: true }); 
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
}

module.exports = { sequelize, initSequelize }