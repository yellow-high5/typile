class Transcriptor {
  NUCLEOTIDE: { [dna: string]: string } = {
    G: "C",
    C: "G",
    T: "A",
    A: "U"
  };

  toRna(/* Parameters go here */ DNA: string) {
    // Your code here
    let RNA: string = "";
    DNA.split("").map(nucleotide => {
      if (this.NUCLEOTIDE[nucleotide] === undefined) {
        throw Error("Invalid input DNA.");
      }
      RNA = RNA + this.NUCLEOTIDE[nucleotide];
    });
    return RNA;
  }
}

export default Transcriptor;
