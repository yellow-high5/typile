export default class Pangram {
  //Pangramとはギリシャ語ですべての文字という意味
  private alphabet = "abcdefghijklmnopqrstuvwxyz";
  private sentence: string;

  constructor(sentence: string) {
    this.sentence = sentence.toLowerCase();
  }

  isPangram() {
    let sentence_array: string[] = this.sentence.split("");
    let alphabet_array: string[] = this.alphabet.split("");

    sentence_array.map(s => {
      if (alphabet_array.includes(s)) {
        alphabet_array.splice(alphabet_array.indexOf(s), 1);
      }
    });

    if (alphabet_array.length === 0) {
      return true;
    }
    return false;
  }
}
