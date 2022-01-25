import Stack from "./stack";

export type StackNode<T> = {
  head: StackNode<T> | null;
  item: T;
};

export class StackNodeImpl<T extends String | number> implements Stack<T> {
  private head: StackNode<T> | null = null;
  private size: number = 0;

  getSize: () => number = () => this.size;

  push: (item: T) => void = (item) => {
    const head = this.head;
    const node: StackNode<T> = { head, item };

    this.head = node;
    this.size++;
  };

  pop: () => T = () => {
    const head = this.head;
    if (head === null) {
      throw new Error("Null pointer exception");
    }
    this.head = head;
    this.size--;
    return head.item;
  };

  peek: () => T = () => {
    const head = this.head;
    if (head === null) {
      throw new Error("Null pointer exception");
    }
    return head.item;
  };
}
