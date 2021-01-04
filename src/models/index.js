import Sequelize from 'sequelize';
import dotenv from 'dotenv';
import configDB from '../config/config.json';

dotenv.config();
const env = process.env.NODE_ENV || 'development';
const config = configDB[env];
const db = {};

let sequelize;
if (process.env[config.use_env_variable]) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
}

db.sequelize = sequelize;

export default db;
