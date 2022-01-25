import Stack from "./stack";

export class StackArrayImpl<T extends String> implements Stack<T> {
  private arr: T[] = [];

  getSize: () => number = () => this.arr.length;

  push: (item: T) => void = (item) => {
    this.arr.push(item);
  };

  pop: () => T = () => {
    const item = this.arr.pop();
    if (!item) {
      throw new Error("Null pointer exception");
    }
    return item;
  };

  peek: () => T = () => {
    const item = this.arr[this.getSize() - 1];
    if (!item) {
      throw new Error("Null pointer exception");
    }
    return item;
  };
}
