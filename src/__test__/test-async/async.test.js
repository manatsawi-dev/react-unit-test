import { getUser } from "./async";

it("works with async/await", async () => {
  expect.assertions(1);
  const data = await getUser(99);
  expect(data).toEqual({
    id: 99,
    name: "Json Young",
    age: 25,
    city: "London",
  });
});

it("works with async/await 2", async () => {
  expect.assertions(1);
  const data = await getUser();
  expect(data).toEqual("invalid user id");
});

it("works with async/await 3", async () => {
  expect.assertions(1);
  const data = await getUser(11);
  expect(data).toEqual("user not found");
});
