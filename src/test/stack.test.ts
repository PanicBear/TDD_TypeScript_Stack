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
});
