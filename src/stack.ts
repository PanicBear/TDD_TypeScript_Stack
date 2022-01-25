export default interface Stack {
  getSize: () => number;
}

export class StackImpl implements Stack {
  private arr = [];

  getSize: () => number = () => this.arr.length;
}
