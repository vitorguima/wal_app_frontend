export const validateOwner = (userId, currentUser) => {
  return userId === currentUser;
};
