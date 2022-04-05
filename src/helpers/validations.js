export const validateEmail = (email) => {
  const pattern = /\S+@\S+\.\S+/
    .test(email);
  if (pattern) {
    return false;
  }
  return true;
};
