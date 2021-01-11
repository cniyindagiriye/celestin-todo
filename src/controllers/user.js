import models from '../database/models';
import { hashPassword, jwtToken } from '../utils/hashPassword';

export default class User {
  static async signup(req, res) {
    try {
      const {
        firstName, lastName, email, username, password,
      } = req.body;
      const existUser = await models.User.findOne({ where: { email: req.body.email } });
      if (existUser) {
        return res.status(409).json({
          message: 'user already exists',
        });
      }
      const hash = hashPassword(password);
      const user = await models.User.create({
        firstName,
        lastName,
        email,
        username,
        password: hash,
      });
      const token = jwtToken.createToken(user);
      return res.status(201).send({
        token,
        user: {
          firstName, lastName, email, username, password,
        },
      });
    } catch (error) {
      console.log(error);
      return res.status(500).send(error);
    }
  }

  static async getAllUsers(req, res) {
    try {
      const users = await models.User.findAll();
      if (users[0]) {
        return res.status(200).json({
          countUsers: users.length,
          users: users.map((user) => ({
            user,
          })),
        });
      }
      return res.status(409).send('No user added yet');
    } catch (error) {
      console.log(error);
      return res.status(500).send(error);
    }
  }

  static async getUser(req, res) {
    try {
      const { id } = req.params;
      const user = await models.User.findOne({ where: { id } });
      if (user) {
        return res.status(200).json({
          user,
        });
      }
      return res.status(409).send('User not found');
    } catch (error) {
      console.log(error);
      return res.status(500).send(error);
    }
  }

  static async deleteUser(req, res) {
    try {
      const { id } = req.params;
      const result = await models.User.destroy({ where: { id } });
      res.status(201).send('User deleted successfully');
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  }
}
