export class Attributes<T extends object> {
  constructor(private data: T) {}

  get = <K extends keyof T>(key: K): T[K] => {
    return this.data[key];
  }; // change to arrow function to bind the "this" to the enclose context, namely Attributes class

  set = (update: T): void => {
    Object.assign(this.data, update);
  };

  getAll(): T {
    return this.data;
  }
}
