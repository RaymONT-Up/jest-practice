const multiplyArrayNumbers = require("./multiplyArrayNumbers");

const testArray = [1, 5, 2, 100];

describe("multiplyArrayNumbers", () => {
  test("Корректное умножение на положительное число", () => {
    expect(multiplyArrayNumbers(testArray, 2)).toEqual([2, 10, 4, 200]);
  });

  test("Корректное умножение на отрицательное число", () => {
    expect(multiplyArrayNumbers(testArray, -3)).toEqual([-3, -15, -6, -300]);
  });

  test("Корректное умножение на ноль", () => {
    expect(multiplyArrayNumbers(testArray, 0)).toEqual([0, 0, 0, 0]);
  });

  test("Корректное умножение на 1 (нейтральный элемент умножения)", () => {
    expect(multiplyArrayNumbers(testArray, 1)).toEqual(testArray);
  });

  test("Умножение на пустой массив (должен вернуть пустой массив)", () => {
    expect(multiplyArrayNumbers([], 5)).toEqual([]);
  });
});
