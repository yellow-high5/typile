class Matrix {
  public arrays: string[][];

  public rows: number[][];

  public columns: number[][];

  constructor(/* Parameters go here */ matrix: string) {
    // Your code here
    // 文字列を二重配列に変換
    this.arrays = matrix.split("\n").map(element => {
      return element.split(" ");
    });
    // 型変換
    this.rows = this.arrays.map(element => {
      return element.map(e => {
        return parseInt(e);
      });
    });
    // 転置
    let columns: number[][] = new Array(this.rows[0].length).fill(0).map(() => {
      return new Array(this.rows.length).fill(0);
    });

    for (let i = 0; i < this.rows.length; i++) {
      let row: number[] = this.rows[i];
      for (let j = 0; j < row.length; j++) {
        let element: number = row[j];
        columns[j][i] = element;
      }
    }
    this.columns = columns;
  }
}

export default Matrix;
