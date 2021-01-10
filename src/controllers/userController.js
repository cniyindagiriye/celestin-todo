import User from '../models/user';
import hashPassword from '../utils/hashPassword';
import validateUser from '../validations/validateUser';

export function signupUser(req, res) {
  const user = req.body;
  const errors = validateUser(user);
  if (errors.length > 0) res.json({ errors });
  else {
    const {
      firstName, lastName, email, username, password,
    } = user;
    const hPassword = hashPassword(password);
    User.findOrCreate({
      where: { username },
      defaults: {
        firstName,
        lastName,
        email,
        username,
        password: hPassword,
      },
    })
      .then((createdUser) => {
        if (createdUser[1] === false) {
          res.status(404).json({ Message: 'Username taken' });
        } else {
          res.status(201).json({ createdUser });
        }
      })
      .catch(() => res.status(500).json({ Error: 'Signup failed' }));
  }
}

export function getAllUsers(req, res) {
  User.findAll()
    .then((docs) => {
      res.status(200).json({
        countUsers: docs.length,
        users: docs.map((doc) => ({
          ...doc,
        })),
      });
    })
    .catch(() => res.status(500).json({ Error: 'Failed to get users' }));
}

export function getUser(req, res) {
  const { id } = req.params;
  User.findOne({ where: { id } })
    .then((user) => res.status(200).json({ user }))
    .catch(() => res.status(500).json({ Error: 'Failed to get user' }));
}

export function deleteUser(req, res) {
  const { id } = req.params;
  User.destroy({
    where: {
      id,
    },
  })
    .then((result) => {
      if (result !== 0) res.status(201).json({ Message: 'User deleted successfully' });
      else res.status(500).json({ Error: 'User not found, maybe already deleted' });
    })
    .catch(() => res.status(500).json({ Error: 'Delete user failed' }));
}
