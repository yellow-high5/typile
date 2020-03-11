export default class RobotName {
  public ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  public name: string;
  public past_names: string[];

  constructor() {
    this.name = this.generateFactoryString(2) + this.generateFactoryNumber(3);
    this.past_names = [];
  }

  generateRandomNumber(max: number): number {
    return Math.floor(Math.random() * Math.floor(max));
  }

  generateFactoryNumber(length: number): number {
    let random_string: string = "";
    for (let i = 0; i < length; i++) {
      random_string =
        random_string + this.generateRandomNumber(10).toString(10);
    }
    return parseInt(random_string, 10);
  }

  generateFactoryString(length: number): string {
    let random_string: string = "";
    for (let i = 0; i < length; i++) {
      let random_number: number = this.generateRandomNumber(26);
      random_string =
        random_string +
        this.ALPHABET.substring(random_number, random_number + 1);
    }
    return random_string;
  }

  resetName(): void {
    this.past_names.push(this.name);
    let new_name = this.name;
    while (this.past_names.includes(new_name)) {
      new_name = this.generateFactoryString(2) + this.generateFactoryNumber(3);
    }
    this.name = new_name;
  }
}
