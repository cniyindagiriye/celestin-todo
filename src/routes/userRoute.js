import express from 'express';
import {
  signupUser, getAllUsers, getUser, deleteUser,
} from '../controllers/userController';

const userRoutes = express.Router();

userRoutes.post('/signup', signupUser);
userRoutes.get('/', getAllUsers);
userRoutes.get('/:id', getUser);
userRoutes.delete('/:id', deleteUser);

export default userRoutes;
