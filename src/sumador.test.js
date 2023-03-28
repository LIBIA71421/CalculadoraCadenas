import Calcu from "./CalculadoraCadena.js";

describe("Sumar", () => {
  it("deberia devolver 0", () => {
    expect(Calcu("")).toEqual(0);
  });
});
