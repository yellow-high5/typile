export class ResistorColor {
  private colors: string[];

  private COLOR_CODE: { [color: string]: string } = {
    black: "0",
    brown: "1",
    red: "2",
    orange: "3",
    yellow: "4",
    green: "5",
    blue: "6",
    violet: "7",
    grey: "8",
    white: "9"
  };

  constructor(colors: string[]) {
    if (colors.length >= 2) {
      this.colors = colors;
    } else {
      throw Error("At least two colors need to be present");
    }
  }

  value = (): number => {
    return parseInt(
      this.COLOR_CODE[this.colors[0]] + this.COLOR_CODE[this.colors[1]]
    );
  };
}
