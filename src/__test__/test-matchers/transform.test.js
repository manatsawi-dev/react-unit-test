import { user } from "../../__mock__/user";
import { transformUser } from "./transform";

test("matchers transform object", () => {
  expect(transformUser(user)).toEqual({
    userId: 99,
    userName: "Json Young",
    userAge: 25,
    userCity: "London",
  });
});

test("matchers transform object input null", () => {
  expect(transformUser(null)).toEqual("invalid user");
});

test("matchers transform object input is not object", () => {
  expect(transformUser(5)).toEqual("invalid user obj");
});

test("matchers transform object input is not object 2", () => {
  expect(transformUser([])).toEqual("invalid user obj");
});
