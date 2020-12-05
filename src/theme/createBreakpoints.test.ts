import { createBreakpoints } from "./createBreakpoints";

describe("createBreakpoints", () => {
  const breakpoints = createBreakpoints({
    values: {
      mobile: 0,
      tablet: 768,
      desktop: 1024,
      max: 1440,
    },
  });

  describe("up", () => {
    it.each`
      name         | value
      ${"mobile"}  | ${0}
      ${"tablet"}  | ${768}
      ${"desktop"} | ${1024}
      ${"max"}     | ${1440}
      ${100}       | ${100}
    `("should work for $name", ({ name, value }) => {
      expect(breakpoints.up(name)).toEqual(`@media (min-width:${value}px)`);
    });
  });

  describe("down", () => {
    it.each`
      name        | value
      ${"mobile"} | ${768 - 0.05}
      ${"tablet"} | ${1024 - 0.05}
      ${100}      | ${100 - 0.05}
    `("should work for $name", ({ name, value }) => {
      expect(breakpoints.down(name)).toEqual(`@media (max-width:${value}px)`);
    });

    it("should work for the largest of breakpoints", () => {
      expect(breakpoints.down("max")).toEqual("@media (min-width:0px)");
    });
  });

  describe("between", () => {
    it("should work", () => {
      expect(breakpoints.between("tablet", "desktop")).toEqual(
        "@media (min-width:768px) and (max-width:1439.95px)"
      );
    });

    it("should accept numbers", () => {
      expect(breakpoints.between(600, 800)).toEqual(
        "@media (min-width:600px) and (max-width:799.95px)"
      );
    });

    it("on largest should call up", () => {
      expect(breakpoints.between("tablet", "max")).toEqual(
        "@media (min-width:768px)"
      );
    });
  });

  describe("only", () => {
    it("should work", () => {
      expect(breakpoints.only("tablet")).toEqual(
        "@media (min-width:768px) and (max-width:1023.95px)"
      );
    });

    it("on largest should call up", () => {
      expect(breakpoints.only("max")).toEqual("@media (min-width:1440px)");
    });
  });

  describe("width", () => {
    it("should work", () => {
      expect(breakpoints.width("tablet")).toEqual(768);
    });
  });
});
