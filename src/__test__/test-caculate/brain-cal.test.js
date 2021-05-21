import { addBrain, minusBrain, multiplyBrain, divideBrain } from "./brain-cal";

/**
 * Test case for addBrain func
 */
test("addBrain 1 + 2 to equal 3", () => {
  expect(addBrain(1, 2)).toBe(3);
});

test("addBrain 2 + 2 to equal 4", () => {
  expect(addBrain(2, 2)).toBe(4);
});

test("addBrain 5 + 2 to equal 7", () => {
  expect(addBrain(5, 2)).toBe(7);
});

test("addBrain 10 + 2 to equal 3", () => {
  expect(addBrain(10, 2)).toBe(12);
});

test("addBrain 0.1 + 0.2 to equal .33", () => {
  expect(addBrain(0.1, 0.2)).toBeCloseTo(0.3);
});

/**
 * Test case for minusBrain func
 */
test("minusBrain 1 - 2 to equal -1", () => {
  expect(minusBrain(1, 2)).toBe(-1);
});

test("minusBrain 2 - 2 to equal 0", () => {
  expect(minusBrain(2, 2)).toBe(0);
});

test("minusBrain 50 - 2 to equal 48", () => {
  expect(minusBrain(50, 2)).toBe(48);
});

test("minusBrain 15 - 100 to equal -85", () => {
  expect(minusBrain(15, 100)).toBe(-85);
});

/**
 * Test case for multiplyBrain func
 */
test("multiplyBrain 50 * 2 to equal 100", () => {
  expect(multiplyBrain(50, 2)).toBe(100);
});

test("multiplyBrain 100 * 100 to equal 10000", () => {
  expect(multiplyBrain(100, 100)).toBe(10000);
});

/**
 * Test case for divideBrain func
 */
test("divideBrain 40 / 2 to equal 20", () => {
  expect(divideBrain(40, 2)).toBe(20);
});

test("divideBrain 10 / 5 to equal 2", () => {
  expect(divideBrain(10, 5)).toBe(2);
});
