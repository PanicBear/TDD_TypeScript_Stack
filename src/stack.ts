export default interface Stack {
  getSize: () => Number;
  push: (item: String) => void;
}

export class StackImpl implements Stack {
  private arr: String[] = [];

  getSize: () => number = () => this.arr.length;

  push: (item: String) => void = (item) => {
    this.arr.push(item);
  };
}
