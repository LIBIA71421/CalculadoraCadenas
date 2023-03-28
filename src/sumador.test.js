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
describe("Sumar", () => {
  it("deberia devolver suma separada por ,", () => {
    expect(Calcu("1,2")).toEqual(3);
  });
});
describe("Sumar", () => {
  it("deberia devolver suma separada por , de tres digitos", () => {
    expect(Calcu("2,5,8")).toEqual(15);
  });
});
describe("Sumar", () => {
  it("deberia devolver suma separada por , o -", () => {
    expect(Calcu("2,5-8")).toEqual(15);
  });
});