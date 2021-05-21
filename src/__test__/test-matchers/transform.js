export const transformUser = (userObj) => {
  if (!userObj) {
    return "invalid user";
  }
  if (typeof userObj !== "object" || !userObj.id) {
    return "invalid user obj";
  }
  const res = {
    userId: userObj.id,
    userName: userObj.name,
    userAge: userObj.age,
    userCity: userObj.city,
  };
  return res;
};
