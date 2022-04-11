export const validateEmail = (email) => {
  const patternCheck = /\S+@\S+\.\S+/
    .test(email);
  return patternCheck;
};

export const validatePassword = (password, confirmPassword) => password === confirmPassword;

export const validateFields = (email, password, confirmPassword) => {
  if (validateEmail(email) && validatePassword(password, confirmPassword)) {
    return false;
  } return true;
};
