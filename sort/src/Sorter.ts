class Sorter {
  // collection: number[];

  // constructor(collection: number[]) {
  //   this.collection = collection;
  // } ----> equal to

  constructor(public collection: number[] | string) {}

  sort(): void {
    const { length } = this.collection;

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        // type guard, execute the code only when the collection is the array;
        // all other type of values except primitive values
        if (this.collection instanceof Array) {
          if (this.collection[j] > this.collection[j + 1]) {
            const leftHand = this.collection[j];
            this.collection[j] = this.collection[j + 1];
            this.collection[j + 1] = leftHand;
          }
        }

        // execute the code when the collection is the number;
        // type guard, in case of the primitive values, such as number, string, boolean and symbol;
        if (typeof this.collection === "string") {
        }
      }
    }
  }
}
