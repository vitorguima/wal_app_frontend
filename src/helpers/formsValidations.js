export const validateEmail = (email) => {
  const patternCheck = /\S+@\S+\.\S+/
    .test(email);
  return patternCheck;
};

export const validatePassword = (password, confirmPassword) => password === confirmPassword;

export const validateFields = (name, lastName, email, password, confirmPassword) => {
  if (validateEmail(email) === false) {
    return 'Invalid email format!';
  }

  if (!validatePassword(password, confirmPassword)) {
    return 'Passwords do not match!';
  }

  if (!name) {
    return "First name can't be blank!";
  }

  if (!lastName) {
    return "Last name can't be blank!";
  }

  return null;
};
