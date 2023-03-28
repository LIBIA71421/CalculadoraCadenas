import Calcu from "./CalculadoraCadena.js";

describe("Sumar", () => {
  it("deberia devolver 0", () => {
    expect(Calcu("")).toEqual(0);
  });
});
describe("Sumar", () => {
  it("deberia devolver 1", () => {
    expect(Calcu("1")).toEqual(1);
  });
});