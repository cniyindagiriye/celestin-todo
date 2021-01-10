export default function validateUser(user) {
  const errors = [];
  const {
    firstName, lastName, email, username, password,
  } = user;
  if (!firstName || firstName.length < 1) errors.push('First Name is required');
  if (!lastName || lastName.length < 1) errors.push('Last Name is required');
  if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(email)) {
    errors.push('E-mail is not valid');
  }
  if (!username || username.length < 4) errors.push('Username is required and should be atleast 4 characters');
  if (!password || password.length < 8 || !password.match(/\d+/g)) errors.push('Password is not strong');
  return errors;
}
