export default interface Stack<T> {
  getSize: () => number;
  push: (item: T) => void;
  pop: () => T;
  peek: () => T;
}
