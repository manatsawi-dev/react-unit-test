import { user } from "../../__mock__/user";

export const getUser = async (id) => {
  if (!id) {
    return "invalid user id";
  }
  try {
    const res = user.find((x) => x.id === id);
    if (res) {
      return res;
    }
    return "user not found";
  } catch (error) {
    return "error";
  }
};
