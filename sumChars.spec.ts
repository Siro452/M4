import sumChars from "./sumChars"; // import car value function
import { describe, expect, it } from "@jest/globals";
const errorNegative: string = "number cannot be a negative";
const errorWrongChar: string = "invalid character";

describe("sum normal", () => {
  it("normal conditions and input", () => {
    expect(sumChars("civic", 2014)).toBe("$6614");
  });
});

describe(" only numbers ", () => {
  it("Numbers only is ok", () => {
    expect(sumChars("911", 2020)).toBe("$2020");
  });
});

describe("negative values", () => {
  it("Negative year gives wrong error", () => {
    expect(sumChars("Task-Force", -987)).toBe(errorNegative);
  });
});

describe("values are wrong types", () => {
  it("Wrong data type gives wrong error", () => {
    expect(sumChars("C200", "twenty twenty")).toBe(errorWrongChar);
  });
});

describe("inverse value types in wrong positions", () => {
  it("if string and number were inverse values gives error", () => {
    expect(sumChars("213123", "fatcar")).toBe(errorWrongChar);
  });
});

describe("special cahracters or spaces", () => {
  it("special character or string in wrong position will give error, spaces are ignored", () => {
    expect(sumChars("ci vic^", "2014$%")).toBe(errorWrongChar);
  });
});
