import Joi from 'joi';

export default function validateUser(req, res, next) {
  const userValidation = Joi.object({
    firstName: Joi.string().min(4).required(),
    lastName: Joi.string().min(4).required(),
    username: Joi.string().min(4).max(8).required(),
    email: Joi.string().min(4).required().email(),
    password: Joi.string().min(8).max(32).required(),
  });

  const result = userValidation.validate(req.body);
  if (result.error) return res.status(400).json({ message: result.error.details[0].message });
  next();
}
