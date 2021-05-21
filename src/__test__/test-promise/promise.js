import { users } from "../../__mock__/user";

export const getUser = (id) => {
  return new Promise((resolve, reject) => {
    if (!id) {
      return reject("invalid user id");
    }
    try {
      const res = users.find((x) => x.id === id);
      if (res) {
        resolve(res);
      }
      reject("user not found");
    } catch (error) {
      reject(error);
    }
  });
};
