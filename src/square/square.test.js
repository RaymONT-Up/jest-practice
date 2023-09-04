const square = require("./square");

describe("square", () => {
  // один раз перед всеми тестами
  beforeAll(() => {});

  test("Корректное значение", () => {
    expect(square(2)).toBe(4);
  });
  //   если в square(1) приходит 1, то у нас возвращается просто один
  //  но если любое другое число то вызывается метод pow и повышается в квадрат и тут я хочу проверить вызывается ли метод pow
  test("Практика spyOn -> вызов Math.pow", () => {
    const spyMathPow = jest.spyOn(Math, "pow");

    // метод pow будет вызван 1 раз
    square(2);

    expect(spyMathPow).toBeCalledTimes(1);
    // в toBeCalled можно передать любое значение
    // оно будет обозначать колво вызывов spyMathPow
    // сверху мы вызываем square(2) тем самым внутри функции вызывается один раз pow
  });

  test("Практика spyOn -> без вызова Math.pow", () => {
    const spyMathPow = jest.spyOn(Math, "pow");

    // метод pow не будет вызван
    square(1);

    expect(spyMathPow).toBeCalledTimes(0);
    // toBeCalledTimes(0) выдаст ошибку т.к до этого в тесте один раз выше был вызван square(2)
    // все эти моки накапливаются из-за чего их нужно очищать после каждого теста используя afterEach
    //  jest.clearAllMocks();
    // теперь ошибок нет
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
