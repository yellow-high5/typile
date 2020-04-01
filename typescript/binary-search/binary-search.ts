export default class BinarySearch {
  public array: number[] | undefined = undefined;

  constructor(array: number[]) {
    if (this.isSorted(array)) {
      this.array = array;
    }
  }

  isSorted(array: number[]): boolean {
    for (let i = 1; i < array.length; i++) {
      if (array[i] < array[i - 1]) {
        return false;
      }
    }
    return true;
  }

  indexOf(target: number): number {
    let index: number = -1;
    if (this.array !== undefined) {
      for (let i = 0; i < this.array.length; i++) {
        if (target === this.array[i]) {
          index = i;
        }
      }
    }
    return index;
  }
}
