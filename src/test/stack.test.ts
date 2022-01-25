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
});
