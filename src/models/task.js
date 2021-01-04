import Sequelize from 'sequelize';
import db from './index';
import User from './user';

const Task = db.sequelize.define('task', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER,
  },
  taskName: {
    allowNull: false,
    type: Sequelize.STRING,
  },
  active: {
    type: Sequelize.BOOLEAN,
    defaultValue: true,
  },
  createdAt: {
    allowNull: false,
    type: Sequelize.DATE,
  },
  updatedAt: {
    allowNull: false,
    type: Sequelize.DATE,
  },
});

Task.belongsTo(User, { foreignKey: 'fk_user_id', targetKey: 'id' });

export default Task;
