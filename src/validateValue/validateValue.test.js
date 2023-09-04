const validateValue = require("./validateValue");

describe("ValidateValue", () => {
  test("Корректное значение", () => {
    expect(validateValue(50)).toBe(true);
  });

  test("Меньше корректного значения", () => {
    expect(validateValue(-1)).toBe(false);
  });
  test("Больше корректного значения", () => {
    expect(validateValue(101)).toBe(false);
  });

  test("Верхнее пограничное значение ", () => {
    expect(validateValue(100)).toBe(true);
  });
  test("Нижнее пограничное значение ", () => {
    expect(validateValue(0)).toBe(true);
  });
});
