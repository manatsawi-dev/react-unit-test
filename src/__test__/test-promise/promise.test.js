import { getUser } from "./promise";

test("works with promise", () => {
  expect.assertions(1);
  return expect(getUser(99)).resolves.toEqual({
    id: 99,
    name: "Json Young",
    age: 25,
    city: "London",
  });
});

test("works with promise 2", () => {
  expect.assertions(1);
  return expect(getUser()).rejects.toEqual("invalid user id");
});

test("works with promise 3", () => {
  expect.assertions(1);
  return expect(getUser(10)).rejects.toEqual("user not found");
});

test("works with promise 4", () => {
  return expect(getUser("catch")).rejects.toEqual("user not found");
});
