import Stack, { StackImpl } from "../stack";

describe("Stack", () => {
  let stack: Stack;

  beforeEach(() => {
    stack = new StackImpl();
  });

  it("is created empty", () => {
    const size = stack.getSize();
    expect(size).toBe(0);
  });

  it("allows push item", () => {
    stack.push("first item");
    const size = stack.getSize();
    expect(size).toBe(1);
  });

  describe("pop", () => {
    it("throws error without item", () => {
      expect(() => stack.pop()).toThrowError("Null pointer exception");
    });

    it("returns item from top and remove it from stack", () => {
      stack.push("first item");
      stack.push("second item");

      const sizeAfterStacked = stack.getSize();
      const item = stack.pop();
      const sizeAfterPopped = stack.getSize();

      expect(sizeAfterStacked).toBe(2);
      expect(item).toBe("second item");
      expect(sizeAfterPopped).toBe(1);
    });
  });

  describe("peek", () => {
    it("throws error without item", () => {
      expect(() => stack.peek()).toThrowError("Null pointer exception");
    });

    it("returns item from top but don't remove it from stack", () => {
      stack.push("first item");
      stack.push("second item");

      const sizeAfterStacked = stack.getSize();
      const item = stack.peek();
      const sizeAfterPopped = stack.getSize();

      expect(sizeAfterStacked).toBe(2);
      expect(item).toBe("second item");
      expect(sizeAfterPopped).toBe(2);
    });
  });
});
