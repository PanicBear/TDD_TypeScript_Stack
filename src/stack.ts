export default interface Stack {
  getSize: () => Number;
  push: (item: String) => void;
  pop: () => String;
  peek: () => String;
}

export class StackImpl implements Stack {
  private arr: String[] = [];

  getSize: () => number = () => this.arr.length;

  push: (item: String) => void = (item) => {
    this.arr.push(item);
  };

  pop: () => String = () => {
    const item = this.arr.pop();
    if (!item) {
      throw new Error("Null pointer exception");
    }
    return item;
  };

  peek: () => String = () => {
    const item = this.arr[this.getSize() - 1];
    if (!item) {
      throw new Error("Null pointer exception");
    }
    return item;
  };
}
