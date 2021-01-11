import express from 'express';
import usercontroller from '../controllers/user';
import validateUser from '../middlewares/validateUser';

const router = express.Router();
router.use(express.json());

router.get('/', (req, res) => {
  res.send('Welcome to ToDo app');
});

router.post('/api/users/signup', validateUser, usercontroller.signup);
router.get('/api/users/', usercontroller.getAllUsers);
router.get('/api/users/:id', usercontroller.getUser);
router.delete('/api/users/:id', usercontroller.deleteUser);

export default router;
