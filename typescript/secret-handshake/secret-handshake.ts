export default class HandShake {
  binary_string: string = "";
  secret: string[] = [];
  HANDSHAKE_LIST = ["wink", "double blink", "close your eyes", "jump"];

  constructor(input: number) {
    this.binary_string = input.toString(2);

    for (const [key, value] of this.binary_string
      .split("")
      .reverse()
      .entries()) {
      if (key === 4 && value === "1") {
        this.secret = this.secret.reverse();
      } else if (value === "1") {
        this.secret.push(this.HANDSHAKE_LIST[key]);
      }
    }
  }

  commands() {
    return this.secret;
  }
}
